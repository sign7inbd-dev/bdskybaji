/* =====================================================
   Sky Baji - Main JavaScript (Common Functions)
   ===================================================== */

// Navigation Menu Toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Close menu when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Mobile hamburger menu
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });

    const protoTabs = document.querySelectorAll('.promo-tab');
    protoTabs.forEach(button => {
        button.addEventListener('click', switchPromoTab);
    });

    // Category tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(button => {
        button.addEventListener('click', switchCategory);
    });

    // Sport buttons
    const sportButtons = document.querySelectorAll('.sport-btn');
    sportButtons.forEach(button => {
        button.addEventListener('click', selectSport);
    });
});

// Switch Tabs
function switchTab(e) {
    const tabName = e.target.getAttribute('data-tab');
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    // Show selected tab content
    const tabContent = document.getElementById(tabName + '-tab');
    if (tabContent) {
        tabContent.classList.add('active');
    }
}

// Switch Promo Tabs
function switchPromoTab(e) {
    const tabName = e.target.getAttribute('data-tab');
    
    document.querySelectorAll('.promo-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    
    e.target.classList.add('active');
    
    // Filter promotions if needed
    filterPromotions(tabName);
}

// Switch Category
function switchCategory(e) {
    document.querySelectorAll('.category-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    
    e.target.classList.add('active');
    
    const category = e.target.getAttribute('data-category');
    loadLiveGames(category);
}

// Select Sport
function selectSport(e) {
    document.querySelectorAll('.sport-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    e.target.classList.add('active');
    
    const sport = e.target.getAttribute('data-sport');
    loadMatches(sport);
}

// Format Currency (Bangladeshi Taka)
function formatCurrency(amount) {
    return '৳ ' + amount.toLocaleString('bn-BD');
}

// Show Toast Notification
function showToast(message, type = 'success', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#f39c12'};
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        z-index: 10000;
        animation: slideRight 0.4s ease-out;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, duration);
}

// Loading Spinner
function showLoading(container) {
    if (!container) return;
    
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    spinner.id = 'loading-spinner';
    container.innerHTML = '';
    container.appendChild(spinner);
}

function hideLoading(container) {
    if (!container) return;
    
    const spinner = container.querySelector('.spinner');
    if (spinner) {
        spinner.remove();
    }
}

// Validate Email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate Phone
function validatePhone(phone) {
    const phoneRegex = /^(\+880|880|0)?[1-9]\d{8,9}$/;
    return phoneRegex.test(phone);
}

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('user') !== null;
}

// Get logged in user
function getLoggedInUser() {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
}

// Store user
function storeUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

// Clear user
function clearUser() {
    localStorage.removeItem('user');
}

// Logout function
document.addEventListener('DOMContentLoaded', function() {
    const logoutButtons = document.querySelectorAll('.btn-logout');
    logoutButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            clearUser();
            window.location.href = 'login.html';
        });
    });
});

// Filter Promotions
function filterPromotions(category) {
    const promoCards = document.querySelectorAll('.promo-card');
    promoCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            const badge = card.querySelector('.promo-badge').textContent.toLowerCase();
            if (badge.includes(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Load Live Games
function loadLiveGames(category) {
    console.log('Loading live games for category:', category);
    // This will be populated with API calls
}

// Load Matches
function loadMatches(sport) {
    console.log('Loading matches for sport:', sport);
    // This will be populated with API calls
}

// Apply Filters (Games Page)
function applyFilters() {
    const gameType = document.getElementById('gameType')?.value || '';
    const sortBy = document.getElementById('sortBy')?.value || '';
    
    console.log('Applying filters - Type:', gameType, 'Sort:', sortBy);
    
    // Load games with filters
    loadGamesWithFilters(gameType, sortBy);
}

// Load Games with Filters
function loadGamesWithFilters(type, sortBy) {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;
    
    showLoading(gamesGrid);
    
    // Simulate API call delay
    setTimeout(() => {
        const games = [
            { id: 1, name: 'স্লট মেশিন', type: 'slots', emoji: '🎰' },
            { id: 2, name: 'রুলেট', type: 'table', emoji: '🎲' },
            { id: 3, name: 'ক্র্যাশ গেম', type: 'crash', emoji: '💥' },
            { id: 4, name: 'লাইভ ব্যাকারেট', type: 'live', emoji: '♠️' },
        ];
        
        let filtered = games;
        if (type && type !== '') {
            filtered = games.filter(g => g.type === type);
        }
        
        displayGames(filtered, gamesGrid);
        hideLoading(gamesGrid);
    }, 500);
}

// Display Games
function displayGames(games, container) {
    if (!container) return;
    
    container.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-card-image">${game.emoji}</div>
            <div class="game-card-content">
                <h3>${game.name}</h3>
                <p>এখনই খেলুন</p>
                <button class="btn-primary" onclick="playGame(${game.id})">খেলুন</button>
            </div>
        `;
        container.appendChild(gameCard);
    });
}

// Play Game
function playGame(gameId) {
    const user = getLoggedInUser();
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    showToast('গেম লোড হচ্ছে...', 'info');
}

// Set Amount (Deposit Page)
function setAmount(amount) {
    const customAmount = document.getElementById('customAmount');
    if (customAmount) {
        customAmount.value = amount;
        updateBonusAmount();
    }
}

// Update Bonus Amount
function updateBonusAmount() {
    const customAmount = document.getElementById('customAmount');
    const bonusAmount = document.getElementById('bonusAmount');
    
    if (customAmount && bonusAmount) {
        const amount = parseFloat(customAmount.value) || 0;
        const bonus = Math.floor(amount); // 100% bonus
        bonusAmount.textContent = formatCurrency(bonus);
    }
}

// Select Payment Method
function selectMethod(method) {
    console.log('Selected payment method:', method);
    document.querySelectorAll('.method-option').forEach(option => {
        option.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');
}

// Select Withdrawal Method
function selectWithdrawMethod(method) {
    console.log('Selected withdrawal method:', method);
    document.querySelectorAll('.method-option').forEach(option => {
        option.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');
}

// Smooth Scroll to Element
function smoothScroll(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Check Password Strength
function checkPasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    return strength;
}

// Get Password Strength Label
function getPasswordStrengthLabel(strength) {
    const labels = ['খুবই দুর্বল', 'দুর্বল', 'মধ্যম', 'শক্তিশালী', 'খুবই শক্তিশালী'];
    return labels[strength] || 'অপরিচিত';
}

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Load user data if logged in
    const user = getLoggedInUser();
    if (user && document.getElementById('userName')) {
        document.getElementById('userName').textContent = user.name || 'ব্যবহারকারী';
    }
});

// Prevent form submission for demo
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        if (!form.id.includes('real')) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                showToast('ফর্ম সাবমিট হয়েছে!', 'success');
            });
        }
    });
});

// Add event listener for custom amount input
document.addEventListener('DOMContentLoaded', function() {
    const customAmount = document.getElementById('customAmount');
    if (customAmount) {
        customAmount.addEventListener('input', updateBonusAmount);
    }
});
