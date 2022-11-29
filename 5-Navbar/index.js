const links = document.querySelector(".links");
const toggleBtn = document.querySelector(".nav-toggle");
let linksHidden = true;
console.log(links.innerHTML);

const showHideLinks = () => {
  if (linksHidden) {
    console.log("show");
    links.classList.add("show-links");
  } else {
    console.log("hide");
    links.classList.remove("show-links");
  }
  linksHidden = !linksHidden;
};

toggleBtn.addEventListener("click", showHideLinks);
