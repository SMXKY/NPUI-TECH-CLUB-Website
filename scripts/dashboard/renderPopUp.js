export function renderCreateModulePopup() {
  const addModuleBtn = document.querySelector(".js-add-module");
  const overlay = document.querySelector(".over-lay-stack-page");

  addModuleBtn.addEventListener("click", () => {
    overlay.classList.add("on-overlay-stack-page");

    document
      .querySelector(".js-close-module-overlay")
      .addEventListener("click", () => {
        overlay.classList.remove("on-overlay-stack-page");
      });
  });
}
