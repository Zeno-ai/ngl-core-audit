# 🕵️‍♂️ ngl-core-audit - Advanced Phishing Simulation & Audit Tool

> **DISCLAIMER:** This project is created strictly for **educational purposes** and **authorized security auditing** only. The developer assumes no responsibility for misuse. Use responsibly to test your own security awareness or that of consenting parties.

**ngl-core-audit** is a high-fidelity clone of the popular anonymous messaging app NGL, engineered to demonstrate social engineering vectors, data capture techniques, and geolocation tracking strategies. It features a robust Admin Panel for real-time configuration and data analysis.

---

## 🚀 Key Features

### 1. 🎣 Phishing Simulation Modes

Configure the attack vector directly from the Admin Panel:

- **Username Only Mode (`username`)**: Simulates a standard NGL flow asking only for the Instagram username. Low friction.
- **Fake Login Mode (`ig_login`)**: Presents a pixel-perfect clone of the Instagram Login screen. Captures tracking credentials (username + password). High value.
- **Direct Mode (`none`)**: Allows sending messages without any prompts. Used to build trust before switching modes.

### 2. 📍 Advanced Geolocation Tracking

Two distinct strategies to capture target location coordinates (Latitude/Longitude), fully configurable via Admin:

- **Strategy A: Integrated (Silent)**
  - Requests location permission automatically when the Fake Login page loads.
  - Best for "Login Mode" where users might expect security checks.

- **Strategy B: "Nearby Discovery" (Social Engineering)**
  - Adds a tempting **"📍 Discover Nearby People (BETA)"** button to the footer of every screen (Message, Gate, Prompt).
  - **The Hook:** Clicking the button triggers the browser's location permission prompt.
  - **Immediate Capture:** As soon as permission is granted, the location is **instantly saved** to Firebase (even if the user acts no further).
  - **The Bait:** After capture, users are shown an alert ("3 Active Users Found nearby!") and redirected to the Login page to "message them".

### 3. 🛡️ Comprehensive Admin Panel

A powerful dashboard to monitor and control the simulation:

- **📥 Inbox**: View all anonymous messages sent by targets. Includes IP address and timestamp.
- **🔑 Credentials**: View captured Instagram credentials (Username/Password). Includes password visibility toggle and IP tracking.
- **🌍 Location History**: A unified timeline feed of all captured location data.
  - **Color Coded**: Distinguishes between locations captured via *Messages* (Blue) vs. *Logins* (Red).
  - **Smart Context**: Shows the associated message content or username tracking the location.
  - **Maps Integration**: One-click deep link to open coordinates in Google Maps.
- **🎨 Media Library**: Generate "Instagram Story" style images from received messages using the built-in canvas generator.
- **⚙️ Settings**: Real-time toggles for Capture Modes and Location Strategies.

### 4. 🕵️ Data Capture Intelligence

The system silently captures:

- **IP Address:** Tracking via `ipify` API on every interaction.
- **User Agent:** Device and browser fingerprinting.
- **Timestamps:** Precise event logging.
- **Partial Data:** "Immediate Save" architecture ensures data (like location) is stored the moment it is available, preventing data loss if the user abandons the flow.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite, Framer Motion (for smooth, realistic animations).
- **Backend:** Firebase (Firestore NoSQL Database).
- **Styling:** CSS3, Lucide React Icons.
- **Deployment:** Vercel / Netlify compatible.

---

## 📦 Installation & Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/BugraAkdemir/ngl-core-audit.git
    cd ngl-core-audit
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Firebase Configuration**
    - Create a project at [Firebase Console](https://console.firebase.google.com/).
    - Enable **Firestore Database**.
    - Set rules to allow read/write (for simulation/testing):

        ```javascript
        allow read, write: if true;
        ```

    - Create a `.env` file based on `.env.example` and populate with your Firebase config keys.

4. **Run Locally**

    ```bash
    npm run dev
    ```

5. **Build for Production**

    ```bash
    npm run build
    ```

---

## 📸 Snapshots

- **Fake Login:** Pixel-perfect replication of Instagram's UI to maximize trust.
- **Nearby Button:** Strategically placed "BETA" feature to incentivize location sharing.
- **Admin Dashboard:** clean, dark-mode inspired interface for data visualization.

---

## ⚠️ Legal & Ethical Warning

This software is for **Educational Use Only**.

- **DO NOT** use this against targets without their explicit, prior consent.
- **DO NOT** use this for malicious credential harvesting.
- The developer is not responsible for any damage caused by this tool.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Project by Bugra Akdemir*
