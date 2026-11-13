
//console.log(FloorBallTeam);

{
let FootBallTeam = "Liverpool";
const BasketBallTeam = "Lakers";
var FloorBallTeam = "IBF Falun";

//console.log(FootBallTeam, BasketBallTeam, FloorBallTeam);


}

//console.log(FloorBallTeam);
//console.log(FootBallTeam);
//console.log(BasketBallTeam);

/* Uppgift 2 
1. 
var kan användas även utanför blocket, inom samma funktion. Om jag skriver ut
variabeln innan den får ett värde blir resultatet undefined.
let och const kan bara användas inom blocket där de skapades.
2.
Om man använder console.log innan blocket ger var "undifined" och för let och const blir det error. 
Använder man cosole.log i blcoket funger det för alla tre.
Använder man efter fungerar det bara för var och ger error för let och const.
*/

//const add = (num1, num2) => num1 + num2;
//console.log(add(5, 10));

/* Uppgift 3
1.
Om man skulle använda let istället för const skulle funktioner fungera på samma sätt men värdenra på add skulle kunna ändras senare i koden.
2.
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));
3.
return gör att funktioner skickar tillbaka ett vörde som kan användas senare i koden.
*/

const num1 = 0;
let arg1;
let sum = false;

function add(num1, num2) {

   
console.log(num1 == 0);
console.log(num2 === '0');
console.log(num2 === 0);
console.log(num1 == NaN);
console.log(num1 ? "truthy" : "falsy");

if (
  !(num1 === null || num1 === undefined) &&
  !(num2 === null || num2 === undefined) &&
  typeof num1 === "number" && typeof num2 === "number"
) 

{
  return num1 + num2;
} else {
  console.log("Felaktig input");
}
}

console.log(add(27,53));
console.log(num1);
console.log(sum);

/* Uppgift 4
1.
I koden jag har gjot väljer ternary mellan truthy och falsy beroende på värdet i num1.
Det är en kortare version av en if sats.
En if sats kan ha flera olika villkor och kan vara mer komplex än en ternary vilet är bra när man skriver mer komplexa funktioner med flera olika villkor.
2.
== jämför värdena och kan säga att två värden är lika även om det har olika datatyp.
=== kräver att värdena är lika och har samma datatyp.
3.
Jag jämför num1 och num2 med null.
! vänder reusltatet av jömförelsen så att kontrollen bara blir godkänd om ingen av parametranda är null.*/

/*
Uppgift 5
1. 
En parameter är ett namn i funktionens paranteser och i min kod är num1 ett exemepl.
Ett arguemnt är värdet som skickas in när funktionen anropas, till exepel 5 i add(5,2).
En variabel är en behållare som innehåller ett värde. Till exemepl num1=0 
2.
0 eftersom att jag tilldelat num1 värdet 0 innan funktonen anropas.
3.
När jag kör add(27, 53) får jag detta i konsolen:
false
false
false
false
truthy
80
0
false
När add(27, 53) anropas får num1 värdet 27 och num2 värdet 53.
Första jämförelsen blir false eftersom 27 inte är 0.
De två följande blir false eftersom 53 varken är texten "0" eller talet 0.
Jämförelsen med NaN blir också false.

Ternary-operatorn kontrollerar num1. Eftersom 27 räknas som truthy skriver den ut "truthy".
Båda parametrarna är tal och varken null eller undefined, så if-satsen godkänner dem.
Funktionen returnerar summan 80.

Efteråt skriver koden ut 0 och false. Det är värdena i variablerna utanför funktionen.
*/