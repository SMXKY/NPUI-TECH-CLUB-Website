export function renderCalendar() {
  const currentYear = new Date().getUTCFullYear();
  const currentMonth = new Date().getMonth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day =
    new Date(`${months[currentMonth]} 1, ${currentYear}`).getDay() - 1;

  const daysOfTheMonth = (y, m) => {
    return new Date(y, m, 0).getDate();
  };

  const noOfdays = daysOfTheMonth(currentYear, currentMonth);

  const dayHolder = document.querySelector(".js-month-days");

  const streakStart = 1;
  const streakCurrent = 7;

  let dayHolderHTML = "";

  for (let i = 0 - day; i < noOfdays; i++) {
    if (i + 1 <= 0) {
      dayHolderHTML += `<div class="non-date">0</div>`;
    } else if (i + 1 <= streakCurrent && !(i + 1 <= 0)) {
      if (
        i + 1 === noOfdays ||
        i + 1 === 7 ||
        i + 1 === 21 ||
        i + 1 === 28 ||
        i + 1 === 14 ||
        i + 1 === streakCurrent
      ) {
        dayHolderHTML += `<div class="the-date"><div class="js-date-number">${
          i + 1
        }</div><span class="date-span date-span-last"></span></div>`;
      } else {
        dayHolderHTML += `<div class="the-date"><div class="js-date-number">${
          i + 1
        }</div><span class="date-span"></span></div>`;
      }
    } else {
      dayHolderHTML += `<div class="the-date"><div class="js-date-number">${
        i + 1
      }</div></div>`;
    }

    console.log("lasdjfaldsfkjladsfjlasdjflasjdflaksjdfljadsf");
  }

  dayHolder.innerHTML = dayHolderHTML;

  document.querySelectorAll(".js-date-number").forEach((date) => {
    let dateNum = Number(date.innerHTML);
    if (dateNum === streakStart || dateNum === streakCurrent) {
      date.classList.add("date-color");
    }
  });
}
