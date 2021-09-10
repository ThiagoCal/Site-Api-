let return_ = document.getElementById("return");
let oneWay = document.getElementById("one-way");
let departureD = document.getElementById("departureD");
let returnD = document.getElementById("returnD");
let search = document.querySelector("[search-form-button]");

//------choose type of flight
return_.onclick = function(){
    returnD.style.display = "block"
}

oneWay.onclick = function(){
    returnD.style.display = "none";
}

search.onclick = function(){
    console.log("hello");
}

//------------

function stringifyDate2(date){
    let day = date.getdate();
    if (day < 10){
        day = "0" + day;
    }

    let month = date.getMonth();
    if (month < 10){
        month = "0" + month;
    }

    let year = date.getFullYear();

    return year + "-" + month + "-" + day;
}

let min = stringifyDate2(new Date());
let max = new Date(min);
max.setFullYear(max.getFullYear()+1);
max = stringifyDate2(max);

departureD.setAttribute("min", min);
departureD.setAttribute("max", max);
returnD.setAttribute("min", min);
returnD.setAttribute("max", max);

departureD.onchange = function(){
    returnD.setAttribute("min", departureD.value);
}

//----- criar handlers
/*
const handleSearchD = (event)=> {
    event.preventDefault();
    let inputDep = document.getElementById("departure");
    let inputTo = document.getElementById("to");
    let departureV = inputDep.value;
    let toV = inputTo.value;
    let list = document.querySelector("[data-list]");
    let depDate = document.getElementById("departureD");
    let dateDep = moment(depDate.value)
    dateDep = date.format('DD/MM/YYY');

    const data = {
        departureV,
        toV,
        dateDep
    }

    localStorage.setItem('depRes', JSON.stringify(data));
    const listResultsDep = listResultsDep(data);
    list.appendChild(listResultsDep);
}

const handleSearchRet = (event)=> {
    event.preventDefault();
    let inputDep = document.getElementById("departure");
    let inputTo = document.getElementById("to");
    let departureV = inputDep.value;
    let toV = inputTo.value;
    let list = document.querySelector("[data-list]");

    let returnD = document.getElementById("returnD");
    let retDate = moment(returnD.value)
    retDate = retDate.format('DD/MM/YYYY');
    const data = {
        departureV,
        toV,
        retDate
    }

    localStorage.setItem('retRes', JSON.stringify(data));
    const listResultsRet = listResultsRet(data);
    list.appendChild(listResultsRet);
}


//--- listar resultados 

const listResultsDep = function({departureV, toV, dateDep}){
   
    
    let depRes = document.createElement("li");
    depRes.classList.add("list");

    let result = `<p class = "content">from ${departureV} to ${toV} - On: ${dateDep}</p>`

    res.innerHTML(result);
   
    return depRes;
}

let listResultsRet = function({ toV, departureV, retDate}){
 

    let retRes = document.createElement("li");
    retRes.classList.add("list");

    let result = `<p class = "content">from ${toV} to ${departureV} on ${retDate}</p>`

    res.innerHTML(result);
    list.appendChild(retRes);
    

    return retRes;
}


//--guardar o valor inserido no input
/*
const saveDeparture = (event) =>{
    event.preventDefault();
    let departure = document.getElementById("departure");
    let departureV = departure.value;
    departure.value = departureV;

}

const saveReturn = (event) =>{
    event.preventDefault();
    let return_ = document.getElementById("return");
    let returnV = return_.value;
    return_.value = returnV;

}*/
//-------------

/*
const searchD = document.getElementById([search-form-button]);

searchD.addEventListener("click", handleSearchD, handleSearchRet); */