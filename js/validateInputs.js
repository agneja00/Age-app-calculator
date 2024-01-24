const dayLabel = document.querySelector("#label-day");
const monthLabel = document.querySelector("#label-month");
const yearLabel = document.querySelector("#label-year");
const dayInput = document.querySelector("#user-day");
const monthInput = document.querySelector("#user-month");
const yearInput = document.querySelector("#user-year");
const errorDay = document.querySelector("#error-day");
const errorMonth = document.querySelector("#error-month");
const errorYear = document.querySelector("#error-year");

export function validateInputs() {
    const day = dayInput.value;
    const month = monthInput.value;
    const year = yearInput.value;

    const inputDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    if (!day) {
        errorDay.textContent = "This field is required";
        dayLabel.style.color = 'hsl(0, 100%, 67%)';
        dayInput.style.border = '1px hsl(0, 100%, 67%) solid';
    } else if (isNaN(day) || day < 1 || day > 31 || day.length > 2) {
        errorDay.textContent = "Must be a valid day";
        dayLabel.style.color = 'hsl(0, 100%, 67%)';
        dayInput.style.border = '1px hsl(0, 100%, 67%) solid';
    } else {
        errorDay.textContent = "";
        dayLabel.style.color = 'hsl(0, 1%, 44%)';
        dayInput.style.border = '1px hsl(0, 0%, 86%) solid';
    };

    if (!month) {
        errorMonth.textContent = "This field is required";
        monthLabel.style.color = 'hsl(0, 100%, 67%)';
        monthInput.style.border = '1px hsl(0, 100%, 67%) solid';
    } else if (isNaN(month) || month < 1 || month > 12 || month.length > 2) {
        errorMonth.textContent = "Must be a valid month";
        monthLabel.style.color = 'hsl(0, 100%, 67%)';
        monthInput.style.border = '1px hsl(0, 100%, 67%) solid';
    } else {
        errorMonth.textContent = "";
        monthLabel.style.color = 'hsl(0, 1%, 44%)';
        monthInput.style.border = '1px hsl(0, 0%, 86%) solid';
    };

    if (!year) {
        errorYear.textContent = "This field is required";
        yearLabel.style.color = 'hsl(0, 100%, 67%)';
        yearInput.style.border = '1px hsl(0, 100%, 67%) solid';
    } else if (inputDate > currentDate || year > currentDate.getFullYear()) {
        errorYear.textContent = "Must be in the past";
        yearLabel.style.color = 'hsl(0, 100%, 67%)';
        yearInput.style.border = '1px hsl(0, 100%, 67%) solid';
    } else if (isNaN(year) || inputDate.getDate() !== parseInt(day) || year.length !== 4) {
        errorYear.textContent = "Please enter a valid date.";
        yearLabel.style.color = 'hsl(0, 100%, 67%)';
        yearInput.style.border = '1px hsl(0, 100%, 67%) solid';
    } else {
        errorYear.textContent = "";
        yearLabel.style.color = 'hsl(0, 1%, 44%)';
        yearInput.style.border = '1px hsl(0, 0%, 86%) solid';
    };

    return (
        errorDay.textContent === "" &&
        errorMonth.textContent === "" &&
        errorYear.textContent === ""
    );
};
