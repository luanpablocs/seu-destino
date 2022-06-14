 const elementoResposta = document.querySelector("#resposta")
 const inputPergunta = document.querySelector("#inputPergunta")
 const buttonPerguntar = document.querySelector('#buttonPerguntar')

 const respostas = [
  "Eu não diria que sim, mas também não diria que não...",
  "Certeza!",
  "Vamos ver o que o papai Jeff acha disso",
  "Sabe de nada inocente",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Não sei, só sei que foi assim",
  "Não sou a Alexa, pergunte a ela",
  "Eu não preciso disso, meu marido tem dois empregos",
  "Pergunte novamente mais tarde.",
  "Tudo depende da flexibilidade do rabo da largatixa",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Concordamos em discordar",
  "Melhor não te dizer agora.",
  "Vou consultar no Google e te respondo depois",
  "A meu ver, sim.",
  "Minhas consultas dizem que não",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Me inclua fora dessa",
  "Não é possível prever agora.",
  "Cara, ela ta tão na sua...",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "As vezes é nesserário continuar com isso",
  "Sim.",
  "Aumento de no mínimo 30%",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  "É sério isso?"
 ]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 4000)
}