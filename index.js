let return_ = document.getElementById("return");
let oneWay = document.getElementById("one-way");
let returnD = document.getElementById("returnD");
let departureD = document.getElementById("departureD");
let search = document.getElementById("search");
let from = document.getElementById("departure");
let to = document.getElementById("to");

//------------------------------------------------------------------
//----Choose type of flight------

return_.onclick = function(){
    console.log("return_");
    returnD.style.display = "block";
}
oneWay.onclick = function(){
    console.log("oneWay");
    returnD.style.display = "none";
}

search.onclick = function(){
    let dataReq = {
        from: from.value,
        to: to.value,
        departure: departureD.value,
        return: returnD.value
    }
    
    console.log(dataReq);
    $.post( "http://localhost:8080", JSON.stringify(dataReq), function( dataRes ) {
        console.log(dataRes)
        let list = document.getElementById('lista');
        list.classList.add("res_card")
        list.innerHTML = "";
        /*if (dataRes.errors !== null){
            let result = document.createElement('li');
            let content = `<p class = "content">Search Error</p>`
            result.innerHTML= content;
            list.appendChild(result);
        }*/
        
            let from = dataRes.Places[1].Name;
            let to = dataRes.Places[0].Name;
            for(let i = 0 ; i < dataRes.Quotes.length; i++){
                let carrier =  dataRes.Carriers[i].Name;
                let price = dataRes.Quotes[i].MinPrice;
                let departureDate = dataReq.departure;
                let returnDate = dataReq.return;
                let result = document.createElement('li');
                result.classList.add("res")
                let content = `<p class = "res_content">Carrier: ${carrier} <br> From: ${from} <br> To: ${to} <br> Departure Date: ${departureDate} <br> Return Date: ${returnDate} <br> Price: ${price}</p> <br> <button id ="save${i}" class= "saveB"> Save search </button>`
                result.innerHTML= content;
                list.appendChild(result);
                let btnSave = document.getElementById("save"+ i);
                btnSave.onclick = function() {
                    
                    let data = {
                        from: from,
                        to: to,
                        dateD: departureDate,
                        dateR: returnDate,
                        carrier: carrier,
                        price: price,
                    }
                   add2Save(data);
                   drawSavedList();
                }

                
            }
        
        
        
    },"json");
}
//--------------------------------------------------------------------
//----Manipulating dates------

function stringifyDate(date){
    let day = date.getDate();
    if (day < 10){
     day = "0" + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10){
        month = "0"+ month;
    }
    let year = date.getFullYear();

    return year + "-" + month + "-" + day; 

}
let min = stringifyDate(new Date());
let max = new Date(min);
max.setFullYear(max.getFullYear()+1);
max = stringifyDate(max);
departureD.setAttribute("min", min);
departureD.setAttribute("max", max);
returnD.setAttribute("max", max);
returnD.setAttribute("min", min);

departureD.onchange = function(){
    returnD.setAttribute("min", departureD.value);
}

//---------------------------

/*
    let saveSearch = (atualiza, id) =>{
        let saved = JSON.parse(localStorage.getItem("searched")) || [];
        saved[id].saved = !saved[id].saved;
        localStorage.setItem("searched", JSON.stringify(savedSearch));

        atualiza();
    }

    let buttonsave = (atualiza, id) =>{
        buttonsave.addE
    }
*/


function readSaved (){
    return JSON.parse(localStorage.getItem("searched")) || [];
}

function writeSaved (savedList){
    localStorage.setItem("searched", JSON.stringify(savedList));
}

function removeFromSaved (item1) {
    let savedList = readSaved();
    savedList = savedList.filter(function(item2){
        return  item1.carrier === item2.carrier && 
                item1.price === item2.price &&
                item1.to === item2.to &&
                item1.from === item2.from &&
                item1.dateR === item2.dateR &&
                item1.dateD === item2.dateD;
    });
    writeSaved(savedList)
}

function add2Save (data) {
    let savedList = readSaved();
    savedList.push(data);
    writeSaved(savedList);
}


function drawSavedList (){
    let list2 = document.getElementById("lista2");
    list2.innerHTML = "";
    let savedList = readSaved();
    for(let x = 0; x < savedList.length; x++){
        let flight = savedList[x];
        let savedFlight = document.createElement('li');
        savedFlight.classList.add("res")
        let savedF = `<p class = "res_content">Carrier: ${flight.carrier} <br> From: ${flight.from} <br> To: ${flight.to} <br> Departure Date: ${flight.dateD} <br> Return Date: ${flight.dateR} <br> Price: ${flight.price}</p> <br> <button id ="remove${x}" class= "removeBtn"> Remove Flight </button>`
        savedFlight.innerHTML= savedF;
        list2.appendChild(savedFlight);
        let removeBtn = document.getElementById("remove" + x);
        removeBtn.onclick = function (){
            removeFromSaved(flight);
            console.log(flight)
            drawSavedList();
        }
    }


}

drawSavedList();