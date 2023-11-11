document.addEventListener("DOMContentLoaded", function () {
    const consultaForm = document.getElementById("consultaForm");
    const mensagensDiv = document.getElementById("mensagens");

    consultaForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const tipoUsuario = document.getElementById("tipoUsuario").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const nomePaciente = document.getElementById("nomePaciente").value;
        const dataConsulta = document.getElementById("dataConsulta").value;
        const descricaoConsulta = document.getElementById("descricaoConsulta").value;

        if (tipoUsuario === "psicologo") {
            // Redirecionar para a página de consulta do psicólogo
            window.location.href = "/pagina-de-consultas-psicologo.html";
        } else {
            // Aqui você pode enviar os dados para o backend (por meio de uma API ou outra forma)
            // Exemplo de envio usando fetch:

            fetch("/api/cadastrar-consulta", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tipoUsuario,
                    email,
                    senha,
                    nomePaciente,
                    dataConsulta,
                    descricaoConsulta,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    mensagensDiv.innerHTML = "Consulta cadastrada com sucesso!";
                    consultaForm.reset();
                })
                .catch((error) => {
                    mensagensDiv.innerHTML = "Erro ao cadastrar a consulta. Tente novamente.";
                });
        }
    });
});
