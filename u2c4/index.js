// write js code here corresponding to index.html
// You should add submit event on the form
var form = document.querySelector("form")
form.addEventListener("submit",getData)

dataArr = JSON.parse(localStorage.getItem("schedule")) || [];
console.log(dataArr)
function getData(){
    event.preventDefault()
    
    var data = {
        number : masaiForm.matchNum.value,
        teamA  : masaiForm.teamA.value,
        teamB : masaiForm.teamB.value,
        date : masaiForm.date.value,
        venue : masaiForm.venue.value
        
    }
   dataArr.push(data)
   localStorage.setItem("schedule",JSON.stringify(dataArr))
}


