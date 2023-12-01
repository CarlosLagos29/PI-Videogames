const validate = (gameData) => {
    const errors = {};
    if (!/\.(jpg|jpeg|png|gif)$/i.test(gameData.image)) {
        errors.image = "The url must be in .jpg, jpeg, png or gif format"
    }
    if (!/^https:\/\//i.test(gameData.image)) {
        errors.image = "This field must be completed with a url"
    }
    if (gameData.image === "https://ih1.redbubble.net/image.810044743.8981/st,small,845x845-pad,1000x1000,f8f8f8.u2.jpg" ){
        errors.image = "Please post an image of your game"
    }
    if (gameData.rating < 0) {
        errors.rating = "The rating can't be less than 0"
    }
    if (gameData.rating > 5) {
        errors.rating = "The rating can't be greater than 5"
    }
    if (gameData.description?.length < 10) {
        errors.description = "Enter a description of at least 10 characters";
    }
    if (gameData.name?.length < 4) {
        errors.name = "The name must be at least 4 characters"
    }
    if (gameData.name?.length > 20){
        errors.name ="The name cannot exceed 20 characters"
    }
    if (gameData.name.trim() === "") {
        errors.name = "Enter the name of your video game"
    }
    if (!gameData.genres?.length){
        errors.genres = "Select at least one genre"
    }
    if (gameData.genres?.length > 3){
        errors.genres = "You can only select a maximum of 3 genres"        
    }
    if (!gameData.plataforms?.length){
        errors.plataforms = "Enter some platform"
    }
    if(gameData.released === ""){
        errors.released = "Please select a date"
    }


    return errors
}

export default validate;