
// knex migrate:latest runs this code
exports.up = function(knex) {
    /*
    
    recipies
    - id int
    - name varchar 255
    - step by step instructions varchar 500
    
  
    ingredients
    - id int
    - quantity float
  
    recipies_ingredients
    - recipie_id int (foreign key)
    - ingredient_id int (foreign key)
    */
  
    return knex.schema
      .createTable('recipies', tbl => {
          tbl.increments();
          tbl.text('recipe_name', 255)
              .unique()
              .notNullable();
          tbl.text('stepByStepInstructions', 500)
              .notNullable();
          
      })
      .createTable('ingredients', tbl => {
          tbl.increments()
          tbl.text('ingredient_name', 255)
              .unique()
              .notNullable()
          tbl.float('quantity')
              .notNullable();
          
      })
      .createTable('recipies_ingredients', tbl => {
          tbl.integer('recipie_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('recipies')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
          tbl.integer('ingredient_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('recipies')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
  
      })
  };
  
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists('recipies_ingredients')
          .dropTableIfExists('ingredients')
          .dropTableIfExists('recipies');
  };
  