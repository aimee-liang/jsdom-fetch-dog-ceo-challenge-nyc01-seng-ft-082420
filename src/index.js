document.addEventListener('DOMContentLoaded', (){
    
    
    /* Deliverable #1: */
    const returnDogImages = () => {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        fetch(imgUrl)
        .then(response => response.json())
        .then(image => {addDogImages(image)})
    }
    
    const addDogImages = (image) => {
        const dogImageContainer = document.querySelector("dog-image-container");
        image.message.forEach(x => {
            const dogImageTag = document.createElement("img");
            dogImageTag.src = x;
            dogImageContainer.append(dogImageTag);
        })
    }
    
    
    /* Deliverable 2 */
    
    function getDogs(){
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
        .then(response => response.json())
        .then(results => {createBreeds(breeds)})
    }
    
    function createBreeds(breeds){
        // search for dog breeds ul
        // create li's inside ul
        // append dogBreedsUl with the li created
        // add event listener here?
    }
    
    // /* Deliverable 3 */
    // add event listener
    // function fontChange(){
    //     document.addEventListener('click', e => {
    //         // font color of a particular <li> changes on click.
    //             if (e.target === dogBreedList){
    //                 // font color change
    //             } else if (e.target.matches)
    //         }
    //     })
        
    // }
    
    
    
    /* Deliverable 4 */
    
    // Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.
    
    

})