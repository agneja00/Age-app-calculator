import { validateInputs } from "./validateInputs.js";

const dayInput = document.querySelector("#user-day");
const monthInput = document.querySelector("#user-month");
const yearInput = document.querySelector("#user-year");
const submitBtn = document.querySelector(".btn");
const totalYears = document.querySelector("#total-years");
const totalMonths = document.querySelector("#total-months");
const totalDays = document.querySelector("#total-days");
const digits = document.querySelectorAll(".digits");


function calculateAge() {
    if (validateInputs()) {
        const day = parseInt(dayInput.value);
        const month = parseInt(monthInput.value);
        const year = parseInt(yearInput.value);

        const birthDate = new Date(year, month - 1, day);
        const currentDate = new Date();

        let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
        let ageMonths = currentDate.getMonth() - birthDate.getMonth();
        let ageDays = currentDate.getDate() - birthDate.getDate();

        if (ageMonths < 0 || (ageMonths === 0 && currentDate.getDate() < birthDate.getDate())) {
            ageYears--;
            ageMonths += 12;
        };

        if (ageDays < 0) {
            ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        };

        totalYears.textContent = `${ageYears}`;
        totalMonths.textContent = `${ageMonths}`;
        totalDays.textContent = `${ageDays}`;
        digits.forEach((digit) => {
            digit.classList.add('animation');
        });
    } else {
        totalYears.textContent = '--';
        totalMonths.textContent = '--';
        totalDays.textContent = '--';
        digits.forEach((digit) => {
            digit.classList.remove('animation');
        });
    };
};

submitBtn.addEventListener("click", calculateAge);
