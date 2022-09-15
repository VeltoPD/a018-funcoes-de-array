const arrayNumbers = [43, 56, 67, 84, 72, 95, 21, 39]

const triple = arrayNumbers.map((numbers) =>{
    return numbers * 3
})
console.log("Array de números multiplicado por 3 ", triple)

const half = arrayNumbers.map((numbers) => {
    return numbers/2
})
console.log("Array de números dividido por 2", half)

