<?php
/**
 * Sky Baji - Frontend Router
 * 
 * এই ফাইলটি PHP সার্ভারে SPA (Single Page Application) রাউটিং সক্ষম করে।
 * এটি সমস্ত অনুরোধকে index.html এ পুনঃনির্দেশিত করে।
 */

// নিরাপত্তা হেডার সেট করুন
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('X-XSS-Protection: 1; mode=block');
header('Referrer-Policy: no-referrer-when-downgrade');

// যদি ফাইল বা ডিরেক্টরি বিদ্যমান থাকে, তাহলে সেটি পরিবেশন করুন
$requested_file = __DIR__ . $_SERVER['REQUEST_URI'];

// যদি সরাসরি ফাইল অনুরোধ করা হয়
if (is_file($requested_file)) {
    // ফাইলের ধরন নির্ধারণ করুন
    $file_ext = pathinfo($requested_file, PATHINFO_EXTENSION);
    
    $mime_types = array(
        'html' => 'text/html',
        'htm'  => 'text/html',
        'js'   => 'application/javascript',
        'json' => 'application/json',
        'css'  => 'text/css',
        'png'  => 'image/png',
        'jpg'  => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'gif'  => 'image/gif',
        'svg'  => 'image/svg+xml',
        'ico'  => 'image/x-icon',
        'woff' => 'font/woff',
        'woff2'=> 'font/woff2',
        'ttf'  => 'font/ttf',
        'otf'  => 'font/otf',
        'eot'  => 'application/vnd.ms-fontobject'
    );
    
    if (isset($mime_types[$file_ext])) {
        header('Content-Type: ' . $mime_types[$file_ext]);
    }
    
    readfile($requested_file);
    exit;
}

// যদি ডিরেক্টরি অনুরোধ করা হয়
if (is_dir($requested_file)) {
    $index_file = $requested_file . '/index.html';
    if (is_file($index_file)) {
        header('Content-Type: text/html');
        readfile($index_file);
        exit;
    }
}

// অন্যথায়, index.html পরিবেশন করুন (SPA রাউটিং)
$index_file = __DIR__ . '/index.html';
if (is_file($index_file)) {
    header('Content-Type: text/html');
    readfile($index_file);
} else {
    header('HTTP/1.0 404 Not Found');
    echo '<h1>404 - ফাইল পাওয়া যায়নি</h1>';
}
?>
