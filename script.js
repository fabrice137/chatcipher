/**
 * Chat Cipher — Caesar cipher with hex encoding
 *
 * Encrypts plaintext using a Caesar (shift) cipher, then converts the result
 * to a hexadecimal string. Decryption reverses the process.
 */

/* ── Hex helpers ─────────────────────────────────────────────── */

function toHex(str) {
  let hex = "";
  for (let i = 0; i < str.length; i++) {
    hex += str.charCodeAt(i).toString(16).padStart(2, "0");
  }
  return hex;
}

function fromHex(hex) {
  let str = "";
  for (let i = 0; i < hex.length; i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return str;
}

/* ── Validation ──────────────────────────────────────────────── */

function validateShift() {
  const shift = document.getElementById("shift").value;
  const error = document.getElementById("error");

  if (!shift || isNaN(shift) || shift < 1 || shift > 25) {
    error.classList.remove("hidden");
    return false;
  }
  error.classList.add("hidden");
  return true;
}

function getShiftValue() {
  return parseInt(document.getElementById("shift").value, 10);
}

/* ── Caesar cipher core ──────────────────────────────────────── */

function caesarShift(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      result += String.fromCharCode(((c - 65 + shift) % 26) + 65);
    } else if (c >= 97 && c <= 122) {
      result += String.fromCharCode(((c - 97 + shift) % 26) + 97);
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}

/* ── Public actions ──────────────────────────────────────────── */

function encrypt() {
  if (!validateShift()) return;
  const plaintext = document.getElementById("plaintext").value;
  const shifted = caesarShift(plaintext, getShiftValue());
  document.getElementById("ciphertext").value = toHex(shifted);
}

function decrypt() {
  if (!validateShift()) return;
  const hex = document.getElementById("ciphertext").value;
  const ciphertext = fromHex(hex);
  const shift = getShiftValue();
  document.getElementById("plaintext").value = caesarShift(ciphertext, 26 - shift);
}

/* ── Copy-to-clipboard ───────────────────────────────────────── */

function copyToClipboard(id) {
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.value).then(() => {
    const btn = el.parentElement.querySelector("[data-copy]");
    const original = btn.innerHTML;
    btn.innerHTML = `<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;
    setTimeout(() => (btn.innerHTML = original), 1200);
  });
}

/* ── Swap fields ─────────────────────────────────────────────── */

function swapFields() {
  const pt = document.getElementById("plaintext");
  const ct = document.getElementById("ciphertext");
  [pt.value, ct.value] = [ct.value, pt.value];
}

/* ── Clear all ───────────────────────────────────────────────── */

function clearAll() {
  document.getElementById("plaintext").value = "";
  document.getElementById("ciphertext").value = "";
  document.getElementById("shift").value = 1;
  document.getElementById("error").classList.add("hidden");
}
