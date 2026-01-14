/* =====================================================
   Sky Baji - Fake API Data (Frontend Mock)
   ===================================================== */

// Mock Data for Frontend Development
const FAKE_API_DATA = {
    // Users Database
    users: {
        'user1': {
            id: 'user1',
            name: 'আহমেদ রহিম',
            email: 'ahmed@example.com',
            phone: '+8801700123456',
            balance: 15000,
            bonusBalance: 2500,
            walletStatus: 'verified',
            createdAt: '2024-01-01',
            kyc: {
                status: 'verified',
                nid: '1234567890123',
                verifiedAt: '2024-01-05'
            }
        },
        'user2': {
            id: 'user2',
            name: 'ফাতিমা খান',
            email: 'fatima@example.com',
            phone: '+8801800234567',
            balance: 8500,
            bonusBalance: 1200,
            walletStatus: 'pending',
            createdAt: '2024-01-10'
        }
    },

    // Games Catalog
    games: [
        {
            id: 1,
            name: 'গোল্ড ড্রিম',
            type: 'slots',
            provider: 'SpinWorks',
            emoji: '🎰',
            rtp: 96.5,
            volatility: 'medium',
            maxWin: 50000,
            image: 'images/games/gold-dream.jpg'
        },
        {
            id: 2,
            name: 'মিস্ট্রি স্লট',
            type: 'slots',
            provider: 'SpinWorks',
            emoji: '❓',
            rtp: 95.8,
            volatility: 'high',
            maxWin: 100000,
            image: 'images/games/mystery-slot.jpg'
        },
        {
            id: 3,
            name: 'জুয়েল স্লট',
            type: 'slots',
            provider: 'CasinoHub',
            emoji: '💎',
            rtp: 96.2,
            volatility: 'low',
            maxWin: 25000,
            image: 'images/games/jewel-slot.jpg'
        },
        {
            id: 4,
            name: 'ড্রাগন স্লট',
            type: 'slots',
            provider: 'CasinoHub',
            emoji: '🐉',
            rtp: 95.5,
            volatility: 'medium',
            maxWin: 75000,
            image: 'images/games/dragon-slot.jpg'
        },
        {
            id: 5,
            name: 'লাইভ ব্যাকারেট',
            type: 'live',
            provider: 'LiveCasino Pro',
            emoji: '♠️',
            rtp: 98.0,
            volatility: 'low',
            minBet: 100,
            maxBet: 100000,
            image: 'images/games/live-baccarat.jpg'
        },
        {
            id: 6,
            name: 'লাইভ রুলেট',
            type: 'live',
            provider: 'LiveCasino Pro',
            emoji: '🎲',
            rtp: 97.3,
            volatility: 'medium',
            minBet: 50,
            maxBet: 50000,
            image: 'images/games/live-roulette.jpg'
        },
        {
            id: 7,
            name: 'লাইভ ব্ল্যাকজ্যাক',
            type: 'live',
            provider: 'LiveCasino Pro',
            emoji: '🃏',
            rtp: 99.0,
            volatility: 'low',
            minBet: 100,
            maxBet: 100000,
            image: 'images/games/live-blackjack.jpg'
        },
        {
            id: 8,
            name: 'লাইভ পোকার',
            type: 'live',
            provider: 'Poker Masters',
            emoji: '🎴',
            rtp: 98.5,
            volatility: 'high',
            minBet: 200,
            maxBet: 500000,
            image: 'images/games/live-poker.jpg'
        },
        {
            id: 9,
            name: 'ক্র্যাশ প্লেন',
            type: 'crash',
            provider: 'CrashGames Inc',
            emoji: '✈️',
            rtp: 96.0,
            volatility: 'high',
            multiplier: '2x to 1000x',
            image: 'images/games/crash-plane.jpg'
        },
        {
            id: 10,
            name: 'ক্র্যাশ স্পেস',
            type: 'crash',
            provider: 'CrashGames Inc',
            emoji: '🚀',
            rtp: 95.5,
            volatility: 'high',
            multiplier: '1.5x to 2000x',
            image: 'images/games/crash-space.jpg'
        }
    ],

    // Sports Matches
    sports_matches: [
        {
            id: 1,
            sport: 'football',
            league: 'প্রিমিয়ার লিগ',
            team1: 'ম্যানচেস্টার ইউনাইটেড',
            team2: 'লিভারপুল',
            date: '2024-01-15T15:00:00Z',
            status: 'live',
            odds: {
                team1: 2.5,
                draw: 3.0,
                team2: 2.3
            }
        },
        {
            id: 2,
            sport: 'cricket',
            league: 'টেস্ট ম্যাচ',
            team1: 'বাংলাদেশ',
            team2: 'ভারত',
            date: '2024-01-16T09:00:00Z',
            status: 'upcoming',
            odds: {
                team1: 3.5,
                team2: 1.4
            }
        },
        {
            id: 3,
            sport: 'basketball',
            league: 'NBA',
            team1: 'লস এঞ্জেলেস লেকারস',
            team2: 'গোল্ডেন স্টেট ওয়ারিয়রস',
            date: '2024-01-15T10:00:00Z',
            status: 'upcoming',
            odds: {
                team1: 1.9,
                team2: 1.9
            }
        }
    ],

    // Promotions & Bonuses
    promotions: [
        {
            id: 1,
            title: 'নতুন সদস্য বোনাস',
            description: 'প্রথম জমায় 100% পর্যন্ত ৳ 5,000 বোনাস পান',
            type: 'welcome',
            bonus_percent: 100,
            max_amount: 5000,
            min_deposit: 500,
            wager_requirement: 30,
            validity_days: 7,
            icon: '🎁'
        },
        {
            id: 2,
            title: 'দৈনিক জমা বোনাস',
            description: 'প্রতিদিন জমায় 50% বোনাস পান',
            type: 'daily',
            bonus_percent: 50,
            max_amount: 10000,
            min_deposit: 100,
            wager_requirement: 20,
            validity_days: 30,
            icon: '💰'
        },
        {
            id: 3,
            title: 'সাপ্তাহিক ক্যাশব্যাক',
            description: 'হারানো পরিমাণের 10% ফিরিয়ে পান প্রতি সপ্তাহে',
            type: 'cashback',
            cashback_percent: 10,
            max_cashback: 5000,
            validity_days: 7,
            icon: '💸'
        },
        {
            id: 4,
            title: 'ফ্রি স্পিনস',
            description: 'নির্বাচিত গেমে প্রতিদিন 50 ফ্রি স্পিনস',
            type: 'free-spins',
            free_spins: 50,
            validity_days: 1,
            icon: '🎰'
        }
    ],

    // Transactions History
    transactions: [
        {
            id: 'TXN001',
            type: 'deposit',
            amount: 5000,
            method: 'bKash',
            status: 'completed',
            date: '2024-01-14T10:30:00Z',
            reference: 'bKash #12345'
        },
        {
            id: 'TXN002',
            type: 'withdrawal',
            amount: 2000,
            method: 'Nagad',
            status: 'pending',
            date: '2024-01-14T14:45:00Z',
            reference: 'Nagad #67890'
        },
        {
            id: 'TXN003',
            type: 'bonus',
            amount: 500,
            method: 'welcome_bonus',
            status: 'completed',
            date: '2024-01-13T09:15:00Z',
            reference: 'Welcome Bonus'
        },
        {
            id: 'TXN004',
            type: 'deposit',
            amount: 10000,
            method: 'Rocket',
            status: 'completed',
            date: '2024-01-12T16:20:00Z',
            reference: 'Rocket #11111'
        }
    ],

    // Bet History
    bet_history: [
        {
            id: 'BET001',
            game: 'গোল্ড ড্রিম',
            game_type: 'slots',
            bet_amount: 100,
            payout: 250,
            multiplier: 2.5,
            status: 'win',
            timestamp: '2024-01-14T12:00:00Z'
        },
        {
            id: 'BET002',
            game: 'লাইভ রুলেট',
            game_type: 'live',
            bet_amount: 50,
            payout: 0,
            multiplier: 0,
            status: 'loss',
            timestamp: '2024-01-14T11:30:00Z'
        },
        {
            id: 'BET003',
            game: 'ক্র্যাশ প্লেন',
            game_type: 'crash',
            bet_amount: 200,
            payout: 600,
            multiplier: 3.0,
            status: 'win',
            timestamp: '2024-01-14T10:15:00Z'
        },
        {
            id: 'BET004',
            game: 'মিস্ট্রি স্লট',
            game_type: 'slots',
            bet_amount: 75,
            payout: 0,
            multiplier: 0,
            status: 'loss',
            timestamp: '2024-01-14T09:45:00Z'
        }
    ],

    // Payment Methods
    payment_methods: [
        {
            id: 1,
            name: 'bKash',
            type: 'mobile_money',
            enabled: true,
            min_deposit: 10,
            max_deposit: 1000000,
            fee: 0,
            processing_time: 'instant'
        },
        {
            id: 2,
            name: 'Nagad',
            type: 'mobile_money',
            enabled: true,
            min_deposit: 10,
            max_deposit: 500000,
            fee: 0,
            processing_time: 'instant'
        },
        {
            id: 3,
            name: 'Rocket',
            type: 'mobile_money',
            enabled: true,
            min_deposit: 10,
            max_deposit: 250000,
            fee: 0,
            processing_time: 'instant'
        },
        {
            id: 4,
            name: 'ব্যাংক ট্রান্সফার',
            type: 'bank_transfer',
            enabled: true,
            min_deposit: 1000,
            max_deposit: 5000000,
            fee: 50,
            processing_time: '1-3 hours'
        }
    ],

    // Live Chat Messages
    live_chat: [
        {
            id: 1,
            user: 'বেটার001',
            message: 'লাইভ গেম খুবই মজাদার!',
            timestamp: '2024-01-14T14:30:00Z'
        },
        {
            id: 2,
            user: 'খেলোয়াড়123',
            message: 'এই রুলেট গেমে আমি জিতেছি!',
            timestamp: '2024-01-14T14:28:00Z'
        },
        {
            id: 3,
            user: 'সিস্টেম',
            message: 'নতুন খেলোয়াড় লগইন করেছে',
            timestamp: '2024-01-14T14:25:00Z'
        }
    ]
};

// Export data for use in other scripts
window.FAKE_API_DATA = FAKE_API_DATA;

// Helper function to get fake data with delay (simulating API call)
async function getFakeData(endpoint, options = {}) {
    return new Promise((resolve, reject) => {
        const delay = options.delay || 300;
        
        setTimeout(() => {
            const data = FAKE_API_DATA[endpoint];
            
            if (data) {
                // Filter data if filter options provided
                if (options.filter && typeof options.filter === 'function') {
                    resolve(data.filter(options.filter));
                } else {
                    resolve(data);
                }
            } else {
                reject(new Error(`Endpoint not found: ${endpoint}`));
            }
        }, delay);
    });
}

// Mock localStorage for user session
class UserSession {
    static set(key, value) {
        localStorage.setItem(`user_${key}`, JSON.stringify(value));
    }

    static get(key) {
        const value = localStorage.getItem(`user_${key}`);
        return value ? JSON.parse(value) : null;
    }

    static remove(key) {
        localStorage.removeItem(`user_${key}`);
    }

    static clear() {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith('user_')) {
                localStorage.removeItem(key);
            }
        });
    }
}

// Export UserSession
window.UserSession = UserSession;
