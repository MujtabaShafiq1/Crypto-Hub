const crypto = require("crypto-js");

// Encrypts a primary key
function encryptId(plaintext, key) {
    return crypto.AES.encrypt(plaintext, process.env.CRYPTO_KEY).toString();
}

// Decrypts a primary key
function decryptId(ciphertext, key) {
    const bytes = crypto.AES.decrypt(ciphertext, process.env.CRYPTO_KEY);
    return parseInt(bytes.toString(crypto.enc.Utf8));
}

module.exports = { encryptId, decryptId };
