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

        }
        else{
          if(cart[no]==undefined){
                 cart=JSON.parse(sessionStorage.getItem('cart'))
            cart[no]={'name':name,'price':price,'count':1}
            sessionStorage.setItem('cart',JSON.stringify(cart))
          }
          else{
              cont=cart[no].count+1
            cart=JSON.parse(sessionStorage.getItem('cart'))
            cart[no]={'name':name,'price':price,'count':cont}
            sessionStorage.setItem('cart',JSON.stringify(cart))
          }

        }

    })
})

