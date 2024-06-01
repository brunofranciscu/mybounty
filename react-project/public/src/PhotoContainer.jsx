import React, { useState } from "react";

export default function PhotoContainer(){
    const [foto, setFoto] = useState('')

    const carregarImagem = (e) =>{
        if(e.target.files && e.target.files[0]){
            const arquivo = new FileReader()
            arquivo.onload = fileLoaded
            arquivo.readAsDataURL(e.target.files[0])
        }
    }
    const fileLoaded = e => setFoto(e.target.result)
    
    if(foto == ''){
        return (
            <div className="mx-auto">
                <img src="./src/assets/model.png" className="block mx-auto" onClick={(e) => e.target.nextSibling.click()}/>
                <input type="file" onChange={(e) => {carregarImagem(e)}} className="opacity-0 scale-0"/>
            </div>
        )
    }
            
    return(
        <div className="border-2 border-[#573b2e] border-solid mx-auto overflow-hidden h-[500px] !bg-center !bg-cover !bg-no-repeat" style={{background:`url(${foto})`}}>  </div>
    )
} 