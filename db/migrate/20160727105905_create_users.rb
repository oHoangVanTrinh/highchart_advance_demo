class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.date :birthday
      t.integer :math
      t.integer :liter
      t.integer :swim
      t.integer :sing
      t.integer :computer
      t.integer :iq
      t.integer :physic
      t.integer :temper

      t.timestamps null: false
    end
  end
end
