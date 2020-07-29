/*
 Soal 1
 membuat arrow function untuk luas keliling dan keliling lingkaran 
*/ 

const luasLingkaran = (d) => {
    return `${d/2} cm`
}
let luas = luasLingkaran(20)
console.log(`Luas Lingkaran : ${luas}`);

const kelilingLingkaran = (diameter, phi) => {
   return `${diameter * phi} cm`
}
let keliling = kelilingLingkaran(10, 3.14);
console.log(`Keliling lingkaran : ${keliling}`);

/*
 Soal 2
 arrow function tambahKalimat
*/ 
let kalimat = ''

const tambahKalimat = (kata1, kata2, kata3, kata4, kata5) => {
    return kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`
}
tambahKalimat(`saya`, `adalah`, `seorang`, `frontend`, `developer`);
console.log(kalimat)


/*
 Soal 3
 class inheritance
*/ 
class Book{
  constructor(name, totalPage, price){
    this.name = name,
    this.totalPage = totalPage,
    this.price = price
  }
}

class Comik extends Book{
  constructor(name, totalPage, price, isColorful){
    super(name, totalPage, price);
    this.isColorful = isColorful
  }
}
let naruto = new Comik('Naruto', 200, 100000, false)
console.log(naruto)


