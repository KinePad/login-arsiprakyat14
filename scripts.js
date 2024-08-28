let captchaText = '';

function generateCaptcha() {
    captchaText = Math.random().toString(36).substring(2, 7).toUpperCase();
    document.getElementById('captchaImage').innerText = captchaText;
}

function validateForm() {
    const captchaInput = document.getElementById('captchaInput').value;
    if (captchaInput !== captchaText) {
        alert('CAPTCHA tidak cocok. Silakan coba lagi.');
        return false;
    }
    // Tambahkan logika validasi username dan password di sini
    alert('Login berhasil!');
    return true;
}

// Generate initial CAPTCHA
generateCaptcha();
