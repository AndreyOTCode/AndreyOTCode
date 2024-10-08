function sumar(){
    var primerNumero = document.getElementById('primerVisor');
    var num1 = primerNumero.value;
    var primer = Number(num1);

    var segundoNumero =document.getElementById('segundoVisor');
    var num2 = segundoNumero.value;
    var segundo = Number(num2);

    var suma = primer + segundo;
    
    var total = document.getElementById('resultado');
    total.value =  suma;
    
}
function resta(){
    var primerNumero = document.getElementById('primerVisor');
    var num1 = primerNumero.value;
    var primer = Number(num1);

    var segundoNumero =document.getElementById('segundoVisor');
    var num2 = segundoNumero.value;
    var segundo = Number(num2);

    var resta = primer - segundo;
    
    var total = document.getElementById('resultado');
    total.value =  resta;
    
}
function multiplicar(){
    var primerNumero = document.getElementById('primerVisor');
    var num1 = primerNumero.value;
    var primer = Number(num1);

    var segundoNumero =document.getElementById('segundoVisor');
    var num2 = segundoNumero.value;
    var segundo = Number(num2);

    var multiplo = primer * segundo;
    
    var total = document.getElementById('resultado');
    total.value =  multiplo;
    
}
function division(){
    var primerNumero = document.getElementById('primerVisor');
    var num1 = primerNumero.value;
    var primer = Number(num1);

    var segundoNumero =document.getElementById('segundoVisor');
    var num2 = segundoNumero.value;
    var segundo = Number(num2);

    var division = primer / segundo;
    
    var total = document.getElementById('resultado');
    total.value =  division;
    
}
function potencia(){
    var primerNumero = document.getElementById('primerVisor');
    var num1 = primerNumero.value;
    var primer = Number(num1);

    var segundoNumero =document.getElementById('segundoVisor');
    var num2 = segundoNumero.value;
    var segundo = Number(num2);

    var potencia = Math.pow(primer,segundo);
    
    var total = document.getElementById('resultado');
    total.value =  potencia;
    
}
function raiz(){
     var segundoNumero =document.getElementById('segundoVisor');
    var num2 = segundoNumero.value;
    var segundo = Number(num2);

    var raiz = Math.sqrt(segundo);
    
    var total = document.getElementById('resultado');
    total.value =  raiz;
    
}
function valorAbsoluto(){
    var segundoNumero =document.getElementById('segundoVisor');
   var num2 = segundoNumero.value;
   var segundo = Number(num2);

   var valor = Math.abs(segundo);
   
   var total = document.getElementById('resultado');
   total.value =  valor;
   
}
function aleatorio(){
    var primerNumero = document.getElementById('primerVisor');
    var num1 = primerNumero.value;
    var primer = Number(num1);

    var segundoNumero =document.getElementById('segundoVisor');
    var num2 = segundoNumero.value;
    var segundo = Number(num2);

    var potencia = Math.pow(primer,segundo);
    
    var total = document.getElementById('resultado');
    total.value =  potencia;
    
}
