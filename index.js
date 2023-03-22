// Your code goes here


//First, set up a DOMContentLoaded event listener to detect when the HTML page has loaded and the document is ready to be manipulated. Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"

// Note: Using the innerTextLinks to an external site. property to modify DOM element content will not work for this lab. Use textContentLinks to an external site. or innerHTMLLinks to an external site. instead.

document.addEventListener("DOMContentLoaded", function() {
    text = document.getElementById("text");
    text.innerHTML = "This is really cool!";
});
