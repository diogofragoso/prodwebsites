$("#btn-1").click(function () {
  $("#div-texto").html("<h1>Mudei o texto padrão</h1>");
  $("#div-texto").append("<strong>Isso aqui é um append</strong>");
});

$("#btn-2").click(function () {
  $("#div-texto").css("background-color", "#0f0");
  $("#div-texto").css("border-radius", "25px");

});


$("#btn-3").click(function () {
  $("#div-texto").fadeOut(1000, function () {
  });
});

$("#btn-4").click(function () {
  $("#div-texto").fadeIn(1000, function () {
  });
});

$("#btn-5").click(function () {
  $("#div-texto").animate({
    // opacity: 0.80,
    left: "+=50",
    height: "toggle"
  }, 1000, function () {
    // Animation complete.
  });
});


$("p").click(function () {
  $("#div-texto").css("background-color", "#0f0");

});

$(document).ready(function () {
  $("#altura").mask("9.99");

});
//cep
$(document).ready(function () {
  $("#cep").mask("12456-123");

});
//cpf
$(document).ready(function () {
  $("cpf").mask("123.456.789-58");

});
//rg
$(document).ready(function () {
  $("cpf").mask("12.654.987-X");

});









function mudarTexto() {

}


function imc() {
  // alert("Ops ... campos vazios");
  let peso = document.getElementById('peso').value;
  let altura = document.getElementById('altura').value;
  let calc = peso / (altura * altura);
  document.getElementById('div-imc').innerHTML = calc.toFixed(2);
  document.getElementById("img-avatar").style.display = "block";
  document.getElementById("img-avatar").src = "img/bob.png";

}


// DESAFIO
// 1 - Impedir o cálculo  de ser executado se os campos de input estiverem vazios
// 2 - Vericar a tabela de imc e exibir para o usuário qual é a situação

// 3 - inserir imagens