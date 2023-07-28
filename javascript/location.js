var customSelect = document.getElementById("custom-select");
var selectedOption = document.getElementById("selected-option");
var scheduleOptions = document.getElementById("schedule-options");

function updateClock() {
    var today = new Date();
    var day = today.toLocaleDateString('fr-FR', { weekday: 'long' });
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    var status = document.getElementById("status");
    var clock = document.getElementById("clock");

    if (hour >= 8 && hour < 19 && day !== "dimanche") {   
            status.textContent = "Open";
            status.className = "open";
    } else if( day == "samedi" && hour <12 && hour >= 8 ){
        status.textContent = "Open";
        status.className = "open";
    }
    else {
        status.textContent = "Closed";
        status.className = "closed";
    }

    var timeString = day + ", " + hour + ":" + minute + ":" + second;
    clock.textContent = timeString;

    setTimeout(updateClock, 1000);
  }

updateClock();    

x =document.getElementById("selected-option");

customSelect.addEventListener("click", function() {
    customSelect.classList.toggle("opened");
});

scheduleOptions.addEventListener("click", function(e) {
    if (e.target.tagName === "OPTION") {
        selectedOption.textContent = e.target.textContent;
        customSelect.classList.remove("opened");
    }
});