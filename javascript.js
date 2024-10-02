document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contato-form");
  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const assunto = document.querySelector("#assunto");
  const mensagem = document.querySelector("#mensagem");

  form.addEventListener("submit", function (event) {
    let hasError = false;

    // Validação do nome
    if (nome.value.trim() === "") {
      alert("O campo Nome é obrigatório.");
      hasError = true;
    } else if (nome.value.length > 50) {
      alert("O campo Nome deve conter no máximo 50 caracteres.");
      hasError = true;
    }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      alert("O campo Email é obrigatório.");
      hasError = true;
    } else if (!emailRegex.test(email.value)) {
      alert("Por favor, insira um e-mail válido.");
      hasError = true;
    }

    // Validação do assunto
    if (assunto.value.trim() === "") {
      alert("O campo Assunto é obrigatório.");
      hasError = true;
    } else if (assunto.value.length > 50) {
      alert("O campo Assunto deve conter no máximo 50 caracteres.");
      hasError = true;
    }

    // Validação da mensagem
    if (mensagem.value.trim() === "") {
      alert("O campo Mensagem é obrigatório.");
      hasError = true;
    } else if (mensagem.value.length > 300) {
      alert("O campo Mensagem deve conter no máximo 300 caracteres.");
      hasError = true;
    }

    // Se houver erro, prevenir o envio do formulário
    if (hasError) {
      event.preventDefault();
    }
  });
});
