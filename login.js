function login() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!email || !senha) {
    mostrarErro("Preencha email e senha");
    return;
  }
 fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include", 
    body: JSON.stringify({
      email: email,
      senha: senha
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert(data.error);
        return;
      }

      mostrarSucesso("Login feito com sucesso!");
      setTimeout(() => { window.location.href = "index.html"; }, 800);

     
      localStorage.setItem("usuario", JSON.stringify(data.usuario));

      
      window.location.href = "index.html";
    })
    .catch(err => {
      console.log(err);
      mostrarErro("Erro no login");
    });
}