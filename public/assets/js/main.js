const nav = document.querySelectorAll("nav>a");

nav.forEach(function (navItem) {
  navItem.addEventListener("click", function (e) {
    e.preventDefault();

    var link = this.getAttribute("href");
    var item = document.getElementById(link);
    item.scrollIntoView();
  });
});

const navCollapse = document.querySelector(".nav-collapse");
const btnToggle = document.querySelector(".btn-toggle");

btnToggle.addEventListener("click", function () {
  if (navCollapse.classList.contains("show")) {
    navCollapse.classList.remove("show");
  } else {
    navCollapse.classList.add("show");
  }
});
