function openHoursWebsite() {
    "use strict";
    window.open("https://campusrec.illinois.edu/facilities/hours-of-operation/");
}

function openArcWebsite() {
    "use strict";
    window.open("https://campusrec.illinois.edu/facilities/activities-and-recreation-center-arc/");
}

function openArcWebsite() {
    "use strict";
    window.open("https://campusrec.illinois.edu/facilities/campus-recreation-center-east-crce/");
}

function openRecreationWebsite() {
    "use strict";
    window.open("https://campusrec.illinois.edu/");
}

function openChat(evt, chatName) {
    "use strict";
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i += 1) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i += 1) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(chatName).style.display = "block";
    evt.currentTarget.className += " active";
}
