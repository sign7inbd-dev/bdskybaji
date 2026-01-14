/* =====================================================
   Sky Baji - Games JavaScript
   ===================================================== */

// Load Games on Page Load
document.addEventListener('DOMContentLoaded', function() {
    loadAllGames();

    // Add filter event listeners
    const gameType = document.getElementById('gameType');
    const sortBy = document.getElementById('sortBy');

    if (gameType) {
        gameType.addEventListener('change', applyFilters);
    }

    if (sortBy) {
        sortBy.addEventListener('change', applyFilters);
    }
});

// Load All Games
function loadAllGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;

    showLoading(gamesGrid);

    // Simulate API call
    setTimeout(() => {
        const games = getGamesData();
        displayGames(games, gamesGrid);
    }, 500);
}

// Get Games Data
function getGamesData() {
    return [
        { id: 1, name: 'গোল্ড ড্রিম', type: 'slots', emoji: '🎰', rtp: 96.5 },
        { id: 2, name: 'মিস্ট্রি স্লট', type: 'slots', emoji: '❓', rtp: 95.8 },
        { id: 3, name: 'জুয়েল স্লট', type: 'slots', emoji: '💎', rtp: 96.2 },
        { id: 4, name: 'ড্রাগন স্লট', type: 'slots', emoji: '🐉', rtp: 95.5 },
        { id: 5, name: 'লাইভ ব্যাকারেট', type: 'live', emoji: '♠️', rtp: 98.0 },
        { id: 6, name: 'লাইভ রুলেট', type: 'live', emoji: '🎲', rtp: 97.3 },
        { id: 7, name: 'লাইভ ব্ল্যাকজ্যাক', type: 'live', emoji: '🃏', rtp: 99.0 },
        { id: 8, name: 'লাইভ পোকার', type: 'live', emoji: '🎴', rtp: 98.5 },
        { id: 9, name: 'ক্র্যাশ প্লেন', type: 'crash', emoji: '✈️', rtp: 96.0 },
        { id: 10, name: 'ক্র্যাশ স্পেস', type: 'crash', emoji: '🚀', rtp: 95.5 },
        { id: 11, name: 'টেবিল - ব্যাকারেট', type: 'table', emoji: '♠️', rtp: 98.5 },
        { id: 12, name: 'টেবিল - রুলেট', type: 'table', emoji: '🎲', rtp: 97.3 },
    ];
}

// Display Games
function displayGames(games, container) {
    if (!container) return;

    container.innerHTML = '';

    if (games.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">কোন গেম পাওয়া যায়নি</p>';
        return;
    }

    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-card-image">${game.emoji}</div>
            <div class="game-card-content">
                <h3>${game.name}</h3>
                <p>RTP: ${game.rtp}%</p>
                <button class="btn-primary" onclick="playGame(${game.id}, '${game.name}')">খেলুন</button>
            </div>
        `;
        container.appendChild(gameCard);
    });
}

// Play Game
function playGame(gameId, gameName) {
    const user = getLoggedInUser();
    if (!user) {
        showToast('অনুগ্রহ করে প্রথমে লগইন করুন', 'warning');
        window.location.href = 'login.html';
        return;
    }

    showToast(`${gameName} খেলা শুরু হচ্ছে...`, 'info');
    console.log('Playing game:', gameId, gameName);
}

// Apply Filters to Games
function applyFilters() {
    const gameType = document.getElementById('gameType')?.value || '';
    const sortBy = document.getElementById('sortBy')?.value || '';

    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;

    showLoading(gamesGrid);

    setTimeout(() => {
        let games = getGamesData();

        // Filter by type
        if (gameType && gameType !== '') {
            games = games.filter(g => g.type === gameType);
        }

        // Sort
        if (sortBy === 'new') {
            games.reverse();
        } else if (sortBy === 'rtp') {
            games.sort((a, b) => b.rtp - a.rtp);
        }

        displayGames(games, gamesGrid);
    }, 300);
}

// Search Games
function searchGames(query) {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;

    const games = getGamesData();
    const filtered = games.filter(g =>
        g.name.toLowerCase().includes(query.toLowerCase())
    );

    displayGames(filtered, gamesGrid);
}

// Get Popular Games (for homepage)
function getPopularGames() {
    const games = getGamesData();
    return games.slice(0, 8);
}

// Load Games for Homepage
function loadHomepageGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;

    const games = getPopularGames();
    displayGames(games, gamesGrid);
}

// Add game to favorites
function addToFavorites(gameId) {
    let favorites = JSON.parse(localStorage.getItem('favoriteGames') || '[]');
    
    if (!favorites.includes(gameId)) {
        favorites.push(gameId);
        localStorage.setItem('favoriteGames', JSON.stringify(favorites));
        showToast('প্রিয় যোগ করা হয়েছে', 'success');
    } else {
        showToast('ইতিমধ্যে প্রিয়তে আছে', 'info');
    }
}

// Remove from favorites
function removeFromFavorites(gameId) {
    let favorites = JSON.parse(localStorage.getItem('favoriteGames') || '[]');
    favorites = favorites.filter(id => id !== gameId);
    localStorage.setItem('favoriteGames', JSON.stringify(favorites));
    showToast('প্রিয় থেকে সরানো হয়েছে', 'success');
}

// Get favorite games
function getFavoriteGames() {
    const favorites = JSON.parse(localStorage.getItem('favoriteGames') || '[]');
    const allGames = getGamesData();
    return allGames.filter(g => favorites.includes(g.id));
}

// Get Recently Played Games
function getRecentlyPlayedGames() {
    const recent = JSON.parse(localStorage.getItem('recentGames') || '[]');
    const allGames = getGamesData();
    return allGames.filter(g => recent.includes(g.id)).slice(0, 4);
}

// Record Game Play
function recordGamePlay(gameId) {
    let recent = JSON.parse(localStorage.getItem('recentGames') || '[]');
    
    // Remove if already exists
    recent = recent.filter(id => id !== gameId);
    
    // Add to beginning
    recent.unshift(gameId);
    
    // Keep only last 20 games
    recent = recent.slice(0, 20);
    
    localStorage.setItem('recentGames', JSON.stringify(recent));
}

// Game Statistics
function getGameStats(gameId) {
    const stats = JSON.parse(localStorage.getItem('gameStats') || '{}');
    
    if (!stats[gameId]) {
        stats[gameId] = {
            timesPlayed: 0,
            totalBet: 0,
            totalWin: 0,
            totalLoss: 0
        };
    }
    
    return stats[gameId];
}

// Update Game Statistics
function updateGameStats(gameId, bet, win) {
    const stats = JSON.parse(localStorage.getItem('gameStats') || '{}');
    
    if (!stats[gameId]) {
        stats[gameId] = {
            timesPlayed: 0,
            totalBet: 0,
            totalWin: 0,
            totalLoss: 0
        };
    }
    
    stats[gameId].timesPlayed++;
    stats[gameId].totalBet += bet;
    
    if (win > 0) {
        stats[gameId].totalWin += win;
    } else {
        stats[gameId].totalLoss += Math.abs(win);
    }
    
    localStorage.setItem('gameStats', JSON.stringify(stats));
}

// Get Top Winning Games
function getTopWinningGames() {
    const stats = JSON.parse(localStorage.getItem('gameStats') || '{}');
    const allGames = getGamesData();
    
    return allGames
        .map(game => ({
            ...game,
            stats: stats[game.id] || { totalWin: 0 }
        }))
        .sort((a, b) => (b.stats.totalWin || 0) - (a.stats.totalWin || 0))
        .slice(0, 5);
}
