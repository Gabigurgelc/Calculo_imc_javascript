//IMC DA PESSOA

//EU estou usando Node.js, mas você pode tentar colocar um arquivo html e abrir no console.


/*Neste código abaixo, cometi um pequeno equívoco ao depender excessivamente do uso do "if", 
mas essa foi uma falha compreensível, dado meu status de iniciante. No segundo código, 
demonstrei melhorias após a reflexão sobre a abordagem utilizada.


var altura = 1.70;
var peso = 80.0;

var altura_2= altura * altura;
var calculo = peso / altura_2;

if (calculo =>  40,0){
    console.log("Você está obeso ", calculo);
} if(calculo <= 29,9){
    console.log("Você está sobrepeso ", calculo);
}
if(calculo <= 24,9){
    console.log("Você está normal");
} */



var altura = 1.70;
var peso = 100.0;

var altura_2 = altura * altura;
var calculo = peso / altura_2;

if (calculo <= 40.0) {
    console.log("Você está obeso! ", calculo);
} else if (calculo <= 29.9) {
    console.log("Você está sobrepeso! ", calculo);
} else if (calculo <= 24.9) {
    console.log("Você está normal! ");
}


/* Mas se a sequência então é IF, Else IF E Else. Se eu tiver 
mais opções a acrescentar, oque devo fazer? a resposta é básica:

No JavaScript, a estrutura básica de um bloco condicional é composta por if, 
seguido opcionalmente por else if e, finalmente, opcionalmente por else.

Isso significa que o bloco de código dentro do primeiro if será executado se a condicao1 for verdadeira.
Se a condicao1 não for verdadeira, o bloco dentro do else if (condicao2) será executado se condicao2 for verdadeira. 
Se nem condicao1 nem condicao2 forem verdadeiras, o bloco dentro do else será executado.

Você pode ter quantos else if quiser, criando uma cadeia de condições a serem testadas em ordem. 
O bloco de código dentro do primeiro bloco verdadeiro será executado e o restante será ignorado. 
Se nenhuma condição for verdadeira, o bloco dentro do else (se presente) será executado.

*/