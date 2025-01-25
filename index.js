months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
document.getElementById("defaultOpen").click();

var vara = 2025;
var varb = 2025;
document.getElementById("Tab3").style.display = "block";

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
async function updateArticle(){
    let interval1;
    console.log(vara);
    console.log(varb);
    const currentDate = new Date();
    date = document.getElementById("dateinput").value;
    console.log(date);
    year = date.substring(0,4);
    month = date.substring(5,7);
    day = date.substring(8, 10)
    varb = year;
    console.log(year, month);
    if(year > currentDate.getFullYear()){
        alert("Year selected is not valid");
        if(month > currentDate.getMonth()){
            alert("Month selected is not valid");
            if(day > currentDate.getDate()){
                alert("Day selected is not valid");
        }
    }
    }else{
        if(year == 1000){
            document.getElementById("iframeyear").src = "https://en.wikipedia.org/wiki/Year_" + year;
        }else if(year < 1000){
            document.getElementById("iframeyear").src = "https://en.wikipedia.org/wiki/Year_" + year.substring(1,4);
        }
        else{
            document.getElementById("iframeyear").src = "https://en.wikipedia.org/wiki/" + year;
        }

        if(year >= 1899){
            document.getElementById("iframemonth").src = "https://en.wikipedia.org/wiki/" + months[month-1] + "_" + year;
        }else{
            document.getElementById("iframemonth").src = "https://en.wikipedia.org/wiki/" + months[month-1];
        }
    }
    document.getElementById("iframedate").src = "https://en.wikipedia.org/wiki/" + day + " " + months[month-1];

    let x = 0;
    let y = -((varb-vara)*365)/500;
    console.log(varb);
    interval1 = setInterval(() => {
        console.log(y);
        x = x + y;
        document.getElementById("earth").style.rotate = x + "deg";
    }, 1);
    setTimeout(() => {
        clearInterval(interval1);
    }, 2000);
    vara = year;
}

function random() {
    var yearrandom = Math.floor(Math.random() * 2025) ;
    if(yearrandom/1000 < 1){
        var yearrandom = "0" + yearrandom;
    }

    // Ensure month is 2 digits (e.g., 07)
    let monthrandom = Math.floor(Math.random() * 12) + 1;
    monthrandom = String(monthrandom).padStart(2, '0'); // Format to two digits

    // Ensure day is 2 digits (e.g., 07)
    let dayrandom = Math.floor(Math.random() * 31) + 1;
    dayrandom = String(dayrandom).padStart(2, '0'); // Format to two digits

    // Log formatted output
    console.log("Year:", yearrandom);
    console.log("Month:", monthrandom);
    console.log("Day:", dayrandom);



    const formattedDate = `${yearrandom}-${monthrandom}-${dayrandom}`;
    console.log(formattedDate);
    document.getElementById("dateinput").value = formattedDate;
}
