// write js code here corresponding to matches.html



var data = JSON.parse(localStorage.getItem("schedule")) || []
displayData(data)

var Favourites = [];


document.addEventListener("change",handleFilter)
// filter By Venue
function handleFilter(){
   var selected = document.querySelector("#filterVenue").value
var filterList = data.filter(function(ele){
    return ele.venue == selected;
})
displayData(filterList)

}


function displayData(data){
    var tBody = document.querySelector("tbody")
    tBody.innerHTML = "";
  

    data.forEach(ele => {
        

        var tr = document.createElement("tr")
    
        var td1 = document.createElement("td")
        td1.innerText = ele.number;
    
        var td2 = document.createElement("td")
        td2.innerText = ele.teamA;
        
        var td3 = document.createElement("td")
        td3.innerText = ele.teamB;
    
        var td4 = document.createElement("td")
        td4.innerText = ele.date;
    
        var td5 = document.createElement("td")
        td5.innerText = ele.venue;
    
        var td6 = document.createElement("td")
        td6.innerText = "Add to Favourites";
        td6.style.color = "Green"
        td6.style.cursor = "pointer"
    
        tr.append(td1,td2,td3,td4,td5,td6)
        tBody.append(tr)

        td6.addEventListener("click",function(){
            addToFavourite(ele);
        })
        function addToFavourite(ele){
            Favourites.push(ele)
            localStorage.setItem("favourites",JSON.stringify(Favourites))
        }
    });
    
}


// <select id="filterVenue">
// <option value="none">Filter by venue</option>
// <option value="Mumbai">Mumbai</option>
// <option value="Banglore">Banglore</option>
// <option value="Hyderabad">Hyderabad</option>
// <option value="Delhi">Delhi</option>
// <option value="Pune">Pune</option>
// </select>