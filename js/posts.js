// Process post meta data, fetch corresponding post data locally, and display at:
// `index.html`, `pages/blog.html`

let listArticles = [
  {
    title: "A fresh start!",
    url: "../blog/200404-fresh-start.html",
    timestamp: "1586275419",
    author: "Arty Stable",
  },
];

let articlesListSection2020 = document.querySelector("#articles-list-2020");

if (articlesListSection2020 != null) {
  let listArticles2020 = listArticles.filter(function (article) {
    let timestamp = article.timestamp;
    let year = dayjs.unix(timestamp).format("YYYY");
    if (year == `2020`) {
      return article;
    }
  });

  listArticles2020.forEach((article) => {
    let timestamp = article.timestamp;
    let month = dayjs.unix(timestamp).format("MMMM");
    let day = dayjs.unix(timestamp).format("D");
    let dateTime = dayjs.unix(timestamp).format("YYYY-DD-MM");

    let articleListItem = `
    <li class="articles-list-item">
      <time datetime="${dateTime}">${month} ${day}</time>
      <a href="${article.url}">
        ${article.title}
      </a>
    </li>`;

    articlesListSection2020.insertAdjacentHTML(`beforeend`, articleListItem);
  });
}

let articlesListSectionLatest = document.querySelector("#articles-list-latest");

// console.log(articlesListSectionLatest);


if (articlesListSectionLatest != null) {
  let listArticlesLatest = listArticles.slice(0, 3);

  listArticlesLatest.forEach((article) => {
    let articleListItem = `
    <li class="articles-list-item">
      <a href="${article.url.substring(3)}">
        ${article.title}
      </a>
    </li>`;

    articlesListSectionLatest.insertAdjacentHTML(`beforeend`, articleListItem);
  });
}

/*
  let timestamp = article.timestamp;
  let month = dayjs.unix(timestamp).format("MMMM");
  let day = dayjs.unix(timestamp).format("D");
  let dateTime = dayjs.unix(timestamp).format("YYYY-DD-MM");
 */

// console.log(listArticlesLatest);

/*
for (let i = 0; i < 2; i++) {
  // const element = array[index];
  listArticlesLatest.push(listArticles[i]);
}
 */

/*
<a href="/blog/200404-a-fresh-new-start-action-oriented-custom-static-site.html">
  A fresh new start
</a>;
 */
// console.log(Date(2012, 0, 1));

// let listArticlesForDisplay = listArticles.filter( article => dayjs.unix(article.timestamp).format("YYYY") != `2020`);

/*
function public static Date between(Date startInclusive, Date endExclusive) {
    long startMillis = startInclusive.getTime();
    long endMillis = endExclusive.getTime();
    long randomMillisSinceEpoch = ThreadLocalRandom
      .current()
      .nextLong(startMillis, endMillis);
 
    return new Date(randomMillisSinceEpoch);
} */

// dayjs("12-25-1995", "MM-DD-YYYY");
// console.log(article.timestamp);
// console.log(`${month} ${day}`);

// console.log(articlesList2020);
// console.log(listArticles);

//dayjs().format();
//https://day.js.org/docs/en/display/format

/*
  let articleListItem = `<li class="articles-list-item">
                          <time datetime="${dateTime}">${month} ${day}</time>
                          <a href="${article.url}">
                            ${article.title}
                          </a>
                         </li>`;
        */
/*
  let articleListItem = `<li class="articles-list-item">
                          <time datetime="2020-04-07">April 4</time>
                          <a href="/blog/200404-a-fresh-new-start-action-oriented-custom-static-site.html">
                            A fresh new start
                          </a>
                         </li>`;
 */
// insertAdjacentHTML("afterend", '<div id="two">two</div>');

/*

          <ul id="articles-list-2020" class="articles-list">
            <li class="articles-list-item">
            <time datetime="2020-04-07">April 4</time>
            <a
              href="/blog/200404-a-fresh-new-start-action-oriented-custom-static-site.html"
              >A fresh new start</a
            >
            </li>
            <li class="articles-list-item">
            <time datetime="2020-04-07">April 4</time>
            <a
              href="/blog/200404-a-fresh-new-start-action-oriented-custom-static-site.html"
              >A fresh new start</a
            >
            </li>
          </ul>

          */

/*
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
function randomDatev2() {
  let start = new Date(2019, 0, 1);
  let end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
 */

/*

console.log(`listArticles:`);
listArticles.forEach((article) => {
  let year = dayjs.unix(article.timestamp).format("YYYY");
  console.log(year);

});
// console.log(listArticles);
 */

/*
console.log(`listArticlesForDisplay:`);
listArticlesForDisplay.forEach((article) => {
  let year = dayjs.unix(article.timestamp).format("YYYY");
  console.log(year);
});
// console.log(listArticlesForDisplay);
 */


 //---

/*
 let listArticles = [
   {
     title: "Responsive typography",
     url: "/blog/200408-responsive-typography.html",
     timestamp: "1586331350",
     author: "Arty Stable",
   },
   {
     title: "A fresh new start",
     url:
       "/blog/200404-a-fresh-new-start-action-oriented-custom-static-site.html",
     timestamp: "1586275419",
     author: "Arty Stable",
   },
   {
     title: "Understanding Default Parameters in JavaScript",
     url:
       "/blog/200404-a-fresh-new-start-action-oriented-custom-static-site-02.html",
     timestamp: "1578424753",
     author: "Arty Stable",
   },
   {
     title: "A fresh new start",
     url:
       "/blog/200404-a-fresh-new-start-action-oriented-custom-static-site.html",
     timestamp: "1586275419",
     author: "Arty Stable",
   },
   {
     title: "Understanding Default Parameters in JavaScript",
     url:
       "/blog/200404-a-fresh-new-start-action-oriented-custom-static-site-02.html",
     timestamp: "1578424753",
     author: "Arty Stable",
   },
   {
     title: "A fresh new start",
     url:
       "/blog/200404-a-fresh-new-start-action-oriented-custom-static-site.html",
     timestamp: "1586275419",
     author: "Arty Stable",
   },
   {
     title: "Understanding Default Parameters in JavaScript",
     url:
       "/blog/200404-a-fresh-new-start-action-oriented-custom-static-site-02.html",
     timestamp: "1578424753",
     author: "Arty Stable",
   },
   {
     title:
       "Building a Continuous Integration & Deployment Pipeline Using Docker (CI/CD)",
     url:
       "/blog/200404-a-fresh-new-start-action-oriented-custom-static-site-03.html",
     timestamp: "1554659823",
     author: "Arty Stable",
   },
   {
     title: "CSS: An Art, a Science, a Nightmare (Everything You Should Know)",
     url:
       "/blog/200404-a-fresh-new-start-action-oriented-custom-static-site-03.html",
     timestamp: "1870279023",
     author: "Arty Stable",
   },
   {
     title: "Warren Buffett's “2 List” Strategy for Focused Attention",
     url:
       "/blog/200404-a-fresh-new-start-action-oriented-custom-static-site-03.html",
     timestamp: "1541613423",
     author: "Arty Stable",
   },
   {
     title: "For a More Creative Brain Follow These 5 Steps",
     url:
       "/blog/200404-a-fresh-new-start-action-oriented-custom-static-site-03.html",
     timestamp: "1538366400",
     author: "Arty Stable",
   },
   {
     title:
       "Lessons From a Vexillonaire: Creativity, Simplicity, and the Carefully Constrained Life",
     url:
       "/blog/200404-a-fresh-new-start-action-oriented-custom-static-site-03.html",
     timestamp: "1530986223",
     author: "Arty Stable",
   },
 ];
 */
