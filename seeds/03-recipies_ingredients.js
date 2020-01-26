exports.seed = function(knex) {
    return knex('recipies_ingredients').insert([
        {
            recipie_id: 1 ,
            ingredient_id: 1,
        },
        {
            recipie_id: 1,
            ingredient_id: 2,
        },
        {
            recipie_id: 1,
            ingredient_id: 3,
        },
        {
            recipie_id: 2 ,
            ingredient_id: 1,
        },
        {
            recipie_id: 2,
            ingredient_id: 2,
        },
        {
            recipie_id: 3,
            ingredient_id: 3,
        }
    ])
};