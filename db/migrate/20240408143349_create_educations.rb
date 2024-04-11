class CreateEducations < ActiveRecord::Migration[7.1]
  def change
    create_table :educations do |t|
      t.references :user, null: false
      t.string :school_name, null: false
      t.string :degree_name, null: false
      t.text :description, null: false
      t.datetime :start_year, null: false
      t.datetime :end_year, null:false
      t.timestamps
    end
  end
end
