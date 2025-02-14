document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        let index = 0;
        const images = carousel.querySelectorAll("img");
        const totalImages = images.length;

        // Criar botões de navegação
        const prevButton = document.createElement("button");
        prevButton.innerHTML = "&#10094;";
        prevButton.classList.add("prev");

        const nextButton = document.createElement("button");
        nextButton.innerHTML = "&#10095;";
        nextButton.classList.add("next");

        carousel.appendChild(prevButton);
        carousel.appendChild(nextButton);

        // Função para mostrar a imagem com transição suave
        function showImage(i) {
            // Esconde todas as imagens
            images.forEach(img => {
                img.style.opacity = "0";
                img.style.transition = "opacity 0.5s ease";
            });

            // Mostra apenas a imagem atual
            images[i].style.opacity = "1";
        }

        // Mostrar a primeira imagem ao carregar
        showImage(index);

        // Navegação para a imagem anterior
        prevButton.addEventListener("click", function () {
            index = (index - 1 + totalImages) % totalImages;
            showImage(index);
        });

        // Navegação para a próxima imagem
        nextButton.addEventListener("click", function () {
            index = (index + 1) % totalImages;
            showImage(index);
        });
    });
});