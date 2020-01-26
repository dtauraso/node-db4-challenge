exports.seed = function(knex) {
    return knex('ingredients').insert([
        {
            ingredient_name: 'ingredient 1',
            quantity: 1.3,
        },
        {
            ingredient_name: 'ingredient 2',
            quantity: 2.4,
        },
        {
            ingredient_name: 'ingredient 3',
            quantity: 4.5,
        }
    ])
};