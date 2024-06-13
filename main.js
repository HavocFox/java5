let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

class subObj {
    constructor(name, email, message){
        this.name = name;
        this.email = email;
        this.message = message;
    };

}

// FORM MANIP WITH JAVASCRIPT
const form = document.getElementById('submit-form');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const subTerm1 = document.getElementById('name').value;
    const subTerm2 = document.getElementById('email').value;
    const subTerm3 = document.getElementById('message').value;

    const newObj = new subObj(subTerm1, subTerm2, subTerm3)
    console.log(newObj)
});

// DOCUMENT MANIP WITH JAVASCRIPT
function displayProducts() {
    let container = document.getElementById('product-list'); // goes with <div id="product-list"></div> in HTML

    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('product');

        let nameElement = document.createElement('h3');
        nameElement.textContent = product.name;

        let priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${product.price.toFixed(2)}`;

        let descriptionElement = document.createElement('p');
        descriptionElement.textContent = product.description;

        // put elements in productDiv
        productDiv.appendChild(nameElement);
        productDiv.appendChild(priceElement);
        productDiv.appendChild(descriptionElement);

        // put productDiv into the container
        container.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});


// STYLING WITH JAVASCRIPT
const divContainer = document.getElementById('box');
const divButton = document.getElementById('buttonclicker');

const changeColor = (event) => {
    divContainer.style.backgroundColor = "red";
    divContainer.style.border = "4px solid darkred";
    divContainer.style.color = "white";
    divContainer.style.fontSize = "20px";
};

const mouseColor = (event) => {
    divContainer.style.backgroundColor = "green";
    divContainer.style.border = "4px solid darkgreen";
    divContainer.style.color = "white";
    divContainer.style.fontSize = "18px";
};

const buttonColor = (event) => {
    divContainer.style.backgroundColor = "blue";
    divContainer.style.border = "4px solid darkblue";
    divContainer.style.color = "white";
    divContainer.style.fontSize = "22px";
};

divContainer.addEventListener('click', changeColor);
divContainer.addEventListener('mouseover', mouseColor);
//  try shorthand?
divContainer.addEventListener('mouseout', () => {
    divContainer.style.backgroundColor = "lightgray";
    divContainer.style.border = "2px solid black";
    divContainer.style.color = "black";
    divContainer.style.fontSize = "16px";
});
divButton.addEventListener('click', buttonColor);

