import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;
const DATA_FILE = path.join(__dirname, 'mes.json');

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            "style-src": ["'self'", "'unsafe-inline'"],
            "img-src": ["'self'", "data:", "https:", "http:"],
        },
    },
}));
app.use(cors());
app.use(express.json());

// Rate limiting for message submission
const messageLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 messages per window
    message: { error: 'Too many messages sent from this IP, please try again later.' }
});

// Admin Authentication Middleware
const authenticateAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const adminUser = process.env.VITE_ADMIN_USERNAME;
    const adminPass = process.env.VITE_ADMIN_PASSWORD;

    // Simple Base64 auth check or custom header
    // For simplicity here, we expect a custom header for implementation
    if (req.headers['x-admin-user'] === adminUser && req.headers['x-admin-pass'] === adminPass) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

// Helper to read data
async function readData() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return { messages: [], settings: { requireIg: true }, media: [] };
    }
}

// Helper to write data atomically
async function writeData(data) {
    const tempFile = `${DATA_FILE}.tmp`;
    await fs.writeFile(tempFile, JSON.stringify(data, null, 2));
    await fs.rename(tempFile, DATA_FILE);
}

// Routes

// Public: Get settings (needed for Send page)
app.get('/api/settings', async (req, res) => {
    const data = await readData();
    res.json(data.settings);
});

// Public: Submit message
app.post('/api/messages', messageLimiter, async (req, res) => {
    const { text, igUsername, ip } = req.body;
    if (!text) return res.status(400).json({ error: 'Message text is required' });

    const data = await readData();
    const newMessage = {
        id: Date.now(),
        text,
        igUsername: igUsername || 'Atlandı',
        ip: ip || req.ip,
        timestamp: new Date().toISOString()
    };

    data.messages.unshift(newMessage);
    await writeData(data);
    res.status(201).json({ success: true });
});

// Private: Full data access for Admin
app.get('/api/admin/data', authenticateAdmin, async (req, res) => {
    const data = await readData();
    res.json(data);
});

// Private: Update settings
app.post('/api/admin/settings', authenticateAdmin, async (req, res) => {
    const { requireIg } = req.body;
    const data = await readData();
    data.settings.requireIg = !!requireIg;
    await writeData(data);
    res.json({ success: true });
});

// Private: Update media library metadata
app.post('/api/admin/media', authenticateAdmin, async (req, res) => {
    const { text, timestamp } = req.body;
    const data = await readData();
    data.media.unshift({ id: Date.now(), text, timestamp });
    await writeData(data);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
