let meinString ="hier2"
const meineZahl=5


let meinBullian =true
//Werte werden durch Kommatas getrennt
var meinArray =[1,2,3,4,5,meinString,meineZahl,meinBullian]
console.log("hier",meinArray[5])
console.log(meinArray.length)
// Funktion definieren

function meineFunktion(Parameter){
    console.log(meinArray) 
    console.log(Parameter)
}

// selbstausführender Funktion

//()=>console.log("meinArray") 
    

// Funktion ausführen
console.log ("helloWorld") 

meineFunktion("helloWolrd")
meineFunktion ("Matthias")
// Array methods: 
// .find() eine Funktion auf: meinArray.find((indivName)=>typeof indivname=Number)
// .filter() nimmt als Argument eine Funktion auf: meinArray.filter()
// .foreach() nimmt als Argument eine Funktion und führt diese dann aus: 
// .pop() entfert den letzten Wert
// .push() fügt einen weiteren Wert hinzu
// .slice() schneidet einen Wert aus
// .splice() kopiertt einen Wert
meinArray.forEach(element=>console.log(element))

//key ist ein definierter Begriff, und als letztes kein Komma mehr. Als Beispiel: Nehmen wir das Auto, Der Autotyp ist der Key und die Mercedes ist die Value.
let meinObjekt = {
    key:"value",
    key2:"value2",
    key3:"value3"
}
//Bei Zahlen und Booleans werden keien Anführungszeichen verwendet, außerdem kann man bei Objekten const immernoch verändern
let Audi = {
    Marke:"Audi",
    Farbe:"Rot",
    Modell:"R8",
    PS:450,
    Tortenschnitte: false
}

console.log(Audi["Farbe"])
console.log(Audi.Farbe)

Audi.Farbe="Jorisschwarz"

console.log(Audi) 

Audi.konkurenz="Mercdes" 
console.log(Audi)
Audi="VW"
console.log(Audi)

let Zufallszahlen=Math.random ()
console.log (Zufallszahlen)

// eine schachtelung, man erhält eine Zufallszahl zwischen 0 und 9
console.log(Math.ceil(Math.random() * 6))


meinArray=[0,0,0,0,0,0]


for(var i=0;i<10000;i++){
    let Glückszahl= (Math.ceil(Math.random() * 6))
    console.log(i)
    console.log(Glückszahl)
    meinArray[Glückszahl-1]++
}

meinArray.forEach(element => {
    element/i 
});
//NaN heißt not a Number
console.log(meinArray);

const ProzentualeHäufigkeit=meinArray.map(element => element/i)
console.log(ProzentualeHäufigkeit);





