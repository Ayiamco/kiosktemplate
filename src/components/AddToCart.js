function AddToCart(url,setCartItems,setCartItemsId,cartItemsId){
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(res=>{
           if(cartItemsId.includes(res.id)){
                console.log("already in cart")
           }
           else{
                 setCartItems(prev=>{
                return [...prev,{
                    "price":res.price,
                    "imgUrl":res.image,
                    "id":res.id,
                    "title":res.title
                }]
            })
            setCartItemsId(prev=> {return [...prev,res.id]})
           }
           
            
        })
    }

export default AddToCart;