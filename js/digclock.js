/* Clock */
// Create a time data function
function currentTime() {
    // Declare variables
    var d = new Date(); // Get current date
    var hr = d.getHours(); // Get current hours
    var min = d.getMinutes(); // Get current minutes
    var sec = d.getSeconds(); // Get current seconds
    var ampm; // Declare empty variable to store AM or PM

    // Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    // Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }

    // Determine AM or PM string
    if (hr == 12) {
        ampm = "PM"; // Set to PM
    } else if (hr > 12) {
        hr -= 12; // Deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; // Set to PM
    } else {
        ampm = "AM"; // Set to AM
    }

    // Run time data function every 1 second
    setInterval(currentTime, 1000); // setting timer

    /* Homework Challenge */
    var utchr = d.getUTCHours(); // Get current Greenwich Mean Time (GMT)
    var timeDiff; // To store time difference between GMT hour and Local hour
    var adjTimeDiff; // To store time difference converted to positive number
    var timeZone; // To store the 4 time zones (PT, MT, CT, ET)

    // Convert Greenwich Mean Time from military time to standard time
    if (utchr > 12) {
        utchr -= 12; // Deduct 12 from hours greater than 12 (military time)
    }

    // Calculate time difference between GMT hour and local hour
    timeDiff = utchr - hr;

    // Convert time difference, if negative, to positive (adjusted time difference)
    if (timeDiff < 0) {
        adjTimeDiff = timeDiff + 12;
    } else {
        adjTimeDiff = timeDiff;
    }

    // Check which time zone based on the converted time difference between GMT Hour and Local Hour
    if (adjTimeDiff == 8) {
        timeZone = "PT";
    } else if (adjTimeDiff == 7) {
        timeZone = "MT";
    } else if (adjTimeDiff == 6) {
        timeZone = "CT";
    } else if (adjTimeDiff == 5) {
        timeZone = "ET";
    } else {
        timeZone = "Outside of US";
    }

    // Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    // Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time; // adding time
}

// Initial run of time data function
currentTime();