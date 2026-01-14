/**
 * Sky Baji - Express Server
 * 
 * এই সার্ভার Node.js এবং Express দিয়ে চলে।
 * এটি স্ট্যাটিক ফাইল পরিবেশন করে এবং SPA রাউটিং সক্ষম করে।
 */

const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy
app.set('trust proxy', 1);

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:"],
            fontSrc: ["'self'"],
            connectSrc: ["'self'"]
        }
    }
}));

// Compression middleware
app.use(compression());

// Static file serving with cache
app.use(express.static(path.join(__dirname, 'public_html'), {
    maxAge: '1d',
    etag: false
}));

// Logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// API routes (যদি ভবিষ্যতে যোগ করা হয়)
// app.use('/api', require('./routes/api'));

// SPA routing - সমস্ত অন্যান্য রুট index.html এ পাঠান
app.get('*', (req, res) => {
    const filePath = path.join(__dirname, 'public_html', 'index.html');
    
    // যদি সরাসরি ফাইল অনুরোধ করা হয় (যেমন .js, .css)
    if (req.path.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|otf)$/i)) {
        res.status(404).send('ফাইল পাওয়া যায়নি');
        return;
    }
    
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(404).send('পেজ পাওয়া যায়নি');
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('অভ্যন্তরীণ সার্ভার ত্রুটি');
});

// Start server
app.listen(PORT, () => {
    console.log(`
    ╔═══════════════════════════════════════╗
    ║     Sky Baji সার্ভার চলছে           ║
    ║                                       ║
    ║  URL: http://localhost:${PORT}        ║
    ║                                       ║
    ║  বন্ধ করতে: Ctrl + C                  ║
    ╚═══════════════════════════════════════╝
    `);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('সার্ভার বন্ধ হচ্ছে...');
    process.exit(0);
});
