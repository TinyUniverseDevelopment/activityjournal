const Activities = require('../models/Activities')

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}


const getTypeTotals = async () => {
    const types = ['code', 'cook', 'work', 'game', 'exercise']

    try {
        let typeObj = {}
        await asyncForEach(types, async type => {

            let total = await Activities.find({
                'activityType': type
            })

            typeObj[type] = total.length
            console.log(typeObj)

        })
        return typeObj
    } catch (error) {
        console.log(error)
    } finally {

    }


}

// const typeTotals = async () => {

//     try {
//         const types = ['code', 'cook', 'work', 'game', 'exercise']
//         typesobj = await Promise.all(await getTypeTotals(types))
//         console.log(typesobj)
//         return typesobj
//     } catch (error) {
//         console.log(error)
//     } finally {

//     }


// }

module.exports = getTypeTotals