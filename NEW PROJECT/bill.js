console.log('connected');
function billoner(){



    const url='https://forbes400.onrender.com/api/forbes400?limit=10';
    fetch(url)
    .then(response => response.json())
    .then(data => displayData(data.slice(0-3)))
};

function displayData(data){

  const container= document.getElementById('mainContainer');
  container.innerHTML='';
for(const user of data){
console.log(user.naturalId);
    const div1= document.createElement('div');
    div1.classList.add('col');

    div1.innerHTML=`
    <div class=" col card bg-success" style="width: 18rem; height: 18rem;">
    <h5 id="name" class="card-title text-center mt-2 text-white">${user.person.name}</h5>
    <div class="d-flex">
    <img style="width: 5rem; height: 8rem;" class="img-fluid" src="${user.person.squareImage}" class="card-img-top" alt="...">
     <div>
     <h6> Citizenship:${user.countryOfCitizenship}</h6><br/>
     <p> City:${user.city}</p>
     <p>Worth:${user.estWorthPrev} </p>
     <p>Share:${user.financialAssets[0].sharePrice}</p>
   
     </div>
   
    
      </div>
      <button onclick="details1('${user.naturalId}')" style="width: 5rem; height: 2rem;" type="button" class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Details
    </button>

</div>
    
    
    `;
 
    container.appendChild(div1);
    
    // console.log(user.financialAssets[0].sharePrice);


   
    
    
   
   
}

    
}
function details1(id){

  // console.log(id);
  const url=`https://forbes400.onrender.com/api/forbes400/${id}`;
  console.log(url);
  // fetch(url)
  // .then(response => response.json())
  // .then(data => console.log(data))
}
function loadmore(){

    const url= 'https://forbes400.onrender.com/api/forbes400/';
    fetch(url)
     .then(response => response.json())
     .then(data => displayMore(data))

}

function displayMore(data){

//   for( const load of data){

//     console.log(load);
//   }
// name
const subContainer= document.getElementById('sub-container');
for(const load of data){
     console.log(load.naturalId);

    const newuser= document.createElement('div');

    newuser.innerHTML=`
    
    <div class="col container bg-success ">
    <div class="card" >
      <img style="width: 5rem; height: 8rem;" class="img-fluid" src="${load.person.squareImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${load.person.name}</h5>
        <h6 class="card-title">Citizenship:${load.countryOfCitizenship}</h6>
        <h6 class="card-title">City:${load.city}</h6>
        <h6 class="card-title">Share:${load.financialAssets[0].sharePrice}</h6>
        <p class="card-text">Exchange:${load.financialAssets[0].exchange}</p>
        <p class="card-text">exchange:${load.naturalId}</p>
      </div>
    </div>
  </div>
    
    
    `;
    subContainer.appendChild(newuser);
  

 
    







}
  


}

// loadmore();



// function details1(id){

//   console.log(id);
   
//      const url = `https://forbes400.onrender.com/api/forbes400/${id}`;
//      fetch(url)
//      .then(response => response.json())
//      .then(data => displayData2(data))
// }
//  function displayData2(data){

//  console.log(data)}


//  const n= document.getElementById('he');



//     const div4= document.createElement('div');
//     div4.innerHTML=`
//     <h3>${data.person.name}</h3>
    
//     `;
//     n.appendChild(div4);

//     console.log(data.person.name);



// }


billoner();

// const n= document.getElementById('he');
// n.innerHTML='fukc';

