# Extreme Choice: Pixel-Perfect NGL Orchestration Plan

This plan outlines the steps to push the FakeNgl project to "indistinguishable" status compared to the original NGL app.

## Phase 1: Planning & Analysis (`project-planner`)

- **Design Audit**: Analyze `media__1771005911518.jpg` for:
  - Card radius (looks like ~36px instead of 30px).
  - Font weight for username (Semi-bold vs Bold).
  - Shadow spread and color (subtle, slightly warm).
  - Exact dice icon style (3D/Emoji style vs flat icon).

## Phase 2: Ultra-Fidelity Implementation (`frontend-specialist`)

### 1. Style Polish (`index.css`)

- Update `--ngl-gradient` to match the exact vertical-ish skew in the screenshot.
- Implement pill-shaped buttons with `aspect-ratio` or fixed padding to match the "chonky" NGL feel.
- Add `user-select: none` to UI elements to mimic app behavior.

### 2. Sender Page (`Send.jsx`)

- Use literal 🔒 and 🎲 emojis where appropriate to match the mobile-first screenshot aesthetic.
- Add the "active" states for buttons (subtle pulse or shrink).
- Fix the gradient card inside the white card (Image 1 shows the question box has its own gradient/style).

### 3. Admin Panel (`Admin.jsx`)

- Implement the "Bir şeyler yaz..." footer input.
- Match the "NGL" logo font closer to the stylized version in Image 2.
- Ensure the cards have the exact header/body split.

## Phase 3: E2E Live Testing (`test-engineer`)

- **Interactive Flow**:
    1. Start dev server.
    2. Navigate to root.
    3. Click dice 5 times.
    4. Type a message.
    5. Click "Gönder!".
    6. Verify "GÖNDERİLDİ!" feedback.
    7. Navigate to `/admin`.
    8. Verify card exists with correct gradient top.
    9. Delete message and verify empty state.

## Phase 4: Final Polish (`ui-ux-pro-max`)

- Audit against accessibility and responsiveness.
- Ensure mobile viewports (375px) are pixel-perfect.
