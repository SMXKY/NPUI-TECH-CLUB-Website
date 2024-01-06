export function taskCheck() {
  document.querySelectorAll(".js-task-icon").forEach((icon) => {
    if (icon.classList.contains("done-task-icon")) {
      icon.src = "images-and-icons/icons/submitted-icon.svg";
    } else {
      icon.src = "images-and-icons/icons/not-submited-icon.svg";
    }
  });
}
