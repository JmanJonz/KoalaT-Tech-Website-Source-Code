// helper-functions

// convert unix timestamp to local time
function unixTimestampToLocalDateTime(timestamp){
    // Create a new Date object with the unix timestamp in milliseconds
    const date = new Date(timestamp * 1000);

    // Define the days of the week (you can customize the names as needed)
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // set up the options for formatting the date
    const options = {
        month: 'long', // Full month name (e.g., January, February, etc.)
        day: 'numeric', // Day of the month (e.g., 1, 2, 3, etc.)
        hour: 'numeric', // Hours (e.g., 1, 2, 3, etc.)
        minute: 'numeric', // Minutes (e.g., 01, 02, 03, etc.)
        hour12: true, // Use 12-hour time format
    }

    // get the local date and time componets
    const localDateTime = date.toLocaleDateString(undefined, options);

    // Extract the day of the week from the Date object and format it
    const dayOfWeek = daysOfWeek[date.getDay()];

    // Return local date and time
    return `${dayOfWeek} ${localDateTime}`;
}

// Export the functions that I want to
export {unixTimestampToLocalDateTime};