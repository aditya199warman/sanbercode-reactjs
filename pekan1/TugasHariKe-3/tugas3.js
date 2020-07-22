/*
 Soal 1
 Variabel
*/ 
let kataPertama = "saya";
let kataKedua = "senang";
let kataKeTiga = "belajar";
let kataKeEmpat = "javascript";

console.log("=====Soal 1 ======");
console.log(`${kataPertama} ${kataKedua} ${kataKeTiga} ${kataKeEmpat}`);
/*
 Soal 2
 variabel
*/
let numberOne = 1;
let numberTwo = 5;
let numberThree = 9;
let numberFoure = 6;

let result = numberOne + numberTwo + numberThree + numberFoure;
console.log("======Soal 2 ======");
console.log(result);
/*
 Soal 3
 Slicing String dangan substring()
*/ 
let kalimat = "wah javascript itu keren sekali";

let sliceOne = kalimat.substring(0,3);
let sliceTwo = kalimat.substring(4,14);
let sliceThree = kalimat.substring(15,18);
let sliceFour = kalimat.substring(19,24);
let sliceFive = kalimat.substring(25,31);

console.log("=====Soal 3 =======");
console.log(`KataPertama : ${sliceOne}`);
console.log(`KataKedua : ${sliceTwo}`);
console.log(`KataKeTiga : ${sliceThree}`);
console.log(`KataKeEmpat : ${sliceFour}`);
console.log(`KataKeLima : ${sliceFive}`);

/*
 Soal 4 
 PengKondisian (if-elseif)
*/ 
let nilai;
console.log("=====Soal 4 =====");
nilai = 79

if (nilai >= 80) {
  console.log("A");
} else if(nilai >= 70 && nilai < 80) {
  console.log("B");
} else if(nilai >= 60 && nilai < 70) {
  console.log("C");
} else if(nilai >= 50 && nilai < 60) {
  console.log("D");
} else if(nilai < 50) {
  console.log("E");
}
console.log(nilai);

/*
 Soal 5
 switch case conditional
*/ 
let tanggal = 19;
let bulan = 9;
let tahun = 1999;

switch(bulan) {
  case 1:
   bulan = `${tanggal} januari ${tahun}`;
   break;
  case 2:
   bulan = `${tanggal} februari ${tahun}`;
   break;
  case 3:
   bulan = `${tanggal} maret ${tahun}`;
   break;
  case 4:
   bulan = `${tanggal} april ${tahun}`;
   break;
  case 5:
   bulan = `${tanggal} mei ${tahun}`;
   break;
  case 6:
   bulan = `${tanggal} juni ${tahun}`;
   break;
  case 7:
   bulan = `${tanggal} juli ${tahun}`;
   break;
  case 8:
   bulan = `${tanggal} agustus ${tahun}`;
   break;
  case 9:
   bulan = `${tanggal} September ${tahun}`;
   break;
  case 10:
   bulan = `${tanggal} oktober ${tahun}`;
   break;
  case 11:
   bulan = `${tanggal} november ${tahun}`;
  case 12:
   bulan = `${tanggal} desember ${tahun}`;           
}
console.log("=====Soal 5========");
console.log(bulan);