import products from './products'

const productName = 'tote bag'
const shippingAddress = 'New York'
let shipping: number
let taxPercent: number
let taxTotal: number
let total: number

const product = products.find(product => product.name === productName)

console.log(product);

if (product?.preOrder) {
    console.log('We’ll send you a message when it’s on the way')
}

if (Number(product?.price) >= 25) {
    shipping = 0
    console.log('We provide free shipping for this product');
} else {
    shipping = 5
}

shippingAddress.match('New York') ? taxPercent = 0.1 : taxPercent = .05

taxTotal = Number(product?.price) * taxPercent

total = Number(product?.price) + taxTotal + shipping

console.log(`The cost for ${productName}, bought at ${shippingAddress} is $${product?.price}. The total tax is $${taxTotal.toFixed(2)} and the shipping is $${shipping.toFixed(2)}, so the total cost is $${total.toFixed(2)}`);

