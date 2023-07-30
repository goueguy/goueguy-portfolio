

const showNumberTestimonialSlide = ()=>{
    const carousels = document.querySelectorAll(".carousel");
    const nbrOfSlides = carousels.length;
    return nbrOfSlides;
}

const showContainerProjetSlide = ()=>{
    const container = document.querySelector("#project-container");
    const sliderWidth = document.querySelector(".project").clientWidth;
    return {sliderWidth,container}
}
export {showNumberTestimonialSlide,showContainerProjetSlide};