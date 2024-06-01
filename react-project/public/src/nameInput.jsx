import React, {useState} from "react";

export default function NameInput({className, nome, setNome}){

    const middleDot = (e) =>{
        e.target.textContent.length >= 16 ? e.target.classList.add('truncate') : e.target.classList.remove('truncate')
        e.target.textContent.length <= 16 ? e.target.classList.add('text-center') : e.target.classList.remove('text-center')
        e.target.textContent = e.target.textContent.split(' ').join('•')
    } 
    
    const diminish = (e) =>{
        let cMax = 15, tMax = 5.2, tMin = 4.3
        let tamanho = Math.max(tMin, tMax - (tMax - tMin) * e.target.textContent.length / cMax)
        e.target.style.fontSize = `${tamanho}rem`
        e.target.style.fontSize = `${tamanho}rem`
        
        setNome(e.target.textContent)
    }
    return(
        <div contentEditable="true" onInput={ (e) => diminish(e) } className={className} onBlur={(e) => middleDot(e)} onFocus={(e) => e.target.textContent.includes('YOUR') ? e.target.textContent = '' : nome}>YOUR NAME</div>
    )
}