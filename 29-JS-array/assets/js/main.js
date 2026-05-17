const CART = [
    {
        title: 'Хліб тостовий',
        price: 36.8,
        qty: 1
    },
    {
        title: 'Молоко',
        price: 42.00,
        qty: 1
    }
]

function subminHandler(){
    event.preventDefault()
    return false
}







const findedEl = CART.find((el) => el.title === 'Молоко')
if(findedEl){
    findedEl.qty = findedEl.qty + 1
}else{
CART.push({
    title: 'Молоко',
    price: 42.00,
    qty: 1
})
}
console.log(findedEl);
