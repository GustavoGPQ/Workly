document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        let index = 0;
        const images = carousel.querySelectorAll("img");
        const totalImages = images.length;


        const prevButton = document.createElement("button");
        prevButton.innerHTML = "&#10094;";
        prevButton.classList.add("prev");

        const nextButton = document.createElement("button");
        nextButton.innerHTML = "&#10095;";
        nextButton.classList.add("next");

        carousel.appendChild(prevButton);
        carousel.appendChild(nextButton);

   
        function showImage(i) {
        
            images.forEach(img => {
                img.style.opacity = "0";
                img.style.transition = "opacity 0.5s ease";
            });

            images[i].style.opacity = "1";
        }

        showImage(index);

        prevButton.addEventListener("click", function () {
            index = (index - 1 + totalImages) % totalImages;
            showImage(index);
        });

      
        nextButton.addEventListener("click", function () {
            index = (index + 1) % totalImages;
            showImage(index);
        });
    });
});