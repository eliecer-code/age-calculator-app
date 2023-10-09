/* labels */
const text_error_day = document.getElementById("date-day");
const text_error_month = document.getElementById("date-month");
const text_error_year = document.getElementById("date-year");



const btn_submit = document.getElementById("btn-submit");
const actualDate = new Date();

btn_submit.addEventListener("click", (e) => {
    e.preventDefault();

    // Get elements only once outside the loop
    const inputDay = document.getElementById("day");
    const inputMonth = document.getElementById("month");
    const inputYear = document.getElementById("year");

    const days = document.getElementById("days");
    const months = document.getElementById("month_content");
    const years = document.getElementById("years");

    // Convert input values ​​to numbers only once
    const dayValue = parseInt(inputDay.value);
    const monthValue = parseInt(inputMonth.value);
    const yearValue = parseInt(inputYear.value);

    // Validate day, month and year
    const isValidDay = validateDay(dayValue);
    const isValidMonth = validateMonth(monthValue);
    const isValidYear = validateYear(yearValue);

    // Update items and error messages
    if (isValidDay && isValidMonth && isValidYear) {
        const dateBorn = new Date(yearValue, monthValue - 1, dayValue);

        days.textContent = daysOfLife(dateBorn);
        months.textContent = monthsOfLife(dateBorn);
        years.textContent = yearsOfLife(dateBorn);

        // Set the borders to green
        inputDay.style.borderColor = "green";
        inputMonth.style.borderColor = "green";
        inputYear.style.borderColor = "green";

        // Clear error messages
        document.getElementById("error_day").textContent = "";
        document.getElementById("error_month").textContent = "";
        document.getElementById("error_year").textContent = "";

        // Reset text colors
        text_error_day.style.color = "var(--Off-black)";
        text_error_month.style.color = "var(--Off-black)";
        text_error_year.style.color = "var(--Off-black)";
    } else {
        // Show dashes and set borders and text colors on error
        days.textContent = "--";
        months.textContent = "--";
        years.textContent = "--";

        if (!isValidDay) {
            inputDay.style.borderColor = "var(--Light-red)";
            text_error_day.style.color = "var(--Light-red)";
            document.getElementById("error_day").textContent = "Must be a valid day";
        }

        if (!isValidMonth) {
            inputMonth.style.borderColor = "var(--Light-red)";
            text_error_month.style.color = "var(--Light-red)";
            document.getElementById("error_month").textContent = "Must be a valid month";
        }

        if (!isValidYear) {
            inputYear.style.borderColor = "var(--Light-red)";
            text_error_year.style.color = "var(--Light-red)";
            document.getElementById("error_year").textContent = "Must be in the past";
        }
    }
});



/* calculate days of life */
const daysOfLife = (dateBorn) => {
    const msDeVida = actualDate - dateBorn;
    const days_of_life = Math.floor(msDeVida / (1000 * 60 * 60 * 24))
    return days_of_life;
}

/* calculate months of life */
const monthsOfLife = (dateBorn) => {
    const months_of_life = (yearsOfLife(dateBorn) * 12) + ((actualDate.getMonth() + 1) - (dateBorn.getMonth() + 1));
    return months_of_life;
}

/* calculate years old */
const yearsOfLife = (dateBorn) => {
    const years_of_life = actualDate.getFullYear() - dateBorn.getFullYear();
    return years_of_life;
}

const validateDay = (inputDay) => {
    if (inputDay > 1 && inputDay <= 31) {
        return true;
    }
}

const validateMonth = (inputMonth) => {
    if (inputMonth > 1 && inputMonth <= 12) {
        return true;
    }
}

const validateYear = (inputYear) => {
    if (parseInt(inputYear) <= actualDate.getFullYear()) {
        return true;
    }
}