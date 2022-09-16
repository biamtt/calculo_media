function calcularMedia(){
  let nota1 = document.getElementById("primeiroBimestre");
  let primeiroBimestre = nota1.value;
  let valorNota1 = parseFloat(primeiroBimestre);
  console.log(primeiroBimestre)

  let nota2 = document.getElementById("segundoBimestre");
  let segundoBimestre = nota2.value ;
  let valorNota2 = parseFloat(segundoBimestre);
  console.log(segundoBimestre)

  let nota3 = document.getElementById("terceiroBimestre");
  let terceiroBimestre = nota3.value;
  let valorNota3 = parseFloat(terceiroBimestre);
  console.log(terceiroBimestre)

  let nota4 = document.getElementById("quartoBimestre");
  let quartoBimestre = nota4.value;
  let valorNota4 = parseFloat(quartoBimestre);
  console.log(quartoBimestre)

  media = (valorNota1 + valorNota2 + valorNota3 + valorNota4) / 4;
  console.log(media)
}