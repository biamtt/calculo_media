function verifica(){
  if (document.getElementById("primeiroBimestre") == null){
    alert("Informe sua média no 1º bimestre");
  }
}

function verifica2(){
  if (document.getElementById("segundoBimestre") != (0 >= 10)){
    alert("Informe sua média no 2º bimestre");
  }
}

function calcularMedia(){


  let nota1 = document.getElementById("primeiroBimestre");
  let primeiroBimestre = nota1.value;
  let valorNota1 = parseFloat(primeiroBimestre);

  let nota2 = document.getElementById("segundoBimestre");
  let segundoBimestre = nota2.value ;
  let valorNota2 = parseFloat(segundoBimestre);

  let nota3 = document.getElementById("terceiroBimestre");
  let terceiroBimestre = nota3.value;
  let valorNota3 = parseFloat(terceiroBimestre);

  let nota4 = document.getElementById("quartoBimestre");
  let quartoBimestre = nota4.value;
  let valorNota4 = parseFloat(quartoBimestre);

  media = (valorNota1 + valorNota2 + valorNota3 + valorNota4) / 4;

  let elementoMediaCalculada = document.getElementById("mediaCalculada");
  let vlrMedia = "Sua média anual fechou em " + media + "!";
  elementoMediaCalculada.innerHTML = vlrMedia;

  if (media < 7){
    let elementoReprovado = document.getElementById("reprovado");
    elementoReprovado.innerHTML = "Você foi reprovado.. passe as férias estudando!!";
  } else if
  (media >= 7){
    let elementoAprovado = document.getElementById("aprovado");
    elementoAprovado.innerHTML = "Parabéns, você foi aprovado.. Boas férias!!";
  }
}