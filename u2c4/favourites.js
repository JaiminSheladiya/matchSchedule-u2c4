// write js code here corresponding to favourites.html

var data = JSON.parse(localStorage.getItem("favourites")) || []
displayData(data)




function displayData(data){
    var tBody = document.querySelector("tbody")
    tBody.innerHTML = "";
  

    data.forEach((ele,i) => {
        

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
        td6.innerText = "Delete";
        td6.style.color = "Red"
        td6.style.cursor = "pointer"
    
        tr.append(td1,td2,td3,td4,td5,td6)
        tBody.append(tr)

        td6.addEventListener("click",function(){
            deleteItem(ele,i);
        })
        function deleteItem(ele,i){
           data.splice(i,1);
           localStorage.setItem("favourites",JSON.stringify(data));
           window.location.reload();
        }
    });
    
}