document.addEventListener("DOMContentLoaded", function () {
    // Function to update the current day of the week
    function getCurrentDay() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayIndex = currentDate.getUTCDay();
        return days[dayIndex];
    }

    // Function to get the current date in the format "Month Day, Year"
    function getCurrentDate() {
        const currentDate = new Date();
        const options = { year: "numeric", month: "long", day: "numeric" };
        return currentDate.toLocaleDateString(undefined, options);
    }

    // Function to update the current time
    function updateTime() {
        const currentDate = new Date();
        const hours = currentDate.getUTCHours().toString().padStart(2, "0");
        const minutes = currentDate.getUTCMinutes().toString().padStart(2, "0");
        const seconds = currentDate.getUTCSeconds().toString().padStart(2, "0");

        // Update the time element with the current time
        document.querySelector('[data-testid="currentTime"]').textContent = `Time: ${hours}:${minutes}:${seconds} UTC`;
    }

    // Update the current day, date, and time immediately when the page loads
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Day: ${getCurrentDay()}`;
    document.querySelector('[data-testid="currentDate"]').textContent = `Date: ${getCurrentDate()}`;
    updateTime(); // Initialize the time
    setInterval(updateTime, 1000); // Update the time every second

    // Set your track
    document.querySelector('[data-testid="myTrack"]').textContent = "Frontend"; // Change this to your track
});
 