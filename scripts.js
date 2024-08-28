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

    // Menambahkan logika validasi username dan password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Cek username dan password (contoh sederhana, sebaiknya diganti dengan validasi server-side)
    if (username === 'user' && password === 'password') {
        alert('Login berhasil!');
        window.location.href = 'https://arsiprakyat14.wordpress.com/'; // Ganti URL ini dengan situs tujuan Anda
        return false; // Mencegah pengiriman form
    } else {
        alert('Username atau password salah. Silakan coba lagi.');
        return false;
    }
}

// Generate initial CAPTCHA
generateCaptcha();
