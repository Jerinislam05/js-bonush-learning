const numbers = [19, 28, 37, 45, 76];
/* for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    
} */
// for loop er moddher element gulo paouar short version holo for of loop
for(const number of numbers) {
    console.log(number);
}

const products = [
    {id: 1, name: 'iphone', price: 120000},
    {id: 2, name: 'xiomi', price: 26000},
    {id: 3, name: 'samsung phone', price: 35000},
    {id: 4, name: 'symphony', price: 29000},
    {id: 5, name: 'walton phone', price: 12000},
    {id: 6, name: 'asus laptop', price: 170000},
    {id: 7, name: 'lenovo laptop', price: 50000},
    {id: 8, name: 'nokia', price: 20000}
]
/* for (const product of products) {
    console.log(product);
} */
function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    } return matched
}
const result = matchedProducts(products, 'laptop');
console.log(result);