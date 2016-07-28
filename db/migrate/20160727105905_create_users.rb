class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.date :birthday
      t.integer :math
      t.integer :literary
      t.integer :chemistry
      t.integer :physical
      t.integer :biological
      t.integer :foreign_language
      t.integer :information_technology
      t.integer :history

      t.timestamps null: false
    end
  end
end
