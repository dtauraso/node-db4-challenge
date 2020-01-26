const db = require('../db-config.js')

module.exports = {
    getRecipies,
    getShoppingList,
    getInstructions

}
// works
function getRecipies() {
    return db('recipies')
}
// works
function getShoppingList(recipie_id) {
    // f(recipie) -> all ingredients and quantities
    return db('recipies as r')
            .leftJoin('recipies_ingredients as ri', 'r.id', 'ri.recipie_id')
            .leftJoin('ingredients as i', 'i.id', 'ri.ingredient_id')
            .where('r.id', recipie_id)
            .select('i.ingredient_name')
}

function getInstructions(recipie_id) {
    return db('recipies as r')
            .select('r.stepByStepInstructions')
            .where('r.id', recipie_id)
}
