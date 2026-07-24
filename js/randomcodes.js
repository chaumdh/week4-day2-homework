/* ------ RANDOM CODES ------ */

// Create variables to store generated codes and the type of characters we want to show as codes
var code = ''; // initialize to null value
var getCode = ''; // to store entered code
var btnvalue; // for button boolean value
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

// Function to generate combination of characters
function generateCode() {
    // Generate character multiple times using a loop
    for (i = 1; i <= 8; i++) {
        var char = Math.random()* str.length; // random select a character from the variable str
        code += str.charAt(char); // accumulate the generated character into a string of 8 random characters
    }
    return code; // return the final accumulated string when loop ends
}

// Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

// determine when to enable or disable button
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue; // enable/disable button
    if (btnvalue == true) { // test if button is disabled or enabled
        // set button and label color translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        // set button and label color with no transparency
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
    console.log("button disabled");
}
