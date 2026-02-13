# Final Polish Orchestration Plan

## Phase 1: Debugging & UI Repair (`frontend-specialist`)

### 1. PNG Download Fix

- **Issue**: The generated PNG is "broken" (likely due to off-screen rendering or `html2canvas` timing).
- **Solution**:
  - Change `StoryCanvas` from `position: fixed; left: -9999px` to a container that is visible but high-z-index and moved via `translateX` or similar, OR use a hidden container that is temporarily revealed.
  - Set `window.devicePixelRatio` manually in `html2canvas` options for higher quality.
  - Add `logging: true` briefly if needed to debug.

### 2. Success Screen (`Send.jsx`)

- After `isSent` becomes true, instead of just a button change, show a full-page overlay or a new screen.
- Text: "teşekkürler mesajınız iletildi!"
- Buttons: "Bir mesaj daha gönder", "NGL'ye katıl".

## Phase 2: Branding (`seo-specialist` / `frontend-specialist`)

### 1. Favicon & Logo

- Update `public/favicon.ico` (or just `index.html` link) to use the NGL icon style.
- Use a high-quality Lucide icon or an SVG path for the Favicon.

### 2. 1:1 UI Fidelity

- Double check padding on the Admin message cards.
- Ensure the "İndir" button pill matches the exact NGL share button color/style.

## Phase 3: Verification (`test-engineer`)

- Perform 3 test downloads and inspect file extension + content.
- Verify success screen appears and resets the form correctly.
