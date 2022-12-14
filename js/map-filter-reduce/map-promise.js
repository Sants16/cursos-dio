const items = ['a', 'b', 'c', 'd'];

(async function() {
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - promise`)
        })
    }

    const itemMappedPromises = items.map(promiseFunction)

    const itemsMapped = await Promise.all(itemMappedPromises)

    console.log(itemsMapped)

})()