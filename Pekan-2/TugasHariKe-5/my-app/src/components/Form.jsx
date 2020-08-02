import React from "react";
import Radio from "./Radio";
import Button from "./Button";

function Form() {
 return (
  <form>
   <h2 className="pelanggan">Nama Pelanggan</h2>
   <input type="text" className="textinput"></input>
   <Radio 
     name= "Semangka"
   />
   <Radio 
     name= "Jeruk"
   />
   <Radio 
     name= "Salak"
   />
   <Radio 
     name= "Nanas"
   />
   <Radio 
     name= "Anggur"
   />
   <h2 className="item">Daftar Item</h2>
   <Button 
     name= "KIRIM"
   />
  </form>
 )
}

export default Form;