// quais são as variaveis ?
// quais são os dados de entrada ?
// quais os dados de saída ?

// primeiro vou precisar de um banco de dados 
// segundo vou precisar pegar a perguntar feita e enviar uma resposta 
// referente a pergunta 
// terceiro vou precisa que sejá mostrada na tela essa resposta que 
// pegar no banco de dados .

const elementoResposta = document.querySelector("#resposta")
const inputPerguntar = document.querySelector("#inputPerguntar")
const butaoPerguntar = document.querySelector("#butaoPerguntar")

const respostas = [
  " Certamente!!",
  " Não tenho tanta certeza.",
  " É decididamente assim.",
  " Não conte com isso.",
  " Sem dúvidas!!",
  " Pergunte novamente mais tarde.",
  " Sim, definitivamente!",
  " minha resposta é não.",
  " Você pode contar com isso.",
  " Melhor não te dizer agora.",
  " A meu ver, sim.",
  " Minhas fontes dizem não.",
  " Provavelmente.",
  " Não é possível prever agora.",
  " Perspective boa.",
  " As perspectivas não são tão boas.",
  " sim.",
  " Concentre-se e pergunte novamente.",
  " Sinais apontam que sim."
]

// fazer pergunta
function fazerPerguntar(){

  if(inputPerguntar.value == ""){
    alert(" facar uma pergunta...")
    return
  }

  butaoPerguntar.setAttribute("disabled",true)
  const pergunta = "<div>" + inputPerguntar.value +"</div>"

  const totalRespostas = respostas.length
  const numeroAleatoria = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatoria]

  // sumir a resposta depois de um tempo 
    setTimeout(function(){
      elementoResposta.style.opacity = 0.5;
      butaoPerguntar.removeAttribute("disabled")
    },3000)

    inputPerguntar.value ="";

}