

document.addEventListener('DOMContentLoaded', function(){
    returnImages();    
    
})

/* Deliverable #1: */

function returnDogImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    // fetch the images using the url above 
    fetch(imgUrl)
    // parse the response as JSON
    .then(response => response.json())
    // add image elements to the DOM for each image in the array
    .then(image => {
        image.message.forEach(image => addDogImages(image))
    });
}

// helper function - it creates elements for each image in the API
function addDogImages(imagePlaceholder){
    // create variable assigned to value of querying doc for an element
    const dogImageContainer = document.querySelector("#dog-image-container");
    // create an element for this image
    let dogImageTag = document.createElement("img");
    // assign the value of this new image src to the image in func above
    dogImageTag.src = imagePlaceholder;
    // append this to the dogImageContainer
    dogImageContainer.appendChild(dogImageTag);
}


/* Deliverable 2 */

function getDogs(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    // on page load, fetch all the dog breeds using the url above 
    fetch(breedUrl)
        .then(response => response.json());
    // add the breeds to the page in an <ul> (take a look at the included index.html) by append
        .then()
}

/* Deliverable 3 */

// Once all of the breeds are rendered in the <ul>, add JavaScript so that the font color of a particular <li> changes on click. This can be a color of your choosing.

// When the user clicks any of the dog breed list items, the color the text should change.

/* Deliverable 4 */

// Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.

