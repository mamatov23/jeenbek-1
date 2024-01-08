const input=document.querySelector('input')
const btn=document.querySelector('button')
const ulTag=document.querySelector('ul')

const _url='https://restcountries.com/v3.1/all'

function getCountry(){
    fetch(_url)
     .then(res=>res.json())
     .then(data=>{
         console.log(data);
    showCountry(data);
     });
}

function showCountry(arr){
    ulTag.innerHTML='';
    for (const obj of arr){
        ulTag.innerHTML +=`
        <h1>${obj.name.common}</h1>
        <h3>Continents:${obj.continents}</h3>
        <h2>Population:${obj.population}</h2>
        <p>Landlocked:${obj.landlocked}</p>
        <p>Area:${obj.area}</p>
        <p>Timezones:${obj.timezones}</p>

        `;
    }
}

btn.onclick=()=>{
    getCountry()
}
