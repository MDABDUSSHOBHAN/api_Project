// function displaydata(value)
// {

//     const url= `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=${value}`;
//     fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

 
 
 
//  search section...
 function searchAlldata(){

    const inputField= document.getElementById('searchField');
    const value= inputField.value;
    loading(true);
    console.log(value);
     const url= `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${value}`;
    
      console.log(url);
     fetch(url)
         .then(response => response.json())
         .then(data => displayData(data.player))
         loading(false)

    // displaydata(value);
}

    // https://picsum.photos/5000/300?random=5"
 function displayData(data){
  

document.getElementById('searchField').value="";
     console.log(data);
 const mainContainer= document.getElementById('player_info');
 mainContainer.innerHTML='';
 for( const user of data){

 console.log(user.strHeight)
     const div= document.createElement('div');
     div.innerHTML=`
    
    <div class="col">
     <div class="card h-100">
      <img src="${user.strThumb?user.strThumb: "https://picsum.photos/5000/300?random=5" }" class="card-img-top" alt="...">
       <div class="card-body">
        <h5 class="card-title">${user.strPlayer}</h5>
        <p>Height ${user.strHeight ? user.strHeight : 'null'}</p>
        <p>Nationality:${user.strNationality}</p>
         <p class="card-text"> lead-in to additional content. This content is a little bit longer.</p>
       </div>
       <div class="my-3 mx-2">
       <button type="button" class="btn btn-warning">Delete</button>
       <button id="player_details" onclick="singleplayer(${user.idPlayer})" type="button" class="btn btn-info">Details</button>
       </div>
     </div>
    
   </div>
    
    
    
     `;
     mainContainer.appendChild(div);

    



}




 
    

  }
  function singleplayer(idPlayer){

    const url = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${idPlayer}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displaymore(data.players[0]))

  
  }
  const container= document.getElementById('single-player');
  
  function displaymore(data){
    container.innerHTML='';
  
  // console.log(data.strGender);
// if(data.strGender==='Male'){

//   const element1= document.getElementById('male');
//   const element2= document.getElementById('female');
//    element1.classList.remove('d-none');
//   // element2.classList.add('d-none');
// }
// else{
//   const element1= document.getElementById('male');
//   const element2= document.getElementById('female');
//   element2.classList.remove('d-none');
//   element1.classList.add('d-none');

// }
const maleImage = document.getElementById('male');
const femaleImage = document.getElementById('female');
console.log(femaleImage);
if (data.strGender === 'Male') {
  
  
  maleImage.classList.remove('d-none');
  
   femaleImage.classList.add('d-none');
} else {
 
 
  femaleImage.classList.remove('d-none');
   maleImage.classList.add('d-none');
}
    const element= document.createElement('div');

    element.innerHTML=`
    <h2>${data.strPlayer}</h2>
    
    <h2 class="h6">${data.strPlayer}</h2>
      <img width="150rem" height="150rem" class="img-fluid rounded shadow" src="${data.strThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title text-primary">${data.strBirthLocation}</h5>
        <p class="card-text p-1 text-white">${data.strDescriptionEN.slice(0,300)+"..."}</p>
     




    `;

    container.appendChild(element);
    // document.getElementById('pra3').innerText= data.players[0].strPlayer
    // ;
    //  document.getElementById('pra').innerText= data.players[0].strBirthLocation;
    //  document.getElementById('pra1').innerText= data.players[0].dateBorn;
    //  document.getElementById('img').innerText= data.players[0].strThumb
console.log(data);

  }
  function loading(){


    const spin= document.getElementById('spinnerdiv');
if(spin===true){

  spin.classList.add('d-none');


}
else
{

  spin.classList.remove('d-none');
}
     
  }

 



