function AddToCart(url,setCartItems,setCartItemsId,cartItemsId){
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(res=>{
           if(cartItemsId.includes(res.id)){
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
           
            
        }).catch((e)=>{
            return "An Error Occured";
        })
    }

export default AddToCart;