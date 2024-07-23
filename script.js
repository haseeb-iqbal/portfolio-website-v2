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

let SideMenu = document.getElementById("sidemenu");

function OpenMenu() {
  SideMenu.style.right = "0";
}

function CloseMenu() {
  SideMenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwSiwhqauOgZrpXYjgEOis6-gY94Mku0msacbRDCg40C4bVRuIUHFdXgC5SCirSukXo/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
