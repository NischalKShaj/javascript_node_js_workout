// optional chaining means that to check the existance of a property using ? 

let student = [{
    name : 'Nischal',
    age : 21,
    mark : {
        chem : 92,
        phy : 89,
        math :55,
        eng :94,
        cs :92,
    },

    
}]

let marks = student?.mark?.chem;
console.log(marks);