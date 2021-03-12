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

const Tabs = (topics) => {
  const topicsClass = document.createElement("div");
  const js = document.createElement("div");
  const boot = document.createElement("div");
  const tech = document.createElement("div");

  topicsClass.appendChild(js);
  topicsClass.appendChild(boot);
  topicsClass.appendChild(tech);

  topicsClass.classList.add('topics');
  js.classList.add('tab');
  boot.classList.add('tab');
  tech.classList.add('tab');

  js.textContent = topics[0]
  boot.textContent = topics[1];
  tech.textContent = topics[2];

  return topicsClass;
}

// TASK 4
// ---------------------
// Implement this function which takes a css selector as its only argument.
// It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
// Find the array of topics inside the response, and create the tabs using the Tabs component.
// Append the tabs to the element in the DOM that matches the selector passed to the function.
//

const entryPoint = document.querySelector(".tabs-container")

const tabsAppender = (selector) => {
  const menu = document.createElement('div');
  menu.classList.add("menu")
  const holder = document.createElement('ul');
  menu.appendChild(holder);

  array.forEach((item) => {
    let menuItem = document.createElement('li');
    menuItem.textContent = item
    holder.appendChild(menuItem);
  });
}

export { Tabs, tabsAppender }
