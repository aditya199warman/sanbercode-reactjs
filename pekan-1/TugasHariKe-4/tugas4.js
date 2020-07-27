/*
  Soal 1
  Looping while
*/ 
var counter = 1;
console.log("LOOPING PERTAMA");
while(counter < 22) {
   if(counter % 2 === 0) {
       console.log(`${counter}. I LOVE CODING`);
    }
    counter++;
}

var counter = 20;
console.log("LOOPING KEDUA");
while(counter > 0) {
   if(counter % 2 === 0) {
     console.log(`${counter}.I WILL BECOME A FRONT ENDE DEVELOPER`);
   }
   counter -=1;
}

/*
 Soal 2
 Looping for
*/

for(var counter = 1; counter <= 20; counter++) {
   if(counter % 2 === 1 && counter % 3 === 0){
      console.log(`${counter}. I Love Coding`);
     }else if(counter % 2 === 1){
      console.log(`${counter}. Santai`);
     }else if(counter % 2 === 0){
      console.log(`${counter}. Berkualitas`);
     }
 }

/* 
 Soal 3
 Triangle.
*/ 
let triAngel = (num)=>{
 for(let i = 0; i <= num; i++){
    let str =""
   for(let a = 0; a <= (i-1); a++){
     str +="*"
   }
   console.log(str);
 }
}
// manggil fungi triAngel
triAngel(7);

/*
 Soal 4
 string to array
*/ 
var kalimat = "saya sangat senang belajar javascript";
var kalimats = kalimat.split(" ");
console.log(kalimats);


/*
 Soal 5
 Array sort()
*/ 
const listFruits = ["2.apel", "5.jeruk", "3. anggur", "4. semangka", "1. Mangga"];
const sortFruits = listFruits.sort();
 for(let i = 0; i < sortFruits.length; i++) {
   console.log(sortFruits[i]);
 }
