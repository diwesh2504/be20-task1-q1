var req= new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    dt=JSON.parse(this.response)
    for(i in dt){
        console.log("Country Name "+dt[i].name)
    }
}
