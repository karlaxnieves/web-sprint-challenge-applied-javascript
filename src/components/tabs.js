
// TASK 3
// ---------------------
// Implement this function which takes an array of strings ("topics") as its only argument.
// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
// then the function returns the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">technology</div>
// </div>
//
import axios from "axios";

const Tabs = (topics) => {
  const topicDiv = document.createElement("div");
  topicDiv.classList.add('topics');
  topics.forEach((topic) => {

    const innerDiv = document.createElement("div");
    innerDiv.classList.add('tab')
    innerDiv.textContent = topic
    topicDiv.appendChild(innerDiv)
  })
  return topicDiv

}
console.log(Tabs(["javascript", "bootstrap", "technology", "jquery", "node.js"]))


// TASK 4
// ---------------------
// Implement this function which takes a css selector as its only argument.
// It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
// Find the array of topics inside the response, and create the tabs using the Tabs component.
// Append the tabs to the element in the DOM that matches the selector passed to the function.
//
const entry = document.querySelector(".tabs-container")


const tabsAppender = (selector) => {
  axios
    .get(`https://lambda-times-api.herokuapp.com/topics`)
    .then((res) => {
      const tabs = Tabs(res.data.topics);
      entry.appendChild(tabs);
    })
    .catch((err) => {
      console.log(err);
    });

}

export { Tabs, tabsAppender }
