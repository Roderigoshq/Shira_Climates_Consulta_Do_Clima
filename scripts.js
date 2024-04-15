function clickbutton() {
    let cidade = document.querySelector(".cidade").value;

    buscarCidade(cidade);
}

async function buscarCidade(cidade){
    // let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=londres&appid=cebcd482eda57fa9a6714c1c2ba91885}").then( resposta => resposta.json());
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q="
     + cidade + 
    "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then(resposta => resposta.json());


    console.log(dados)
    colocarNaTela(dados);
}

function colocarNaTela(dados) {
    document.querySelector(".time-text").innerHTML = dados.name;
    document.querySelector(".celsius-temperature").innerHTML = Math.floor(dados.main.temp) + "°C";
    climaicon = document.querySelector(".climate");
    climaicon.src = "/images/" + dados.weather[0].icon + ".png";
    climaicon.style.display = "block";
    document.querySelector(".humidity").innerHTML = Math.floor(dados.main.humidity) + "%";

    if (Math.floor(dados.main.temp) >= 20) {
        let rectangle = document.querySelector(".rectangle");
        rectangle.style.backgroundColor = "#FFA438";
      }
    else{
        let rectangle = document.querySelector(".rectangle");
        rectangle.style.backgroundColor = "#1070FF";
    }

}

function pressEnter(event) {
    if (event.keyCode === 13) {
      document.querySelector(".search").click();
      document.querySelector(".cidade").value = '';
    }
  }
  
  document.querySelector(".cidade").addEventListener("keydown", pressEnter);
  document.querySelector(".cidade").addEventListener("keydown", pressEnter);
