/* =====================================================
   Sky Baji - API JavaScript (Fake Data & API Calls)
   ===================================================== */

// Base API Configuration
const API_CONFIG = {
    baseURL: 'http://localhost:3000/api', // Change to real API when available
    timeout: 5000,
    useLocalData: true // Use fake data for now
};

// Fake Data Module
const FakeData = {
    // User Data
    users: [
        {
            id: 1,
            name: 'আহমেদ রহিম',
            email: 'ahmed@example.com',
            phone: '+8801700123456',
            balance: 5000,
            bonusBalance: 1000,
            createdAt: '2024-01-01'
        }
    ],

    // Games Data
    games: [
        { id: 1, name: 'গোল্ড ড্রিম', type: 'slots', emoji: '🎰' },
        { id: 2, name: 'লাইভ ব্যাকারেট', type: 'live', emoji: '♠️' },
        { id: 3, name: 'ক্র্যাশ প্লেন', type: 'crash', emoji: '✈️' }
    ],

    // Bet History
    bets: [
        {
            id: 1,
            game: 'গোল্ড ড্রিম',
            bet: 100,
            payout: 250,
            status: 'win',
            timestamp: new Date(Date.now() - 3600000).toISOString()
        },
        {
            id: 2,
            game: 'লাইভ রুলেট',
            bet: 50,
            payout: 0,
            status: 'loss',
            timestamp: new Date(Date.now() - 7200000).toISOString()
        }
    ],

    // Transactions
    transactions: [
        {
            id: 1,
            type: 'deposit',
            amount: 5000,
            method: 'bKash',
            status: 'completed',
            date: new Date(Date.now() - 86400000).toISOString()
        },
        {
            id: 2,
            type: 'withdrawal',
            amount: 2000,
            method: 'Nagad',
            status: 'pending',
            date: new Date(Date.now() - 3600000).toISOString()
        }
    ],

    // Sports Matches
    matches: [
        {
            id: 1,
            sport: 'football',
            team1: 'Manchester United',
            team2: 'Liverpool',
            odds: { team1: 2.5, draw: 3.0, team2: 2.3 },
            status: 'live'
        },
        {
            id: 2,
            sport: 'cricket',
            team1: 'Bangladesh',
            team2: 'India',
            odds: { team1: 3.5, team2: 1.4 },
            status: 'upcoming'
        }
    ],

    // Promotions
    promotions: [
        {
            id: 1,
            title: 'নতুন সদস্য বোনাস',
            description: 'প্রথম জমায় 100% পর্যন্ত ৳ 5,000 বোনাস',
            bonus: '100%',
            maxAmount: 5000,
            wagerRequirement: 30,
            validity: 7
        },
        {
            id: 2,
            title: 'দৈনিক জমা বোনাস',
            description: 'প্রতিদিন জমায় 50% বোনাস',
            bonus: '50%',
            maxAmount: 10000,
            wagerRequirement: 20,
            validity: 30
        }
    ]
};

// API Functions

// Get User Data
async function getUserData(userId) {
    if (API_CONFIG.useLocalData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = FakeData.users.find(u => u.id === userId);
                resolve(user);
            }, 300);
        });
    }
    // Real API call would go here
}

// Get Games List
async function getGamesList() {
    if (API_CONFIG.useLocalData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(FakeData.games);
            }, 300);
        });
    }
}

// Get Bet History
async function getBetHistory(userId, limit = 10) {
    if (API_CONFIG.useLocalData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(FakeData.bets.slice(0, limit));
            }, 300);
        });
    }
}

// Get Transactions
async function getTransactions(userId, limit = 10) {
    if (API_CONFIG.useLocalData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(FakeData.transactions.slice(0, limit));
            }, 300);
        });
    }
}

// Get Sports Matches
async function getSportsMatches(sport = null) {
    if (API_CONFIG.useLocalData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let matches = FakeData.matches;
                if (sport) {
                    matches = matches.filter(m => m.sport === sport);
                }
                resolve(matches);
            }, 300);
        });
    }
}

// Get Promotions
async function getPromotions() {
    if (API_CONFIG.useLocalData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(FakeData.promotions);
            }, 300);
        });
    }
}

// Place Bet
async function placeBet(gameId, amount) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = Math.random() > 0.5;
            const payout = result ? amount * 2 : 0;
            
            resolve({
                success: true,
                result: result ? 'win' : 'loss',
                payout: payout,
                message: result ? 'আপনি জিতেছেন!' : 'আপনি হেরেছেন'
            });
        }, 1500);
    });
}

// Deposit Money
async function depositMoney(amount, method) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                transactionId: 'TXN' + Date.now(),
                amount: amount,
                method: method,
                status: 'completed',
                message: 'জমা সফলভাবে সম্পন্ন হয়েছে'
            });
        }, 2000);
    });
}

// Withdraw Money
async function withdrawMoney(amount, method, account) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                transactionId: 'WTH' + Date.now(),
                amount: amount,
                method: method,
                account: account,
                status: 'pending',
                message: 'উত্তোলন অনুরোধ প্রাপ্ত হয়েছে'
            });
        }, 1500);
    });
}

// Load Dashboard Data
async function loadDashboardData() {
    const user = getLoggedInUser();
    if (!user) return;

    try {
        // Load user balance
        const userData = await getUserData(user.id);
        if (userData) {
            const totalBalanceEl = document.getElementById('totalBalance');
            const bonusBalanceEl = document.getElementById('bonusBalance');

            if (totalBalanceEl) {
                totalBalanceEl.textContent = formatCurrency(userData.balance);
            }
            if (bonusBalanceEl) {
                bonusBalanceEl.textContent = formatCurrency(userData.bonusBalance);
            }
        }

        // Load bet history
        const betHistory = await getBetHistory(user.id);
        displayBetHistory(betHistory);
    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }
}

// Display Bet History
function displayBetHistory(bets) {
    const tbody = document.getElementById('betHistoryBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    bets.forEach(bet => {
        const row = document.createElement('tr');
        const statusBadge = bet.status === 'win' 
            ? '<span class="status-badge status-completed">জয়</span>'
            : '<span class="status-badge status-failed">পরাজয়</span>';

        row.innerHTML = `
            <td>${bet.game}</td>
            <td>${formatCurrency(bet.bet)}</td>
            <td>${formatCurrency(bet.payout)}</td>
            <td>${statusBadge}</td>
            <td>${new Date(bet.timestamp).toLocaleString('bn-BD')}</td>
        `;
        tbody.appendChild(row);
    });
}

// Load Profile Data
async function loadProfileData() {
    const user = getLoggedInUser();
    if (!user) return;

    const fullNameEl = document.getElementById('fullName');
    const emailEl = document.getElementById('email');
    const phoneEl = document.getElementById('phone');

    if (fullNameEl) fullNameEl.value = user.name || '';
    if (emailEl) emailEl.value = user.email || '';
    if (phoneEl) phoneEl.value = user.phone || '';
}

// Load Deposit History
async function loadDepositHistory() {
    try {
        const user = getLoggedInUser();
        if (!user) return;

        const transactions = await getTransactions(user.id);
        const deposits = transactions.filter(t => t.type === 'deposit');

        const tbody = document.getElementById('depositsBody');
        if (!tbody) return;

        tbody.innerHTML = '';

        deposits.forEach(deposit => {
            const row = document.createElement('tr');
            const statusBadge = deposit.status === 'completed'
                ? '<span class="status-badge status-completed">সম্পন্ন</span>'
                : '<span class="status-badge status-pending">অপেক্ষমান</span>';

            row.innerHTML = `
                <td>${formatCurrency(deposit.amount)}</td>
                <td>${deposit.method}</td>
                <td>${new Date(deposit.date).toLocaleDateString('bn-BD')}</td>
                <td>${statusBadge}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading deposit history:', error);
    }
}

// Load Withdrawal History
async function loadWithdrawalHistory() {
    try {
        const user = getLoggedInUser();
        if (!user) return;

        const transactions = await getTransactions(user.id);
        const withdrawals = transactions.filter(t => t.type === 'withdrawal');

        const tbody = document.getElementById('withdrawalsBody');
        if (!tbody) return;

        tbody.innerHTML = '';

        withdrawals.forEach(withdrawal => {
            const row = document.createElement('tr');
            const statusBadge = withdrawal.status === 'completed'
                ? '<span class="status-badge status-completed">সম্পন্ন</span>'
                : '<span class="status-badge status-pending">অপেক্ষমান</span>';

            row.innerHTML = `
                <td>${formatCurrency(withdrawal.amount)}</td>
                <td>${withdrawal.method}</td>
                <td>${new Date(withdrawal.date).toLocaleDateString('bn-BD')}</td>
                <td>${statusBadge}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading withdrawal history:', error);
    }
}

// Load Sports Matches
async function loadSportsMatches(sport) {
    try {
        const matchesContainer = document.getElementById('matchesContainer');
        if (!matchesContainer) return;

        showLoading(matchesContainer);

        const matches = await getSportsMatches(sport);

        displaySportsMatches(matches);
    } catch (error) {
        console.error('Error loading sports matches:', error);
    }
}

// Display Sports Matches
function displaySportsMatches(matches) {
    const container = document.getElementById('matchesContainer');
    if (!container) return;

    container.innerHTML = '';

    if (matches.length === 0) {
        container.innerHTML = '<p>কোন ম্যাচ পাওয়া যায়নি</p>';
        return;
    }

    matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'card';
        matchCard.innerHTML = `
            <h3>${match.team1} vs ${match.team2}</h3>
            <div class="odds">
                <button class="btn-secondary" onclick="placeSportsBet('${match.team1}', ${match.odds.team1})">
                    ${match.team1} (${match.odds.team1})
                </button>
                <button class="btn-secondary" onclick="placeSportsBet('Draw', ${match.odds.draw})">
                    ড্র (${match.odds.draw})
                </button>
                <button class="btn-secondary" onclick="placeSportsBet('${match.team2}', ${match.odds.team2})">
                    ${match.team2} (${match.odds.team2})
                </button>
            </div>
        `;
        container.appendChild(matchCard);
    });
}

// Place Sports Bet
function placeSportsBet(selection, odds) {
    showToast(`${selection} এ বেট করা হয়েছে (অড: ${odds})`, 'info');
}

// Initialize API Data on Page Load
document.addEventListener('DOMContentLoaded', async function() {
    // Check which page we're on and load appropriate data
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'dashboard.html') {
        loadDashboardData();
    } else if (currentPage === 'profile.html') {
        loadProfileData();
    } else if (currentPage === 'deposit.html') {
        loadDepositHistory();
    } else if (currentPage === 'withdraw.html') {
        loadWithdrawalHistory();
    } else if (currentPage === 'sports.html') {
        loadSportsMatches('football');
    } else if (currentPage === 'index.html') {
        // Load homepage data
        loadHomepageGames();
    }
});
