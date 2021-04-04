function alertfnk() {
    alert("Hata");
}

function getInfo(){
    const table= document.getElementById("table");
    fetch("veri.json")
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        for(price of data.data){
            console.log(user);
        }
    })
} 
getInfo();