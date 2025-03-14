// slider function

const container = document.querySelector(".container")
const btns = document.querySelectorAll(".btn")
const imagelist = ["bnr2","bnr1","bnr3"]

let index = 0;

btns.forEach((button)=>{
    button.addEventListener("click",()=>{
        
        if(button.classList.contains("btn-left")){
            index--;
            if(index<0){
                index = imagelist.length-1;
            }
            container.style.background = `url("images/${imagelist[index]}.jpg") center/cover`
        }
        else{
            index++;
            if(index==imagelist.length){
                index = 0;
            }
            container.style.background = `url("images/${imagelist[index]}.jpg") center/cover`
        }
    })
})


// like button function

function likeBtn1() {
    let btn1 = document.getElementById("btn1");
    btn1.classList.toggle("fas"); // Changes from outlined to solid heart
    btn1.classList.toggle("far"); // Toggles back to outlined heart
}
function likeBtn2() {
    let btn2 = document.getElementById("btn2");
    btn2.classList.toggle("fas");
    btn2.classList.toggle("far");
}
function likeBtn3() {
    let btn3 = document.getElementById("btn3");
    btn3.classList.toggle("fas");
    btn3.classList.toggle("far");
}
function likeBtn4() {
    let btn4 = document.getElementById("btn4");
    btn4.classList.toggle("fas");
    btn4.classList.toggle("far");
}
function likeBtn5() {
    let btn5 = document.getElementById("btn5");
    btn5.classList.toggle("fas"); 
    btn5.classList.toggle("far"); 
}
function likeBtn6() {
    let btn6 = document.getElementById("btn6");
    btn6.classList.toggle("fas"); 
    btn6.classList.toggle("far"); 
}
function likeBtn7() {
    let btn7 = document.getElementById("btn7");
    btn7.classList.toggle("fas"); 
    btn7.classList.toggle("far"); 
}
function likeBtn8() {
    let btn8 = document.getElementById("btn8");
    btn8.classList.toggle("fas"); 
    btn8.classList.toggle("far"); 
}

// closenav function

var sidenav = document.querySelector(".sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.marginLeft=0
    sidenav.style.display="inline-block"

})

closenav.addEventListener("click",function(){
    sidenav.style.marginLeft="-60%"    
})


// closeoffer function

var closehead = document.querySelector(".closehead")
var header = document.querySelector(".header")

closehead.addEventListener("click",function(){
    header.style.display="none"
})


// serach product function

// Get the search input and all product items
var searchInput = document.querySelector(".search-input");
var products = document.querySelectorAll(".product");

// Listen for input in the search box
searchInput.addEventListener("keyup", function () {
    var searchText = searchInput.value.toUpperCase(); // Get user input

    // Loop through all products
    products.forEach(function (product) {
        var productName = product.querySelector(".product-name").innerText.toUpperCase();

        // Show product if name matches search, otherwise hide it
        if (productName.includes(searchText)) {
            product.style.display = "block"; 
        } else {
            product.style.display = "none"; 
        }
    });
});


// filter by checkbox function

// Get all checkboxes and product items
const checkboxes = document.querySelectorAll('.filter-checkbox');
const collections = document.querySelectorAll('.product');

// Add event listeners to checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});

// Filter function
function filterProducts() {
    // Get selected filters
    const selectedTypes = getSelectedValues('type'); // Get selected types
    const selectedColors = getSelectedValues('color'); // Get selected colors
    const selectedArrivals = getSelectedValues('arrival'); // Get selected arrivals

    // Loop through each product
    collections.forEach(product => {
        const productType = product.getAttribute('data-type').toLowerCase();
        const productColor = product.getAttribute('data-color').toLowerCase();
        const productArrival = product.getAttribute('data-arrival').toLowerCase();

        // Check if the product matches the selected filters
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(productType);
        const colorMatch = selectedColors.length === 0 || selectedColors.includes(productColor);
        const arrivalMatch = selectedArrivals.length === 0 || selectedArrivals.includes(productArrival);

        // Show or hide the product based on the filters
        if (typeMatch && colorMatch && arrivalMatch) {
            product.style.display = 'block'; // Show the product
        } else {
            product.style.display = 'none'; // Hide the product
        }
    });
}

// Helper function to get selected values for a specific filter category
function getSelectedValues(filterName) {
    return Array.from(document.querySelectorAll(`input[name="${filterName}"]:checked`)).map(checkbox => checkbox.value.toLowerCase());
}



