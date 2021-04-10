var currentDayElement=document.getElementById("currentDay");
var timeblockElement=document.getElementById(".time-block");

function updateCurrentDay(){
    var currentDayTxt=moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDayElement.textContent=currentDayTxt
}
setInterval(updateCurrentDay,1000)

function isLater(hour){
    var currentHour=moment().hours();
    if(Number(hour)>Number(currentHour)){
        return "later"
    } else if (Number(hour)<Number(currentHour)){
        return "earlier"
        } else {
            return "current"
        }
}
console.log(isLater("9"))
console.log(isLater("10"))
console.log(isLater("11"))
console.log(isLater("12"))
console.log(isLater("13"))
console.log(isLater("14"))
console.log(isLater("15"))
console.log(isLater("16"))
console.log(isLater("17"))