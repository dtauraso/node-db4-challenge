exports.seed = function(knex) {
    return knex('recipies').insert([
        {
            recipe_name: 'recipie 1',
            stepByStepInstructions: 'here are step by step instructions 1'
        },
        {
            recipe_name: 'recipie 2',
            stepByStepInstructions: 'here are step by step instructions 2'
        },
        {
            recipe_name: 'recipie 3',
            stepByStepInstructions: 'here are step by step instructions 3'
        }
    ])
};