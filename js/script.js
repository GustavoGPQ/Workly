document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Seleciona o formulário corretamente
    const messageDiv = document.getElementById("message");

    form.addEventListener("submit", async function (e) {
        e.preventDefault(); // Impede o envio padrão

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                messageDiv.textContent = "Mensagem enviada com sucesso!";
                messageDiv.classList.add("success");
                messageDiv.style.display = "block";
                form.reset(); // Limpa os campos do formulário

                // Esconder mensagem após 5 segundos
                setTimeout(() => {
                    messageDiv.style.display = "none";
                }, 5000);
            } else {
                throw new Error("Erro ao enviar formulário.");
            }
        } catch (error) {
            messageDiv.textContent = "Erro ao enviar. Tente novamente.";
            messageDiv.classList.add("error");
            messageDiv.style.display = "block";
        }
    });
});
