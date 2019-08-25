/**
 * 
 * @abstract Runs all JavaScript code that corresponds to all HTML files in site.
 */

// Takes a script object with its properties, i.e. <script src="..."></script>, and appends it to the head of the document.
function loadPartialScriptToHead(script_obj) {

    var script = {src:'', type:''};
            script.src = script_obj.src;
            script.type = script_obj.type;
            script.async = script_obj.async;

    var sc = document.createElement("script");

    if (typeof script.src !== "undefined") { sc.setAttribute("src", script.src); }
    if (typeof script.type !== "undefined") { sc.setAttribute("type", script.type); }
    if (typeof script.src !== "undefined") { sc.async = script.async; }

    document.head.appendChild(sc);

    return false;
}
//loadPartialScriptToHead();

function loadFingerprint() {

    var script = {src:'', type:''};
            script.src = '/vnd/fingerprint/fingerprint.min.js';
            script.type = 'text/javascript';

    loadPartialScriptToHead(script);

    return false;
}

// Loads cookieless Google Analytics.
function loadCookielessGoogleAnalytics() {

    var script = {src:'', type:''};
            script.src = '/js/as-ganalytics.js';
            script.type = 'text/javascript';

    loadPartialScriptToHead(script);

    return false;
}
//loadCookielessGoogleAnalytics();

// Loads all partials scripts.
function loadPartials() {
    //loadGoogleAnalytics01();// removed temporarily to evaluate cookieless alternative for web traffic analytics.
    //loadGoogleAnalytics02();// removed temporarily to evaluate cookieless alternative for web traffic analytics.
    loadFingerprint();
    loadCookielessGoogleAnalytics();
}
loadPartials();

/********************* End Main Script Logic *********************/





/**
 * TESTS
 */

// Used to test if loadPartialScriptToHead() works as expected.
function loadPartialGetTestScript() {

    var script = {src:'', type:''};
            script.src = 'https://getfirebug.com/firebug-lite.js'; // Test script "firebug" is just convenient to use for testing.
            script.type = 'text/javascript';

    loadPartialScriptToHead(script);

    return false;
}
//loadPartialGetTestScript();





/**
 * SANDBOX:
 */

// Loads required Google Analytics script 1.
function loadGoogleAnalytics01() {

    var script = {src:'', type:''};
            script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-145648387-1';
            script.type = 'text/javascript';
            script.async = true;

    loadPartialScriptToHead(script);

    return false;
}
//loadGoogleAnalytics01();

// Loads required Google Analytics script 1.
function loadGoogleAnalytics02() {

    var script = {src:'', type:''};
            script.src = '/js/as-gtm-02.js';
            script.type = 'text/javascript';

    loadPartialScriptToHead(script);

    return false;
}
//loadGoogleAnalytics02();