months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var varx = 0;
var vara = 2025;
var varb = 2025;
document.getElementById("Tab3").style.display = "block";
function openTab(evt, tabName){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";}
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");}
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";}
async function updateArticle(){
    varx += 1;
    let interval1;
    let interval2;
    const currentDate = new Date();
    date = document.getElementById("dateinput").value;
    year = date.substring(0,4);
    month = date.substring(5,7);
    day = date.substring(8, 10)
    varb = year;
    if(year > currentDate.getFullYear()){
        alert("Year selected is not valid");
        if(month > currentDate.getMonth()){
            alert("Month selected is not valid");
            if(day > currentDate.getDate()){
                alert("Day selected is not valid");}}}
    else{
        if(year == 1000){
            document.getElementById("iframeyear").src = "https://en.wikipedia.org/wiki/Year_" + year;}
        else if(year < 1000){
            document.getElementById("iframeyear").src = "https://en.wikipedia.org/wiki/Year_" + year.substring(1,4);}
        else{
            document.getElementById("iframeyear").src = "https://en.wikipedia.org/wiki/" + year;}
        if(year >= 1899){
            document.getElementById("iframemonth").src = "https://en.wikipedia.org/wiki/" + months[month-1] + "_" + year;}
        else{
            document.getElementById("iframemonth").src = "https://en.wikipedia.org/wiki/" + months[month-1];}}
    if(day/10 < 1){
        document.getElementById("iframedate").src = "https://en.wikipedia.org/wiki/" + day.substring(1,2) + " " + months[month-1];}else{
        document.getElementById("iframedate").src = "https://en.wikipedia.org/wiki/" + day + " " + months[month-1];}
    let x = 0;
    let y = -((varb-vara)*365)/500;
        interval1 = setInterval(() => {
            x = x + y;
            document.getElementById("earth").style.rotate = x + "deg";
        }, 1);
        setTimeout(() => {
            clearInterval(interval1);
        }, 2000);
    vara = year;}
function random() {
    var yearrandom = Math.floor(Math.random() * 2025) ;
    if(yearrandom/1000 < 1){
        var yearrandom = "0" + yearrandom;}
    let monthrandom = Math.floor(Math.random() * 12) + 1;
    monthrandom = String(monthrandom).padStart(2, '0');
    let dayrandom = Math.floor(Math.random() * 31) + 1;
    dayrandom = String(dayrandom).padStart(2, '0'); // Format to two digits
    const formattedDate = `${yearrandom}-${monthrandom}-${dayrandom}`;
    document.getElementById("dateinput").value = formattedDate;}
