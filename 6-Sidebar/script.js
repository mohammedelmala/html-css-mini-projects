const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

const openSidebar = () => {
  sidebar.classList.add("show-sidebar");
};

const closeSidebar = () => {
  sidebar.classList.remove("show-sidebar");
};

toggleBtn.addEventListener("click", openSidebar);

closeBtn.addEventListener("click", closeSidebar);
