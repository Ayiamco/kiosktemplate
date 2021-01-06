import React from 'react'
import "../css/ProductQuantityCounter.css"

 function ProductQuantityCounter({productQuantity,setProductQuantity}) {

    function handleClick(e){
        if(e.target.className.includes("PQCReduce")){
            if(productQuantity>0){
                setProductQuantity(prev=>
                    {return prev-1
                    })
            }
        }

        else if (e.target.className.includes("PQCIncrease")){
            setProductQuantity(prev=>{
                return prev+1
                })
            
        }
    }
    return (
        <div>
            <div className="PQC-counter-mn">
                <p>Quantity</p>
                <div className="PQC-counter-con">
                    <p className="PQC-counter-item PQCReduce" onClick={handleClick}>-</p>
                    <p  className="PQC-counter-display" >{productQuantity}</p>
                    <p  className="PQC-counter-item PQCIncrease" onClick={handleClick}>+</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default ProductQuantityCounter;