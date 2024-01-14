import { loadSearchBar } from "./searchBar.js";
import { navBarButtons } from "./navBar.js";
import { sideBarFunctionality } from "./sideBar.js";
import { taskCheck } from "./taskCheck.js";
import { renderCalendar } from "./calendar.js";
import { renderCreateModulePopup } from "./renderPopUp.js";
import { renderCharts } from "./Charts.js";

const searchBar = document.querySelector(".js-search-form");

searchBar.addEventListener("submit", (event) => {
  if (window.innerWidth < 448) {
    event.preventDefault();
    loadSearchBar();
  }
});

navBarButtons();

sideBarFunctionality();

taskCheck();

if (window.location.pathname === "/NPUI-TECH-CLUB-Website/dashboard.html") {
  renderCharts();
  renderCalendar();
} else if (window.location.pathname === "/NPUI-TECH-CLUB-Website/stack.html") {
  renderCreateModulePopup();
} else if (
  window.location.pathname === "/NPUI-TECH-CLUB-Website/all-tasks-page.html"
) {
  renderCharts();
}
