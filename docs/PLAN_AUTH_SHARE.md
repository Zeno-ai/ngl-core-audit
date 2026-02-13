# Orchestration Plan: Admin Security & Story Share

## Context

- **Objective**: Protect `/admin` and allow "Story" style image downloads of messages.
- **Constraints**:
  - No real DB (use LocalStorage/SessionStorage).
  - Pixel-perfect PNG generation (NGL style).
  - Username: `BHSMTALSHB`.
  - Generated Password: `BHSM_Ngl_Master_2026_!`

---

## Phase 1: Security Foundation (`security-auditor`)

1. **Login Component**:
    - A minimal, NGL-styled login page at `/login`.
    - Hardcoded check for `BHSMTALSHB` and the specified password.
    - Set an `admin_token` in `sessionStorage` upon success.
2. **Auth Guard**:
    - Create a HOC or wrapper component for `/admin` that redirects to `/login` if no token is found.

## Phase 2: Ultra-Fidelity Design (`frontend-specialist`)

1. **Story Template**:
    - Design a hidden or overlay component that mimics the NGL "Social Share" screen:
        - Full-screen pink-orange gradient background.
        - The white/gradient question card centered.
        - Big black NGL logo vertically centered below or above.
        - "anonymous q&a" text.
2. **PNG Engine**:
    - Use `html2canvas` to target the template.
    - Implement a `downloadStory(msgId)` function in `Admin.jsx`.
3. **Admin UI Update**:
    - Add an "İndir" (Download) button with an icon (likely a share or download glyph) next to each message card.

## Phase 3: Verification (`test-engineer`)

1. **Credential Test**: Verify failed logins are rejected.
2. **Path Protection**: Verify direct URL access to `/admin` redirects to login.
3. **Image Export Test**:
    - Generate a sample story.
    - Verify resolution (likely 1080x1920 ratio) and visual fidelity.

---

## Credentials To Use

- **Username**: `BHSMTALSHB`
- **Password**: `BHSM_Ngl_Master_2026_!`
