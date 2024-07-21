let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function OpenTab(clickedObject, tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  console.log(clickedObject.classList);
  clickedObject.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}
