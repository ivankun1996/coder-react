
import React, { useEffect, useState } from "react";

export const ItemListContainer =( {greeting}) => {

    const [data, setData] = useState([])
    

    const stock = [
        {   
            id: 1,
            nombre: "Iphone 12",
            precio: 1000
        
        },
        {   
            id: 2,
            nombre: "Samsung Galaxy",
            precio: 500
        
        },
        {   
            id: 3,
            nombre: "Motorola V3",
            precio: 100
        
        },
    ]
 
    const pedirDatos = () => {
      
        return new Promise((resolve,reject) => {
           
            setTimeout(()=>{
                resolve (stock)
            }, 2000)

        })
    }

    useEffect( ()=> {

        pedirDatos ()
            .then(res => setData(res))

    }, [])

    
    return(

        <div>
            <h2>{greeting}</h2>
            <hr/>
            <p>{JSON.stringify(data)}</p>
        </div>
    )

    
}