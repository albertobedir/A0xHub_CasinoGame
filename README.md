# Project Summary

This project successfully implements two main features:

## 1. Theme Switching

- A **Redux reducer** was created to manage the theme state (`theme` reducer).
- A `ThemeSwitcher` component was developed to allow dynamic switching between Light and Dark themes.
- CSS styles update dynamically based on the selected theme.
- Theme-related colors and icons are managed via external CSS classes in the `style.css` file.
- The theme preference is synchronized throughout the entire application for a seamless user experience.

## 2. Wallet Integration

- A simple connection function for **MetaMask** and compatible Ethereum wallets was implemented (`connectWallet`).
- When the user clicks the “Sign-In” button, the wallet connection is triggered and the wallet address is retrieved.
- Users are alerted on connection rejection or errors.
- All alert messages are adapted to support multiple languages through translation files.
- Supported languages include English, German, Spanish, French, Italian, Portuguese, Romanian, Russian, and Chinese.
