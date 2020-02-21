

/* Script to toggle classes on home container for list/block view */

let list = document.getElementById('list-view');
let block = document.getElementById('block-view');
let homepageContainer = document.getElementById('container-homepage');

let toggleListView = () => {
    //console.log("list is clicked");
    homepageContainer.classList.add("list");
    homepageContainer.classList.remove("block");
}

let toggleBlockView = () => {
    //console.log("block is clicked");
    homepageContainer.classList.remove("list");
    homepageContainer.classList.add("block");
}

list.addEventListener("click", toggleListView);
block.addEventListener("click", toggleBlockView);