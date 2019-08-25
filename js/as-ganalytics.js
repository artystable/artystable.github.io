/*
* Summary: Cookieless Google Analytics logic
* Description: This cookieless implementation of Google Analytics was created by Foture and is using fingerprinting algorithm created by * Valve in Fingerprintjs.
* src: https://github.com/Foture/cookieless-google-analytics
*/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  
ga('create', 'UA-145648387', {
    'storage': 'none',
    'clientId': new Fingerprint().get()
});
ga('set', 'anonymizeIp', true);
ga('send', 'pageview');

// Original Google Analytics logic.
/* 
(function () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-145648387-1');
})();
 */