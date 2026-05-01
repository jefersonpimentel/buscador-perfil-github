const btnBuscar = document.getElementById("btn-buscar");
const inputUsuario = document.getElementById("input-usuario");
const cartao = document.getElementById("cartao-usuario");
const userNotFound = document.getElementById("user-not-found");
const lookForUser = document.getElementById("look-for-user");

async function buscarUsuario(usuario) {
  btnBuscar.innerHTML = "Buscando...";
  btnBuscar.disabled = true;

  // A mágica acontece aqui: consultando a API do GitHub
  const resposta = await fetch(`https://api.github.com/users/${usuario}`);
  const dados = await resposta.json();

  btnBuscar.innerHTML = "Buscar";
  btnBuscar.disabled = false;

  if (resposta.ok) {
    // Se o usuário existir, preenchemos o cartão e escondemos o erro
    preencherCartao(dados);
    lookForUser.style.display = "none";
    userNotFound.style.display = "none";
  } else if (usuario === "") {
    // Se não existir, avisamos o erro
    lookForUser.style.display = "block";
    userNotFound.style.display = "none";
    cartao.style.display = "none";
  } else {
    userNotFound.style.display = "block";
    lookForUser.style.display = "none";
    cartao.style.display = "none";
  }
}

function preencherCartao(dados) {
  // 1. Mostra o cartão que estava escondido
  cartao.style.display = "block";

  // 2. Troca os dados do HTML pelos dados da API
  document.getElementById("foto-perfil").src = dados.avatar_url;
  document.getElementById("nome-usuario").textContent =
    dados.name || dados.login; // Se não tiver nome, usa o login
  document.getElementById("bio-usuario").textContent =
    dados.bio || "Este dev preferiu não escrever uma biografia. 🤐";
  document.getElementById("seguidores").textContent = dados.followers;
  document.getElementById("repos").textContent = dados.public_repos;
  document.getElementById("link-github").href = dados.html_url;
}

// Evento do Clique
btnBuscar.addEventListener("click", () => {
  const usuario = inputUsuario.value.trim();
  if (usuario !== "") {
    buscarUsuario(usuario);
  } else if (usuario === "") {
    // Se não existir, avisamos o erro
    lookForUser.style.display = "block";
    userNotFound.style.display = "none";
    cartao.style.display = "none";
  } else {
    userNotFound.style.display = "block";
    lookForUser.style.display = "none";
    cartao.style.display = "none";
  }
});

// Atalho do "Enter" para facilitar a vida
inputUsuario.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    buscarUsuario(inputUsuario.value.trim());
  }
});
