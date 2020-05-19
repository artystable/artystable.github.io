Textblock([
  {
    target: "article",
  },
  {
    target: "#navbar li",
  },
  {
    target: "section",
    maxWidthFontSize: 1.25,
    units: "em",
  },
  {
    target: "h1.elevator-heading",
    minWidthFontSize: 2.5,
    units: "em",
  },
]);
/*
Textblock([
  {
    target: "article",
  },
  {
    target: "article p",
    minWidthFontSize: 1.2,
    maxWidthFontSize: 1.2,
    units: "rem",
  },
  {
    target: "section",
  },
  {
    target: "main > p",
  },
]);
 */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // document.getElementById("my-nav").style.top = "0";
    document.getElementById("my-nav").setAttribute("style", "top: 0;");
    //box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  } else {
    // document.getElementById("navbar").style.top = "-50px";
    // document.getElementById("my-nav").setAttribute('style', 'top: -50px;')
    document
      .getElementById("my-nav")
      .setAttribute("style", "top: -50px;box-shadow: none;");
    // .setAttribute("style", "transform: translateY(-50px);");
  }
  prevScrollpos = currentScrollPos;
};

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

feather.replace();

function gaOptout() {
  (document.cookie =
    disableStr + "=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/"),
    (window[disableStr] = !0);
}
var gaProperty = "UA-145648387-1",
  disableStr = "ga-disable-" + gaProperty;
document.cookie.indexOf(disableStr + "=true") > -1 && (window[disableStr] = !0);
if (
  !(
    parseInt(navigator.doNotTrack) === 1 ||
    parseInt(window.doNotTrack) === 1 ||
    parseInt(navigator.msDoNotTrack) === 1 ||
    navigator.doNotTrack === "yes"
  )
) {
  (function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga"
  );
}
if (typeof ga === "function") {
  ga("create", "UA-145648387-1", "auto", {});
  ga("set", "anonymizeIp", true);
}
