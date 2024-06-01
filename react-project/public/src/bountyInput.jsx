import React, {useState} from "react";

export default function BountyInput({className, bounty, setBounty}){
    
    const currencyDot = (e) => {
        let value = e.target.innerText;
        value = value.replace(/[^0-9.]/g, '');
        const parts = value.split('')

        if (parts.length > 3 && parts.length < 7) {
            value = `${parts[0]}.${parts[1]}${parts[2]}${parts[3]},${parts[4] ? parts[4] : parts[2]}${parts[5] ? parts[5] : parts[3]}-`
            
        }else if(parts.length > 2 && parts.length <= 5){
            value = `${parts[0]}${parts[1]}${parts[2]},00-`
        }else{
            value = `${value}-`
        }
        
        setBounty(value)
    }   

    return(
        <div contentEditable={true} onFocus={(e) => e.target.textContent === '0,00' ? e.target.textContent = '' : bounty } onBlur={(e) =>{ currencyDot(e) }} className={className} >{bounty}</div>
    )
}