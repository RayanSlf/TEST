//var nom = 'name';
//var age = 21;
//var isEmpty = true;
//var fruits = ['apple', "banana", 'orange']

//for(var i = 0; i< fruits.length; i += 1){
  //  console.log(fruits[i]);}

//if(age <= 8){
//    console.log("vous n'avez pas le droit de jouer");
//}   else if(age >8 && age<20){
//    console.log("pour jouer vous devez payer 20dh");
//}   else if(age > 20){
//    console.log("Vous avez le droit de jouer gratuitement");}

let username;

document.getElementById('MySubmit').onclick = function(){
  username = document.getElementById("MyText").value();
  console.log(username)
}
   
    
