

const Card = (article) => {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imageContainer = document.createElement("div");
  const authorPhoto = document.createElement("img");
  const authorName = document.createElement("span");

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imageContainer.classList.add('img-container');

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(authorPhoto);
  author.appendChild(authorName);

  headline.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  authorName.textContent = `By: ${artcile.authorName}`;

  card.addEventListener("click", (event) => {
    card.classList.toggle("headline")
  });

  return card
}

// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
/* <div class="card">
  <div class="headline">{ headline }</div>
  <div class="author">
    <div class="img-container">
      <img src={ authorPhoto }>
    </div>
    <span>By { authorName }</span>
  </div>
</div> */




// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//

const entryPoint = document.querySelector(".cards-container")

const cardAppender = (selector) => {
  entryPoint.appendChild(card);

  card[0].textContent = articles['bootstrap']
  card[1].textContent = articles['javascript']
  card[2].textContent = articles['jquery']
  card[3].textContent = articles['node']
  card[4].textContent = articles['technology']

  authorName[0].nextElementSibling.textContent = articles['bootstrap']['authorName']
  authorName[1].nextElementSibling.textContent = articles['javascript']['authorName']
  authorName[2].nextElementSibling.textContent = articles['jquery']['authorName']
  authorName[3].nextElementSibling.textContent = articles['node']['authorName']
  authorName[4].nextElementSibling.textContent = articles['technology']['authorName']

  authorPhoto[0].nextElementSibling.textContent = articles['bootstrap']['authorPhoto']
  authorPhoto[1].nextElementSibling.textContent = articles['javascript']['authorPhoto']
  authorPhoto[2].nextElementSibling.textContent = articles['jquery']['authorPhoto']
  authorPhoto[3].nextElementSibling.textContent = articles['node']['authorPhoto']
  authorPhoto[4].nextElementSibling.textContent = articles['technology']['authorPhoto']

}

import axios from "axios";


articlesArray.forEach(() => {
  axios
    .get(`https://lambda-times-api.herokuapp.com/articles`)
    .then((res) => {
      const card = Card(res.data)
      entryPoint.appendChild(card)
    })
    .catch((err) => {
      console.log(err);
    })
})



export { Card, cardAppender }
