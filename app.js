let sideBar = document.querySelector(".sidebar");
let sideBarToggle = document.querySelector(".sidebar-toggle");
let closeButton = document.querySelector(".close-btn");

// sideBarToggle.addEventListener("click", () => {
//   if (sideBar.classList.contains("active")) {
//     sideBar.classList.remove("active");
//   } else {
//     sideBar.classList.add("active");
//   }
// });

// closeButton.addEventListener("click", () => {
//   sideBar.classList.toggle("active");
// });

sideBarToggle.addEventListener("click", function () {
  // if (sideBar.classList.contains("show-sidebar")) {
  //   sideBar.classList.remove("show-sidebar");
  // } else {
  //   sideBar.classList.add("show-sidebar");
  // }
  sideBar.classList.toggle("show-sidebar");
  //   sideBar.classList.toggle("active");
});

closeButton.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
  //   sideBar.classList.remove("active");
});
