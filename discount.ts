function calculateDiscount(price:number, rate:number=0.3){
    var discount = price*rate;
    console.log(`Discount Amout is: ${discount}`)
}
calculateDiscount(1000)
calculateDiscount(1000,0.50)