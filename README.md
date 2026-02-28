# Chat Cipher

A sleek, browser-based Caesar cipher tool that encrypts and decrypts text using a configurable shift key and hex encoding — all running 100 % client-side with zero dependencies.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Features

- **Caesar-shift encryption** — shift each letter by 1–25 positions in the alphabet
- **Hex encoding** — cipher output is converted to hexadecimal for safe sharing
- **Instant decrypt** — paste hex-encoded cipher text, enter the shift key, and get the original message back
- **Swap & copy** — one-click swap between plain/cipher fields and copy-to-clipboard buttons
- **Privacy first** — no data ever leaves your browser; no server, no tracking
- **Responsive UI** — dark-themed, mobile-friendly interface built with Tailwind CSS

## Getting Started

No build step required. Just open the file in a browser:

```bash
# clone the repo
git clone https://github.com/<your-username>/chatcipher.git
cd chatcipher

# open in your default browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

Or simply double-click [index.html](index.html).

> **Note:** Tailwind CSS is loaded via CDN, so an internet connection is needed on the first load (the browser will cache it afterwards).

## Usage

1. Type (or paste) your message into the **Plain text** field.
2. Set a **Shift key** between 1 and 25.
3. Click **Encrypt** — the hex-encoded cipher text appears below.
4. Share the cipher text and the shift key with the recipient.
5. To decrypt, paste the hex string into **Cipher text**, enter the same shift key, and click **Decrypt**.

## Project Structure

```
chatcipher/
├── index.html   # UI markup (Tailwind CSS via CDN)
├── script.js    # Encryption / decryption logic
├── README.md
└── LICENSE
```

## How It Works

1. **Shift** — each letter in the plaintext is shifted forward (encrypt) or backward (decrypt) by _n_ positions in the alphabet. Non-letter characters are left unchanged.
2. **Hex encode** — the shifted string is converted character-by-character to two-digit hex codes, producing the final cipher text.
3. **Decrypt** — the hex string is decoded back to characters, then each letter is reverse-shifted to recover the original message.

## License

This project is available under the terms specified in the [LICENSE](LICENSE) file.
