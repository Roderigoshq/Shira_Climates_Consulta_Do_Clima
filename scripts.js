function clickbutton() {
    let cidade = document.querySelector(".cidade").value;
    console.log(cidade);

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
    document.querySelector(".time-text").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".celsius-temperature").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".climate").src = 'https://openweathermap.org/img/wn/' + dados.weather[0].icon + ".png"
    document.querySelector(".humidity").innerHTML = "umidade: " + Math.floor(dados.main.humidity) + "%"

}