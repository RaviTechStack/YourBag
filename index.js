let card = document.querySelectorAll(".card")
let showCart = document.getElementById("showCart")
let btn = document.querySelectorAll(".chngbtn")
if(localStorage.getItem("cart")== null){
    cart = {}
}
else{
    cart = JSON.parse(localStorage.getItem("cart"))
}
    


card.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        let idstr = JSON.stringify(elem.id)
        
        if(cart[idstr]!= undefined){
            cart[idstr] += 1
        }
        else{
            cart[idstr] = 1
            
            
        }
        console.log(cart)
        localStorage.setItem("cart" , JSON.stringify(cart))
        let count = Object.keys(cart).length
        let countValue = Object.values(cart)
        let total = 0
        for(let i=0; i<countValue.length; i++){
            total = total + countValue[i]
        }
        showCart.innerHTML = total
        
    })

})



