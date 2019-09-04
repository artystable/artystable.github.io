/*
* Summary: Cookieless Google Analytics logic
* Description: This cookieless implementation of Google Analytics was created by Foture and is using fingerprinting algorithm created by * Valve in Fingerprintjs.
* src: https://github.com/Foture/cookieless-google-analytics
*/

/*
** Summary: Sends a page view to Google Analytics with minimal user identification data.
** The 'user_id' field gets anonymized via a fingerprint algorithm, while the 
** 'anonymize_ip' is set to TRUE to maximize user identification while still (hopefully)
** providing site admin some relevant data about web traffic.
*/
(function(){
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-145648387-1',
                    {
                        'user_id': new Fingerprint().get(),
                        'anonymize_ip': true
                    }
    );
}());

/********************* End Main Script Logic *********************/



/**
 * SANDBOX:
**/


// Google Analytics logic 02 (using old "ga.js" + "analytics.js").
/*
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
*/

// Google Analytics logic 01 (original).
/* 
(function () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-145648387-1');
})();
*/

// Add gtag.js to your site.
// src: https://developers.google.com/analytics/devguides/collection/gtagjs/
/*
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-145648387"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GA_MEASUREMENT_ID');
</script>
*/
