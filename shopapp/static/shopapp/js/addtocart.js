

$(document).ready(function (){
    $('.btn-class-addtocart').on('click',function (){

        console.log(this.id)
        no=this.id.toString()
        name=document.getElementById(`sn${no}`).innerHTML
        price=document.getElementById(`sp${no}`).innerHTML

        //
        // cart=JSON.parse(sessionStorage.getItem('cart')) || []
        //
        // items={'name':name}
        // cart.push(items)
        // sessionStorage.setItem('cart',JSON.stringify(cart))

        if(sessionStorage.getItem('cart')==null){
            cart={}
            cart[no]={"name":name,'price':price,'count':1}
            sessionStorage.setItem('cart',JSON.stringify(cart))
            buttonupdate(this.id)
            cartupdata()



        }
        else{
          if(cart[no]==undefined){
                 cart=JSON.parse(sessionStorage.getItem('cart'))
            cart[no]={'name':name,'price':price,'count':1}
            sessionStorage.setItem('cart',JSON.stringify(cart))
              buttonupdate(this.id)
              cartupdata()
          }
          else{
              cont=cart[no].count+1
            cart=JSON.parse(sessionStorage.getItem('cart'))
            cart[no]={'name':name,'price':price,'count':cont}
            sessionStorage.setItem('cart',JSON.stringify(cart))
              cartupdata()
          }

        }


            $('.plush').on('click',function (){
    // console.log(this.id)
    pid=this.id.toString()[1]
    cart=JSON.parse(sessionStorage.getItem('cart'))
    plushupdate(pid)
    document.getElementById(`c${pid}`).innerHTML=cart[pid].count
       })

    })




})

buttonupdate=(id)=>{
    // console.log("buton",id)
    cart=JSON.parse(sessionStorage.getItem('cart'))
    document.getElementById(`span${id}`).innerHTML=`<button id="p${id}" class="plush" >+</button><span id="c${id}">${cart[id].count}</span><button id="m${id}" class="munish" >-</button>`
}


cartupdata=()=>{
    console.log('clall')
    total=0
    cart=JSON.parse(sessionStorage.getItem('cart'))
    // console.log(Object.keys(cart).length) to get the length of a dictionery in terms of keys
    for( var i in cart){
        total=total+cart[i].count
    }
    document.getElementById('cart-no').innerHTML=total.toString()


}

plushupdate=(id)=>{
    cart=JSON.parse(sessionStorage.getItem('cart'))
    cart[id].count=(cart[id].count)+1
    sessionStorage.setItem('cart',JSON.stringify(cart))
    // cartupdata()
}



