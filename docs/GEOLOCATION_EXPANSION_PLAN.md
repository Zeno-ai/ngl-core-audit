# Geolocation Expansion Plan

## 1. Goal

Make the "Nearby Discovery" (Yakınlardaki Kişileri Keşfet) feature available across ALL steps of the user flow, not just the login gate.

## 2. Approach

- Move the "Nearby" button logic from the `ig_gate` block to the shared `footer-elements` block in `Send.jsx`.
- This ensures it appears for:
  - `ig_gate` (Login Gate)
  - `ig_prompt` (Username Prompt)
  - `message` (Anonymous Message Form)

## 3. Implementation Steps

### Frontend (`src/pages/Send.jsx`)

1. **Remove** the `nearby-btn` code from the `ig_gate` block.
2. **Add** the `nearby-btn` code to the `footer-elements` block (lines 359+).
3. **Refine Logic**:
    - The button needs to be visible if `enableLocation` is true AND `locationStrategy === 'nearby_feature'`.
    - Clicking it triggers the location prompt -> Alert -> Redirect to `ig_login` (if not already there).
    - If user is ALREADY in `ig_login` step? The footer is hidden in `ig_login` (FakeInstagramLogin is full screen overlay). This is correct behavior.
    - If user is in `message` step (sending anon message without login requirement), clicking "Nearby" redirects them to LOGIN?
      - **Decision**: Yes, the "Nearby" feature is a "bait" to get credentials. So clicking it should always tempt them to "Log in to see who is nearby".

## 4. Verification

- Verify button appears on "Message" screen.
- Verify button appears on "Username" screen.
- Verify button appears on "Gate" screen.
