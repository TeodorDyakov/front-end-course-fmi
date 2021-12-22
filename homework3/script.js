var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function showRecipe(){
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

  
var recipes;

function listItemTemplate(recipe){
    console.log(recipe);
    const list = document.getElementsByClassName("recipes")[0];
    var entry = document.createElement('li');
    
    var recipeFlex = document.createElement('div');
    recipeFlex.classList.add("recipeFlex");
    
    var leftFlex = document.createElement("div");
    leftFlex.classList.add("leftFlex");
    var img = document.createElement("img");
    var label = document.createElement("label");
    img.src = recipe["image"];
    label.innerText = recipe["name"];

    leftFlex.appendChild(img);
    leftFlex.appendChild(label);

    var rightFlex = document.createElement("div");
    rightFlex.classList.add("rightFlex");
    
    var label2 = document.createElement("label");
    label2.innerText = recipe["category"] + ", " + recipe["region"];
    var button = document.createElement("button");
    
    button.classList.add("recipeButton");
    button.innerText = "See recipe";

    rightFlex.appendChild(label2);
    rightFlex.appendChild(button);

    recipeFlex.appendChild(leftFlex);
    recipeFlex.appendChild(rightFlex);
    
    entry.appendChild(recipeFlex);
    list.appendChild(entry);
}

async function loadRecipes() {
    const response = await fetch (
        `https://api.npoint.io/51ed846bdd74ff693d7e`
      );

    recipes = await response.json();
    recipes["meals"].forEach((recipe) => listItemTemplate(recipe));
    console.log(recipes);
  }

  loadRecipes();
