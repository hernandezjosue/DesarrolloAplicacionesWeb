


const input = document.getElementById("userNameId")
const userName = prompt("deme su nombre","nombre")
let i=0;
document.getElementById("user").innerHTML = userName;
 let option = prompt("Menu 1:potencia 2:perimetro3:Area 4:Fibonacci 5:palindromo   ")
 let optionMenu = Number(option)

if( optionMenu == 1){

   document.getElementById("operation").innerHTML = "potencia";
   document.getElementById("result").innerHTML = Math.pow(2,7);
}
if( optionMenu == 2){
   document.getElementById("operation").innerHTML = "Permetro";
   Base=prompt('Ingrese el valor de la Base','');
   Altura=prompt('Ingrese el valor de la Altura','');
   Perimetro=(2*Altura)+(2*Base);
   document.getElementById("result").innerHTML = Perimetro;

   
}
if( optionMenu == 3){

   document.getElementById("operation").innerHTML = "Area";
            Base=prompt('Ingrese el valor de la Base','');
            Altura=prompt('Ingrese el valor de la Altura','');
            Area=Base*Altura;
             document.getElementById("result").innerHTML = Area;
}
if( optionMenu == 4){

   document.getElementById("operation").innerHTML = "Fibonacci";
                  number= Number(prompt('Ingrese el valor ',''));
                  let n1 = 0, n2 = 1, nextTerm=0;
                  while (nextTerm <= number) {
                  n1 = n2;
                  n2 = nextTerm;
                  nextTerm = n1 + n2;
                  }               
                  document.getElementById("result").innerHTML =nextTerm;
                  
}
if( optionMenu == 5){

   document.getElementById("operation").innerHTML = "palindromo";
   unaPalabra=prompt('Ingrese la palabra','')
   const strReversed = unaPalabra.split("").reverse().join("")
   strReversed === unaPalabra ? document.getElementById("result").innerHTML = "es palindromo" :document.getElementById("result").innerHTML = "no es palindromo"
}
let option2 = prompt("Menu 1:potencia 2:perimetro3:Area 4:Fibonacci 5:palindromo  ")
let optionMenu2 = Number(option2)

 if( optionMenu2 == 1){

   document.getElementById("operation2").innerHTML = "potencia";
   document.getElementById("result2").innerHTML = Math.pow(2,7);
}
if( optionMenu2 == 2){
   document.getElementById("operation2").innerHTML = "Permetro";
   Base=prompt('Ingrese el valor de la Base','');
   Altura=prompt('Ingrese el valor de la Altura','');
   Perimetro=(2*Altura)+(2*Base);
   document.getElementById("result2").innerHTML = Perimetro;

   
}
if( optionMenu2 == 3){

   document.getElementById("operation2").innerHTML = "Area";
            Base=prompt('Ingrese el valor de la Base','');
            Altura=prompt('Ingrese el valor de la Altura','');
            Area=Base*Altura;
             document.getElementById("result2").innerHTML = Area;
}
if( optionMenu2 == 4){

   document.getElementById("operation2").innerHTML = "Fibonacci";
                  number= Number(prompt('Ingrese el valor ',''));
                  let n1 = 0, n2 = 1, nextTerm=0;
                  while (nextTerm <= number) {
                  n1 = n2;
                  n2 = nextTerm;
                  nextTerm = n1 + n2;
                  }
                                           
                                        
                  document.getElementById("result2").innerHTML =nextTerm;
                    
}
if( optionMenu2 == 5){

   document.getElementById("operation2").innerHTML = "palindromo";
   unaPalabra=prompt('Ingrese la palabra','')
   const strReversed = unaPalabra.split("").reverse().join("")
   strReversed === unaPalabra ? document.getElementById("result2").innerHTML = "es palindromo" :document.getElementById("result").innerHTML = "no es palindromo"
}
let option3 = prompt("Menu 1:potencia 2:perimetro3:Area 4:Fibonacci 5:palindromo   ")
let optionMenu3 = Number(option3)

 if( optionMenu3 == 1){

   document.getElementById("operation3").innerHTML = "potencia";
   document.getElementById("result3").innerHTML = Math.pow(2,7);
}
if( optionMenu3 == 2){
   document.getElementById("operation3").innerHTML = "Permetro";
   Base=prompt('Ingrese el valor de la Base','');
   Altura=prompt('Ingrese el valor de la Altura','');
   Perimetro=(2*Altura)+(2*Base);
   document.getElementById("result3").innerHTML = Perimetro;

   
}
if( optionMenu3 == 3){

   document.getElementById("operation3").innerHTML = "Area";
            Base=prompt('Ingrese el valor de la Base','');
            Altura=prompt('Ingrese el valor de la Altura','');
            Area=Base*Altura;
             document.getElementById("result3").innerHTML = Area;
}
if( optionMenu3 == 4){

   document.getElementById("operation3").innerHTML = "Fibonacci";
                  number= Number(prompt('Ingrese el valor ',''));
                  let n1 = 0, n2 = 1, nextTerm=0;
                  while (nextTerm <= number) {
                  n1 = n2;
                  n2 = nextTerm;
                  nextTerm = n1 + n2;
                  }
                                           
                  document.getElementById("result3").innerHTML =nextTerm ;
                    
}
if( optionMenu3 == 5){

   document.getElementById("operation3").innerHTML = "palindromo";
   unaPalabra=prompt('Ingrese la palabra','')
   const strReversed = unaPalabra.split("").reverse().join("")
   strReversed === unaPalabra ? document.getElementById("result3").innerHTML = "es palindromo" :document.getElementById("result").innerHTML = "no es palindromo"
}

