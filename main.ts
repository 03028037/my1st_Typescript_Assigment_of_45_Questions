/*// Question no 01
console.log("hello world");




//Question no o2
let personName= "Nazeer";
let messaage = "Would you like to have a tea?";

console.log(personName+". "+messaage);










//Question no 03

let personName02:string = "ali";

console.log(personName02.toLocaleLowerCase())
console.log(personName02.toUpperCase())

console.log(personName02.replace(/\b\w/g, c=> c.toUpperCase()) ); 










// Question No = 04


let Quotation:string = "Allama Iqbal once said, \"Words, without power, is mere philosophy\"" 
console.log(Quotation);
















//  Question No 05
let famous_person:string =  "Allama Iqbal";
let messaage:string = " \"Words, without power, is mere philosophy\"" 

console.log(famous_person+" Once said,"+messaage);







//  Question No 06

let personName:string = " \t Nazeer \n";
console.log(personName);

let stripped_name = personName.trim();
console.log(stripped_name);




//  Question No 07   

console.log(5+3);
console.log(2*4);
console.log(16/2);
console.log(11-3):





//     Question No 08  

console.log(5+3);
console.log(2*4);
console.log(16/2);
console.log(11-3): 

  


//      Question No 09

let fav_number:number = 3;
console.log(`My favourite number is ${fav_number}`); 






//      Question No 10

//Question NO 08 and 09
// author : Nazeer Ahmed 
// Date :  2024-02-17T13:48:18.123Z         
let date = new Date();
console.log(date);




//  Question  No 11

let names =["Noman","Ibne Abdullah","Uzair","Jamal"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);



//          Question No 12
 

let names = ["Noman","Ibne Abdullah","Uzair","Jamal"];
console.log("Greetings  " +names[0]);
console.log("Greetings  "+names[1]);
console.log("Greetings  "+names[2]);
console.log("Greetings  "+names[3]);


//  Question No 13


let myOwnAry =["Car","Motor cycle ","Jeep"];

myOwnAry.map((vehicals)=> console.log("I would like to own a "+vehicals));



//      Question No 14  


let guests = ["khan","nazeer","alamgir"];
guests.map((items)=> console.log("Dear "+items+" you are invited to dinnar"));



//       Question No 15

let guests = ["khan","nazeer","alamgir"];
guests.map((items)=> console.log("Dear "+items+" you are invited to dinnar"));



let notcomingGuest:string = "nazeer";
console.log(notcomingGuest+" is not coming")
let newguest:string = "wazeer";
console.log(newguest +" is  coming")

guests[guests.indexOf(notcomingGuest)]= newguest  ;
guests.map((items)=> console.log("Dear "+items+" you are invited to dinnar"));






 
//      Question No 16

let guests = ["khan","nazeer","alamgir"];
guests.map((items)=> console.log("Dear "+items+" you are invited to dinnar"));



let notcomingGuest:string = "nazeer";
console.log(notcomingGuest+" is not coming")
let newguest:string = "wazeer";
console.log(newguest +" is  coming")

guests[guests.indexOf(notcomingGuest)]= newguest  ;
guests.map((items)=> console.log("Dear "+items+" you are invited to dinnar"));

  Question 16 begins

let someMoreGuests  = ["waqar","shakeel","ubed"];

let informed = " I found a bigger dinner table , So I am inviting somemore Guests";

guests.map((items)=> console.log(items + informed  ));

guests.unshift(someMoreGuests[0]);

console.log(guests)

guests.splice(2,0,someMoreGuests[1]);
console.log(guests)

guests.push(someMoreGuests[2]);
console.log;

guests.map((items)=> console.log("Dear "+items+" you are invited to dinnar"));






//     Question No 17

let guests = ["khan","nazeer","alamgir"];
guests.map((items)=> console.log("Dear "+items+" you are invited to dinnar"));



let notcomingGuest:string = "nazeer";
console.log(notcomingGuest+" is not coming")
let newguest:string = "wazeer";
console.log(newguest +" is  coming")

guests[guests.indexOf(notcomingGuest)]= newguest  ;
guests.map((items)=> console.log("Dear "+items+" you are invited to dinnar"));

  Question 17 begins

let someMoreGuests  = ["waqar","shakeel","ubed"];

let informed = " I found a bigger dinner table , So I am inviting somemore Guests";

guests.map((items)=> console.log(items + informed  ));

guests.unshift(someMoreGuests[0]);

console.log(guests)

guests.splice(2,0,someMoreGuests[1]);
console.log(guests)

guests.push(someMoreGuests[2]);
console.log;

guests.map((items)=> console.log("Dear "+items+" you are invited to dinnar"));




//  Question 17 begins

guests.map((items)=> console.log("Dear "+items+" I can invite only two people for dinner"));

console.log(guests.pop()+" I'am sorry you can’t invite them to dinner");
console.log(guests.pop()+" I'am sorry you can’t invite them to dinner");
console.log(guests.pop()+" I'am sorry you can’t invite them to dinner");
console.log(guests.pop()+" I'am sorry you can’t invite them to dinner");


guests.map((items)=> console.log("Dear "+items+" you’re still invited"));


guests.pop();
guests.pop();


console.log("the guestsList is " , guests );




// Question No 18 

let places = ["naran","kagan","jamshoro","nawabshah","hyderabad"];
console.log(places)

console.log([...places].sort());
console.log(places);

console.log(places.reverse());
console.log(places.reverse());
console.log(places.sort());
console.log(places.reverse()); 




//Question No 19


console.log(guests)




// Question No 20

let countries =["usa","china","southAfrica","Bammgladesh","japan"];
console.log("I don't like  " +countries   +" countries")

///     Question No 21 

const person ={
    name : "nazeer",
    age : 20,
    currentResidency : "Jamshoro"
};
console.log(person.name)


// Question 22



let person =["nazeer","khaan","Jamshoro"]

console.log(person[6])

person.push("khaaaaan","saaaaraa","haajii","allu");

console.log(person[6])



// Question No 23


let bike = 'honda';
console.log("Is bike == 'honda'? I predict True.")
console.log(bike == 'honda')

let cycle = 'pico';
console.log("Is cycle == 'pico'? I predict True.")
console.log(cycle == 'pico')

let road = 'black';
console.log("Is road == 'black'? I predict True.")
console.log(road == 'black')

let person = 'naz';
console.log("Is person == 'naz'? I predict True.")
console.log(person == 'naz')

let animal = 'bird';
console.log("Is animal == 'bird'? I predict True.")
console.log(animal == 'bird')

let tire = "white";
console.log("is tire == black ? I Predict true");
console.log(tire == "black")

let sim = "white";
console.log("is sim == black ? I Predict true");
console.log(sim == "black")

let phone = "white";
console.log("is phone == black ? I Predict true");
console.log(phone == "black")

let mobile = "white";
console.log("is mobile == black ? I Predict true");
console.log(mobile == "black")

let wire = "white";
console.log("is wire == black ? I Predict true");
console.log(wire == "black")



//      Question 24  


let name_1 = "Nazeer";
if (name_1 === "Nazeer"){
     console.log("equality match");
}else{
  console.log("inequality")
}

if (name_1 !== "Nazeer"){
  console.log("equality match");
}else{
console.log("inequality")
}

let name_2 = "nazeer";
if (name_1 === name_2){
  console.log("equality match");
}else{
console.log("inequality")
}

if (name_1 !== name_2){
console.log("equality match");
}else{
console.log("inequality")
}



let name_1Age = 17;
let name_2Age = 20;
if (name_1Age > 18){
  console.log("you are 18+ now")
}else{
  console.log("you are under 18");
}

if (name_2Age > 18){
  console.log("you are 18+ now")
}else{
  console.log("you are under 18");
}

if (name_1Age >= 18){
  console.log("you are 18+ now")
}else{
  console.log("you are under 18");
}
if (name_2Age >= 18){
  console.log("you are 18+ now")
}else{
  console.log("you are under 18");
}

if (name_1Age < 18){
  console.log("you are under 18 now")
}else{
  console.log("you are  18+");
}
if (name_2Age < 18){
  console.log("you are under 18 now")
}else{
  console.log("you are  18+");
}


if (name_1Age <= 18){
  console.log("you are under 18 now")
}else{
  console.log("you are  18+");
}
if (name_2Age <= 18){
  console.log("you are under 18 now")
}else{
  console.log("you are  18+");
}





if (name_1Age <= 18 && name_2Age >= 18){
  console.log("you are both men")
}else{
  console.log("yu are not men")
}

if (name_1Age >= 18 && name_2Age >= 18){
  console.log("you are both men")
}else{
  console.log("yu are not men")
}



if (name_1Age <= 18 || name_2Age >= 18){
  console.log("you are both men")
}else{
  console.log("yu are not men")
}

if (name_1Age >= 18 || name_2Age >= 18){
  console.log("you are both men")
}else{
  console.log("yu are not men")
}

let name_1_siblings = ["khan","hadi","malik"];
let name_2_siblings = ["haji","shaman","shidi"];

if(name_1_siblings.length = name_2_siblings.length ){
  console.log("you both have same number of siblings")
} else{
    console.log("you both have not same number of siblings")
  }

  if(name_1_siblings.length = 4 ){
    console.log("4 is  arry's length  ")
  } else{
    console.log("4 is not arry's length  ")
    }




//                 Question No 25



let alien_color ="green";

if (alien_color === "green"){
  console.log(" the player just earned 5 points")
}else{
  console.log("no output")
}
if (alien_color === "red"){
  console.log(" the player just earned 5 points")
}else{
  console.log("no output")
}




//     Question No 26 



let alien_color2 ="green";

if (alien_color2 === "green"){
  console.log("the player just earned 5 points for shooting the alien.")
}else{
  console.log("the player just earned 10 points")
}


if (alien_color2 !== "green"){
  console.log("the player just earned 5 points for shooting the alien.")
}else{
  console.log("the player just earned 10 points")
}








//    Question No 27

let alien_color3 = "green";
let alien_color4 = "red";
let alien_color5 = "yellow";

if(alien_color3 === "green"){
  console.log("the player earned 5 points.")
}else if (alien_color3 ==="red"){
  console.log("the player earned 15 points")
}else if (alien_color3 === "yellow" ){
  console.log("the player earned 10 points.")
}
else(
       console.log("game over hahaha")
)



if(alien_color4 === "green"){
  console.log("the player earned 5 points.")
}else if (alien_color4 === "red"){
  console.log("the player earned 15 points")
}else if (alien_color4 === "yellow" ){
  console.log("the player earned 10 points.")
}
else(
       console.log("game over hahaha")
)


if(alien_color5 === "green"){
  console.log("the player earned 5 points.")
}else if (alien_color5 === "red"){
  console.log("the player earned 15 points")
}else if (alien_color5 === "yellow" ){
  console.log("the player earned 10 points.")
}
else(
       console.log("game over hahaha")
)




//    Question No 28


let age = 2;

if (age < 2){
  console.log("the person is a baby.")
}else if ( age < 4){
  console.log("the person is a toddler")
}else if (age <13){
  console.log("the person is a kid")
}else if ( age <20){
  console.log('the person is a teenager')
}else if(age < 65 ){
  console.log("the person is an adult.")
}else{
  console.log("the person is old")
}







//  Question No 29 

let  fav_fruits = ["apple","orange","banana"];
if (fav_fruits.includes("apple")){
  console.log("You really like apple!")
}
if (fav_fruits.includes("orange")){
  console.log("You really like orange!")
}
if (fav_fruits.includes("banana")){
  console.log("You really like banana!")
}
if (fav_fruits.includes("graps")){
  console.log("You really like graps!")
}
if (fav_fruits.includes("pineapple")){
  console.log("You really like pineapple!")
}








//         Question No 30  


let username = ["noman","ibne","khan","nazeer","admin"]
for (let i = 0; i < username.length; i++ ){
  console.log("greetings " +username[i])
  if (username[i] === "admin"){
    console.log("Hello  "+ username[i] +", would you like to see a status report?")
  }else{
    console.log("hello " + username[i] +", thank you for logging in again.")
  
}
}






//       Question No 31


let username = ["noman","ibne","khan","nazeer","admin"]
for (let i = 0; i < username.length; i++ ){
  console.log("greetings " +username[i])
  if (username[i] === "admin"){
    console.log("Hello  "+ username[i] +", would you like to see a status report?")
  }else{
    console.log("hello " + username[i] +", thank you for logging in again.")
  
}
}


if (username.length = 0){
  console.log("We need to find some users!")
}



username = [];
console.log(username)
if (username.length === 0){
  console.log("We need to find some users!")
}





//   Question No 32

let current_users =["noman","waqa","kali","khan","abne"];
let new_users =["khan","waqar","noman","nazeer","murad"];

function check_user(currentusers:string[],newusers:string[]){
  let lowercase_current_users =current_users.map(user => user.toLocaleLowerCase());
  for(let newuser of new_users) {
    let lowercaseNewUser = newuser.toLocaleLowerCase();
    if(lowercase_current_users.includes(lowercaseNewUser)){
      console.log("Username  "+newuser+" is already taken")
    }else{
      console.log("Username "+newuser+ " is availible");
    }
  }
}

check_user(current_users,new_users)



//   Question 33

let ordinal_numbers = [4,5,6,7,8,12,33,54,67];
for (let i = 0; i < ordinal_numbers.length; i++) {
 
  console.log(ordinal_numbers[i]+"th")
}



//   Question No 34

let pizza =["fajita","tikka","creemy"];

for(let i = 0;pizza.length > i;i++){
  console.log(pizza[i]);
}


for(let i = 0;pizza.length > i;i++){
  console.log("I like  "+pizza[i]+" pizza");
}


console.log("I love pizza alot");





//          Question No 35


let animals = ["cat","dog","cow"];
for(let i = 0;animals.length > i;i++){
  console.log(animals[i])
}

for(let i = 0;animals.length > i;i++){
  console.log("A "+animals[i] +" would make a great pet")
}

console.log("A dog  would make a great pet")





//  Question 36

function make_shirts(size:string,text:string){
  console.log(size +" "+text)
}

make_shirts("medium","size of shirt is suitble teenager ");


//     Question  No 37



function make_shirts(size:string = "large",text:string = "I love TypeScript"){
console.log( size +" "+ text)
}
make_shirts()
make_shirts("small");
make_shirts("medium","hello world");





//                   Question No 38


function residencecity(city:string,country:string = "pakistan"):void{
  console.log(city+"  is in "+country)
}

residencecity("karachi","pakistan");
residencecity("hyderabad");
residencecity("sehwan");
residencecity("dubai","uae")


//                Questiono No 39

function city_country(city:string,country:string){
  return "\""+city+","+country+"\""
}
console.log(city_country("lahore","pakistan"))
console.log(city_country("karachi","pakistan"))
console.log(city_country("dubai","uae"))
console.log(city_country("washington dc","usa"))







//       Question No 40


function make_album(artist:string,titke:string,track?:number):{
  artist:string;  
  titke:string;  
  track?:number;}{
    const album = {
      artist,
      titke,
      track,
    };
    if(track!== undefined){
      album.track = track;
    }
    return album
  }

  const album1 = make_album ("study","book");
  const album2= make_album ("honest","the hoshiar",45);
  const album3 = make_album ("jawan","jawaniiii",23);

console.log(album1)
console.log(album2)
console.log(album3)



//  Question No 41



let magiciansArray = ["nazeer", "noman", "ibne", "qasim"];

function show_magicians(magician_name:string[]){
  console.log(magician_name) 
}



show_magicians(magiciansArray);


//  Question No 42


let magiciansArray = ["nazeer", "noman", "ibne", "qasim"];

function show_magicians(magician_name:string[]){
  console.log(magician_name) 
}



show_magicians(magiciansArray);


function  make_great(upgratedarry:string[]){
  console.log("the great "+magiciansArray[0]);
  console.log("the great "+magiciansArray[2]);
  console.log ("the great "+magiciansArray[3]);  
  console.log("the great "+magiciansArray[4]);
}

make_great(magiciansArray)


//   Question NO 43



let magiciansArray = ["nazeer", "noman", "ibne", "qasim"];

function show_magicians(magician_name:string[]){
  console.log(magician_name) 
}



show_magicians(magiciansArray);


function  make_great(upgratedarry:string[]){
  console.log("the great "+magiciansArray[0]);
  console.log("the great "+magiciansArray[1]);
  console.log ("the great "+magiciansArray[2]);  
  console.log("the great "+magiciansArray[3]);
}

make_great(magiciansArray)

let new_arry = ["the great nazeer","the great noman ","the great ibne","the great qasim"]
show_magicians(new_arry)



//  Question No 44


function accptItems(...arry:string[]){
  console.log("summary of the sandwich that is being ordered");
  if(arry.length === 0){
    console.log("you have not ordered any thing")
  }else{
   console.log("you have order "+ arry.join(", ")+ " sandwich")
  }
}

accptItems("pizza","black","red",)
accptItems("green","chese","garlic")
accptItems("blue","pizaa","mayo")



//  Question No 45

function car_information(manufacturer:string,model_name:string,...other_information:[string,any][]):{
  manufacturer:string;
  model_name:string;
  [key:string]:any;
}{
   const car :any ={
      manufacturer,
     model_name,
    }
    for(let [key,value] of other_information ){
      car[key] = value;
   }
    return  car
  }
  console.log(car_information("TOYOTA","GRANDY",["COLOR","WHITE"],["SIZE",23]));  



  */

 

