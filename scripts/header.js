function headerFuctionality() {
  const hamburger = document.querySelector(".hamburger");
  const midBar = document.querySelector(".mid-bar");
  const rightBar = document.querySelector(".right-bar");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    midBar.classList.toggle("active");
    rightBar.classList.toggle("active");
  });
}

function scrollHeaderEffect() {
  let currentVerticalScroll = window.scrollY;
  const headerElement = document.querySelector(".nav-bar");
  let currentWindowScroll = 0;

  window.onscroll = (e) => {
    if (currentWindowScroll > window.scrollY) {
      headerElement.classList.remove("hide");
      currentWindowScroll = window.scrollY;
    } else if (currentVerticalScroll < window.scrollY) {
      headerElement.classList.add("hide");
      currentWindowScroll = window.scrollY;
    }
  };

  window.scroll();
}

export { headerFuctionality, scrollHeaderEffect };
