const student = {
    name: 'jerin islam',
    id: 101,
    address: 'london',
    isSingle: true,
    friends: ['i', 'me', 'myself'], //object er moddhe array
    movies: [{name: 'no1', year: 2000}, {name: 'queen', year: 2022}],
    act: function () {
        console.log('acting like a movie');
    }, // object er moddhe function
    car: {
        brand: 'tesla',
        price: 5000000,
        made: 2025,
        manufacturer: {
            ceo: 'elon mask',
            country: 'USA'
        } //object er moddhe object
    }
}
console.log(student.act);
student.act();
// object er moddhe pry sob dhoroner kaj use kora jy jemon array, function, object etc