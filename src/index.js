
document.addEventListener('DOMContentLoaded', function(){
    returnImages();    
    
    
    /* Deliverable #1: */
    const returnDogImages = () => {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        fetch(imgUrl)
        .then(response => response.json())
        .then(image => {
            image.message.forEach(image => addDogImages(image))
        });
    }
    
    // helper function - it creates elements for each image in the API
    const addDogImages = (imagePlaceholder) => {
        let dogImageContainer = document.querySelector("#dog-image-container");
        let dogImageTag = document.createElement("img");
        dogImageTag.src = imagePlaceholder;
        dogImageContainer.appendChild(dogImageTag);
    }
    
    
    /* Deliverable 2 */
    
    function getDogs(){
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
        .then(response => response.json());
        .then(results => {
            breeds = Object.keys(results.message);
            createDogBreedList(breeds);
            // addBreedSelectListener
        })
    }
    
    // function creates ul and adds list to ul
    function createDogBreedList(breeds){
        let unList = document.querySelector("#dog-breeds");
        let dogBreedList = document.createElement("li");
        unList.append(dogBreedList);
    }
    
    
    /* Deliverable 3 */
    // add event listener
    function fontChange(){
        // font color of a particular <li> changes on click.
        document.addEventListener('click', e => {
            if (e.target.matches("select-breed")){
                
            }
        })
        
        // When the user clicks any of the dog breed list items, the color the text should change.
    }
    
    
    
    /* Deliverable 4 */
    
    // Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.
    
    

    

})