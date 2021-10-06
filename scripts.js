const apiUrl = 'https://pokeapi.co/api/v2/location/';

const retrieveLocation = async(id)=>{
    let response = await fetch(apiUrl);
    let data = await response.json();
    let location = data.results[id];
    let name = location.name;
    alert(`Quick!! Head to ${name} to catch up to Ash!!`);
}

retrieveLocation().catch(error => console.log(error));

document.getElementById('getLocation').addEventListener('click',()=>{retrieveLocation(document.getElementById('locationId').value).then(name=>{document.getElementById('locationName').innerHTML=name;});});