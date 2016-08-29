class CreateTemperatures < ActiveRecord::Migration
  def change
    create_table :temperatures do |t|
      t.string :date
      t.integer :temp
      t.string :country

      t.timestamps null: false
    end
  end
end
