var Num1 = parseInt(prompt("ingrese numero 1"));
var Num2 = parseInt(prompt("ingrese numero 2"));
var Num3 = parseInt(prompt("ingrese numero 3"));

if(Num1 >= Num2){
    M=("el numero mayor es: "+Num1);
}else{
    M=("el numero mayor es: "+Num2);
}
if(M<Num3){
    numero = M;
}else{
    numero = Num3;
}

console.log("el menor es: "+numero);