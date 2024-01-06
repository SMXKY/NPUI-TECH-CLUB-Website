import { loadSearchBar } from "./searchBar.js";
import { navBarButtons } from "./navBar.js";
import { sideBarFunctionality } from "./sideBar.js";
import { taskCheck } from "./taskCheck.js";

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

renderCharts();

taskCheck();
