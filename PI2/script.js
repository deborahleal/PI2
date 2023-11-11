import {App} from './app';

export class Script {
    constructor() {
        this.appInstance = new App();
    }
}
const tipoInput = document.getElementById("tipo");
            const psicologoDiv = document.getElementById("psicologoDiv");
            const clienteDiv = document.getElementById("clienteDiv");

            tipoInput.addEventListener("change", function() {
                if (tipoInput.value === "psicologo") {
                    psicologoDiv.style.display = "block";
                    clienteDiv.style.display = "none";
                } else if (tipoInput.value === "cliente") {
                    psicologoDiv.style.display = "none";
                    clienteDiv.style.display = "block";
                } else {
                    psicologoDiv.style.display = "none";
                    clienteDiv.style.display = "none";
                }
            });

            document.getElementById("cadastroForm").addEventListener("submit", function(event) {
                event.preventDefault();
                const tipo = tipoInput.value;

                if (tipo === "psicologo") {
                    const emailPsicologo = document.getElementById("emailPsicologo").value;
                    const senhaPsicologo = document.getElementById("senhaPsicologo").value;
                    console.log("Tipo: " + tipo);
                    console.log("Email (Psicólogo): " + emailPsicologo);
                    // Não imprima senhas no console em um ambiente real por motivos de segurança.
                    console.log("Senha (Psicólogo): " + senhaPsicologo);
                } else if (tipo === "cliente") {
                    const telefoneCliente = document.getElementById("telefoneCliente").value;
                    const senhaCliente = document.getElementById("senhaCliente").value;
                    console.log("Tipo: " + tipo);
                    console.log("Telefone (Cliente): " + telefoneCliente);
                    // Não imprima senhas no console em um ambiente real por motivos de segurança.
                    console.log("Senha (Cliente): " + senhaCliente);
                }

            });
    