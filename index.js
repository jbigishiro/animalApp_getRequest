//DOM render function
function renderOneAnimal(animal){
    //build animal
    let card=document.createElement("li")
    card.className="card"
    card.style.textAlign="center"
    card.innerHTML=`
     <img src=${animal.imageUrl} width="400" height="300">
     <div class="content">
      <h4>${animal.name}</h4>
      <p>
      $<span class="donation-count">${animal.donation}</span> Donated
      </p>
      <p>${animal.description}</p>
      </div>
      <div class="btn">
        <button> Donate $10 </button>
        <button> Set free </button>
      </div>
    `
    //add animal card to DOM
document.getElementById("list").appendChild(card)

    
}


// initial render
// get data and render our animals to the DOM
function initialize(){
    animalData.forEach(animal=>renderOneAnimal(animal))
}
initialize()