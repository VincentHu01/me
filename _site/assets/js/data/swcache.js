const resource = [
    /* --- CSS --- */
    '/me/assets/css/style.css',

    /* --- PWA --- */
    '/me/app.js',
    '/me/sw.js',

    /* --- HTML --- */
    '/me/index.html',
    '/me/404.html',

    
        '/me/categories/',
    
        '/me/archives/',
    
        '/me/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/me/assets/img/favicons/android-chrome-192x192.png',
        '/me/assets/img/favicons/android-chrome-512x512.png',
        '/me/assets/img/favicons/apple-touch-icon.png',
        '/me/assets/img/favicons/favicon-16x16.png',
        '/me/assets/img/favicons/favicon-32x32.png',
        '/me/assets/img/favicons/favicon.ico',
        '/me/assets/img/favicons/mstile-150x150.png',
        '/me/assets/js/dist/categories.min.js',
        '/me/assets/js/dist/commons.min.js',
        '/me/assets/js/dist/home.min.js',
        '/me/assets/js/dist/misc.min.js',
        '/me/assets/js/dist/page.min.js',
        '/me/assets/js/dist/post.min.js',
        '/me/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'vincenthu01.github.io',

    
        'chirpy-img.netlify.app',
    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];
