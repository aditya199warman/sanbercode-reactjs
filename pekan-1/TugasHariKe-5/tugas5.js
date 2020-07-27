/*
 Soal 1
 function
*/ 
function halo() {
   console.log("Halo Sanbers!");
}
halo();


/*
 Soal 2
 function
*/
function kalikan(num1, num2) {
  return num1 * num2;
}
var result = kalikan(4,3);
console.log(result);


/*
 Soal 3
 function
*/ 
function introduce(name, age, addres, hobby) {
  return `Nama Saya :${name} \nUmur : ${age} \nAlamat : ${addres} \nHobby : ${hobby}`
}

var perkenalan = introduce("aditya warman", 20, "Sumatera Barat", "Gaming🎮");
console.log(perkenalan);