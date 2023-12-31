'use client'

import product from "@/data/datatype/product";
import { UNSPLASH_LINK } from "@/data/unsplash";
import { useState } from "react";


export default function ItemShowcase(props: product) {
    const [hover, setHover] = useState<boolean>(false)

    return (
        <div 
        key={props.id}
        className={`cursor-pointer w-[200px] flex flex-col items-center 
        shadow-md rounded-sm text-zinc-700 h-[310px] hover:h-[320px]
        transition-all overflow-hidden relative`}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            <img className={`${hover ? "scale-110" : "scale-100"} transition-all`} src={`${UNSPLASH_LINK}/200x200?${props.prod_name}`}/>
            {props.prod_offer > 0 ? (
                <div className="absolute w-full text-white bg-zinc-900">
                    {props.prod_offer}%OFF
                </div>
            ) : ""}
                

            <div className={`h-full text-slate-800 font-poppins flex flex-col justify-center transition-all ${hover ? "mt-3" : ""}`}>
                <legend className="text-sm">
                {props.prod_name.length > 21
                    ? props.prod_name.substring(0, 21) + "..."
                    : props.prod_name}
                </legend>
                {props.prod_offer > 0 ? (
                    <div className="text-xs line-through font-poppins">
                        R${props.prod_price}
                    </div>
                ) : ""}
                <div className={`font-bold  text-2xl font-newake`}>
                    {props.prod_offer > 0 ? "$" + (props.prod_price - (props.prod_price*props.prod_offer/100)).toFixed(2) : (
                    "$" + (props.prod_price).toFixed(2)
                    )}
                </div>
                <div className={`text-xs `}>
                    em 12x R${((props.prod_price/12)+props.prod_price*0.01).toFixed(2)}
                </div>
            </div>
            {/* <button className={`bg-green-400 active:bg-green-500 text-white w-full rounded-sm p-1 text-sm flex gap-3 justify-center items-center`}>Adicionar ao carrinho<IconShoppingCart/></button> */}
        </div>
    )
}