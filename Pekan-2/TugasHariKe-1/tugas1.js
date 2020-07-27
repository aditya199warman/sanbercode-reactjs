/*
 Soal 1
 Object
*/ 

// 1.Array of object
var arrayDaftarPeserta = [
   {
    name:"Asep", 
    gender:"laki-laki", 
    hobby:"baca buku" ,
    thnLahir:1992
   }   
]
console.debug(arrayDaftarPeserta[0]);

// 2.manny Array of object

var listFruits = [
  {
   nama: "strawberry",
   warna: "merah",
   adaBijinya: false,
   harga: 9000
  },
  {
   nama: "jeruk",
   warna: "oranye",
   adaBijinya: true,
   harga: 8000,
  },
  {
   nama: "Semangka",
   warna: "Hijau & Merah",
   adaBijinya: true,
   harga: 10000
  },
  {
   nama: "Pisang",
   warna: "Kuning",
   adaBijinya: false,
   harga: 5000
  }
]
console.debug(listFruits)

// 3. Add data to dataFilm

const dataFilm = []

function addDataFilm(nama, durasi, genre, tahun) {
   dataFilm.push({nama, durasi, genre, tahun});
}
addDataFilm("Good Father", "2jam", "drama,action", 1996);
addDataFilm("Jumanji next Level" , "90menit", "action,comedy", 2019);
console.debug(dataFilm);

/*
 Soal 2
 Class
*/ 

// Realease 0
class Animal{
   constructor(name) {
     this._name = name,
     this.legs = 4,
     this.cool_blooded = false
   }

   get name() {
    return this._name = name
   }
   set name(name) {
    return this._name = name
   }
}
// var cat = new Animal("Persia");
// console.log(cat)

// Realease 1
class Ape extends Animal {
   constructor(name, legs) {
      super(name);
      this.legs = legs;
   }
   yell() {
     console.log('Auooooo')
   }
}
var sungokong = new Ape("Sungokong", 2);
// console.log(sungokong)
// sungokong.yell()

class Frog extends Ape{
   constructor(name, legs) {
    super(name, legs);
   }
   jump() {
     console.log("Hop hop")
   }
}
var kodok = new Frog("Kodok", 2);
// console.log(kodok)
// kodok.jump()

/*
  Soal 5
*/ 

class Clock {
  constructor({template}) {
   var timer;

   function render() {
     var date = new Date();
 
     var hours = date.getHours();
     if (hours < 10) hours = '0' + hours;
 
     var mins = date.getMinutes();
     if (mins < 10) mins = '0' + mins;
 
     var secs = date.getSeconds();
     if (secs < 10) secs = '0' + secs;
 
     var output = template
       .replace('h', hours)
       .replace('m', mins)
       .replace('s', secs);
 
     console.log(output);
   }
 
   this.stop = function() {
     clearInterval(timer);
   };
 
   this.start = function() {
     render();
     timer = setInterval(render, 1000);
   };
  } 

 }




var myClock = new Clock({template: 'h:m:s'});
console.debug(myClock.start())