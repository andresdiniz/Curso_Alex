// Variaveis em JS.
// André Soares Diniz.

/*
Number - Inteiro / ponto flutuante
String - Para seguencia de caracteres
Boolean - Para valores logicos, verdadeiro ou falso
Undefined - Para variáveis que não doram declaradas, variaeis que nao foram declaradas, variaveis que foram declaradas e 
Null - Para valores nulos 
Object - Para coleções de valores
Symbol - Para valores unicos que não podem ser duplicados.


FUNÇOES NATIVAS DO JS

push() - Acrescenta valor ao ARRAY na ultima posição
pop() - Remove valor do Array na ultima posição do array
concat() - Concatena arrays
parseInt() - Transforma uma string numerica em numero inteiro
parseFloat() - Transforma uma string em um valor com ponto flutuante
.replace(",",".") - Parametro 1 - Item a ser substituido. parametro 2 - Item novo.

*/

let sobrenome = "Diniz" // String
let numeroInteiro = 1; // Inteiro
let numeros = 1.2; // float
let numeroString = "2,6"; // String

console.log(numeroString);

numeroString = numeroString.replace(",",".");

let arr = ["Alex",1,"1",[], sobrenome]; //Array

let numeroInt = parseInt(numeroString);
console.log(numeroString);

arr.push(numeros) //Acrescenta valor ao ARRAY na ultima posição
console.log(arr);
arr.pop() //Remove valor do Array na ultima posição do array
console.log(arr);

let array2 = ["exemplo", 5,33];

let array3 = arr.concat(array2) // Concatena arrays

console.log(array3);




function exemplo(){
    let obj = {
        nome: "Alex",
        sobrenome: "Barreto",
        numero: 2
    };
    let sobrenome = "Soares"; // Variavel somente para a seção de execução (função)
    const endereco = "Av. Eugenio Feio, 14"; //É um constante limitado dentro de uma execução (não pode ser alterado)
    var nome =  "Andre"; //Variavel para todo o documento (global)

    console.log("Nome completo: " + nome +" "+ sobrenome + " Endereço: " + endereco )
    console.log(obj);// Imprime todo o objeto
    console.log(arr[0]); //Inprime um obeto especifico do array
    console.log(obj.sobrenome); //Imprime um valor do Objeto (gera uma variavel)
}
