//immediately invoked function expression

const iife = (
    (propsNome) => {
        let name = propsNome
        return name
    }
)('João')

console.log(iife)