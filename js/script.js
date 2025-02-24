
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("header ul.menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("active");
        }
    });


    const menuItems = menu.querySelectorAll("li a");
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        let index = 0;
        const images = carousel.querySelectorAll("img");
        const totalImages = images.length;

  
        const prevButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");

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
