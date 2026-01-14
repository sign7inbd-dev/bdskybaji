/* =====================================================
   Sky Baji - Authentication JavaScript
   ===================================================== */

// Login Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

// Handle Login
function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const remember = document.getElementById('remember').checked;

    // Validation
    if (!email || !password) {
        showToast('অনুগ্রহ করে সব ফিল্ড পূরণ করুন', 'error');
        return;
    }

    // Validate email format
    if (!isValidEmail(email)) {
        showToast('অবৈধ ইমেইল ঠিকানা', 'error');
        return;
    }

    // Show loading
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'লোড হচ্ছে...';

    // Simulate API call
    setTimeout(() => {
        // Demo: Accept any valid email
        const user = {
            id: Math.random(),
            name: email.split('@')[0],
            email: email,
            phone: '',
            createdAt: new Date().toISOString()
        };

        storeUser(user);
        
        showToast('সফলভাবে লগইন করা হয়েছে!', 'success');
        
        // Redirect to dashboard
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);

        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }, 1000);
}

// Handle Register
function handleRegister(e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const terms = document.getElementById('terms').checked;

    // Validation
    if (!fullname || !phone || !email || !password || !confirmPassword) {
        showToast('অনুগ্রহ করে সব ফিল্ড পূরণ করুন', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showToast('অবৈধ ইমেইল ঠিকানা', 'error');
        return;
    }

    if (!isValidPhone(phone)) {
        showToast('অবৈধ ফোন নম্বর', 'error');
        return;
    }

    if (password.length < 6) {
        showToast('পাসওয়ার্ড কমপক্ষে 6 অক্ষরের হতে হবে', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showToast('পাসওয়ার্ড সামঞ্জস্যপূর্ণ নয়', 'error');
        return;
    }

    if (!terms) {
        showToast('অনুগ্রহ করে শর্তাবলী সম্মত করুন', 'error');
        return;
    }

    // Show loading
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'রেজিস্টার হচ্ছে...';

    // Simulate API call
    setTimeout(() => {
        const user = {
            id: Math.random(),
            name: fullname,
            email: email,
            phone: phone,
            createdAt: new Date().toISOString()
        };

        storeUser(user);
        
        showToast('অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!', 'success');
        
        // Redirect to dashboard
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);

        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }, 1000);
}

// Validate Email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate Phone
function isValidPhone(phone) {
    // Bangladesh phone number validation
    const phoneRegex = /^(\+880|880|0)?[1-9]\d{8,9}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
}

// Check Authentication on Protected Pages
function checkAuthentication() {
    const protectedPages = [
        'dashboard.html',
        'profile.html',
        'deposit.html',
        'withdraw.html'
    ];

    const currentPage = window.location.pathname.split('/').pop();

    if (protectedPages.includes(currentPage) && !isLoggedIn()) {
        window.location.href = 'login.html';
    }
}

// Run authentication check on page load
document.addEventListener('DOMContentLoaded', checkAuthentication);

// Password visibility toggle
function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        if (input.type === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        }
    }
}

// Add password strength indicator to password inputs
document.addEventListener('DOMContentLoaded', function() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    passwordInputs.forEach(input => {
        input.addEventListener('input', function() {
            const strength = checkPasswordStrength(this.value);
            console.log('Password strength:', getPasswordStrengthLabel(strength));
        });
    });
});

// Remember Me functionality
document.addEventListener('DOMContentLoaded', function() {
    const rememberCheckbox = document.getElementById('remember');
    const emailInput = document.getElementById('email');

    if (rememberCheckbox && emailInput) {
        // Load remembered email
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            emailInput.value = rememberedEmail;
            rememberCheckbox.checked = true;
        }

        // Save remembered email
        rememberCheckbox.addEventListener('change', function() {
            if (this.checked) {
                localStorage.setItem('rememberedEmail', emailInput.value);
            } else {
                localStorage.removeItem('rememberedEmail');
            }
        });

        emailInput.addEventListener('change', function() {
            if (rememberCheckbox.checked) {
                localStorage.setItem('rememberedEmail', this.value);
            }
        });
    }
});

// Session timeout (auto-logout after 30 minutes)
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
let sessionTimer;

function resetSessionTimer() {
    clearTimeout(sessionTimer);
    
    if (isLoggedIn()) {
        sessionTimer = setTimeout(() => {
            showToast('আপনার সেশন সময়োপযোগী হয়েছে। অনুগ্রহ করে আবার লগইন করুন।', 'warning');
            clearUser();
            window.location.href = 'login.html';
        }, SESSION_TIMEOUT);
    }
}

// Reset timer on user activity
document.addEventListener('click', resetSessionTimer);
document.addEventListener('keypress', resetSessionTimer);
document.addEventListener('mousemove', resetSessionTimer);

// Initialize session timer
document.addEventListener('DOMContentLoaded', resetSessionTimer);
