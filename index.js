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
    dataReq = JSON.stringify(dataReq);
    console.log(dataReq);
    $.post( "http://localhost:8080", dataReq, function( dataRes ) {
        console.log(dataRes)
        let list
        let depRes = document.createElement("li");
        //depRes.classList.add("list");
        let carrier =  dataRes.Carriers[0].Name;
        let from = dataRes.Places[1].Name;
        let to = dataRes.Places[0].Name;
        let price = dataRes.Quotes[0].MinPrice;
        /*depRes.innerHTML(carrier);
        depRes.innerHTML(from);
        depRes.innerHTML(to);
        depRes.innerHTML(price);*/

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