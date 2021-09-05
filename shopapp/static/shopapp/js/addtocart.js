

$(document).ready(function (){

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
   return new bootstrap.Popover(popoverTriggerEl,{html: true})
        // return new bootstrap.Popover(popoverTriggerEl)
})

    $(`.spans`).on('click','button.btn-class-addtocart',function (){
        console.log('clickeddd')
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


     $(`#p${this.id}`).on('click',function (){

    // console.log(this.id)
    pid=this.id.toString()[1]
    cart=JSON.parse(sessionStorage.getItem('cart'))
    plushupdate(pid)
    document.getElementById(`c${pid}`).innerHTML=cart[pid].count
       })


        $(`#m${this.id}`).on('click',function (){

    // console.log(this.id)
    pid=this.id.toString()[1]
    cart=JSON.parse(sessionStorage.getItem('cart'))
    minusupdate(pid)
            if(cart[pid]!=undefined)
             document.getElementById(`c${pid}`).innerHTML=cart[pid].count
       })

    })




})


buttonupdate=(id)=>{
    // console.log("buton",id)
    cart=JSON.parse(sessionStorage.getItem('cart'))
    document.getElementById(`span${id}`).innerHTML=`<button id="p${id}" class="plush pm_commonclass"  >+</button><span id="c${id}" class="nospane">${cart[id].count}</span><button id="m${id}" class="munish pm_commonclass" >-</button>`
}


cartupdata=()=>{
    console.log('clall')
    total=0
    cart=JSON.parse(sessionStorage.getItem('cart'))
    // console.log(Object.keys(cart).length) to get the length of a dictionery in terms of keys
    lst='<div class="unorderlist">'
    for( var i in cart){
        total=total+cart[i].count
        lst=lst+`${cart[i].name}--${cart[i].count}<br>`
    }
    lst=lst+`</div>`

    document.getElementById('cart-no').innerHTML=total.toString()
    document.getElementById('list-cart').setAttribute('data-bs-content',lst+"<div class='buttons my-2'><span class='checkout'><a href='/checkout' onclick='fun()'>check</a></span> <span class='checkout'><a href='#'>clear</a></span></div>");


}

plushupdate=(id)=>{


    cart=JSON.parse(sessionStorage.getItem('cart'))
    cart[id].count=(cart[id].count)+1
    console.log(`here is the count ${id}`,cart[id].count)
    sessionStorage.setItem('cart',JSON.stringify(cart))
    cartupdata()
}

minusupdate=(id)=>{

    cart=JSON.parse(sessionStorage.getItem('cart'))
    if(cart[id].count!=0) {
        cart[id].count = (cart[id].count) - 1
        console.log(`here is the count ${id}`, cart[id].count)
        sessionStorage.setItem('cart', JSON.stringify(cart))
        cartupdata()
        if(cart[id].count==0){
            startButton(id)
        }
    }
}

startButton=(id)=>{
    cart=JSON.parse(sessionStorage.getItem('cart'))
    delete cart[id]
    sessionStorage.setItem('cart',JSON.stringify(cart))
    document.getElementById(`span${id.toString()}`).innerHTML=`<button id=${id} class="btn-class-addtocart">AddToCart</button>`
}

fun=()=>{
    console.log('clicked')
}

