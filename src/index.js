document.addEventListener('DOMContentLoaded', () => {

    /* Deliverable #1: fetch images and add elements to DOM */
    const getDogImages = () => {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        fetch(imgUrl)
            .then(response => response.json())
            .then(image => addDogImages(image))
    }

    
    const addDogImages = (image) => {
        const dogImageContainer = document.querySelector("dog-image-container");
        image.message.forEach(x => {
            const dogImageTag = document.createElement("img");
            dogImageTag.src = x;
            dogImageContainer.append(dogImageTag);
        })
    }
    
    /* Deliverable 2: fetch dog breeds and adds to a ul */
    const getDogBreeds = () => {
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
            .then(response => response.json())
            .then(breeds => renderDogBreeds(breeds))
    }
    
    const renderDogBreeds = (breeds) => {
        const dogBreedsUl = document.querySelector("#dog-breeds");
        breeds.message.forEach(x => {
            const dogBreedLi = document.createElement("li");
            dogBreedLi.classList.add("dog-breed")             // add a class for selecting it later?
            dogBreedLi.innerText = x;
            dogBreedsUl.append(dogBreedLi);
        })
    }
    
    /* Deliverable 3: once all breeds are rendered, font colors change on click */
    const clickHandler = () => {
        document.addEventListener('click', (e) => {
            const dogBreedLi = document.querySelectorAll(".dog-breed")
            if (e.target.matches(dogBreedLi)){
                e.target.style.color = "blue";
            }
        })
    }
    
    
    /* Deliverable 4: filter breeds that start with a particular letter using dropdown */
    const filteredBreeds = () =>{
        // document.addEventListener('click', (e) => {
            // 
        // })
    }
    

    getDogImages();
    getDogBreeds();
    clickHandler();
    // filteredBreeds();
})