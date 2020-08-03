// Um programa para calcular o IMC e nível de obesidade de uma pessoa.

const nome = 'Viton'
const peso = 100;
const altura = 1.70;

 const imc = peso / (altura * altura);
 
 if (imc >= 30) {
   console.log(`${nome}, você está acima do peso`);
 }  else {
   console.log(`${nome}, você não está acima do peso`)
 }