class CreateExperiences < ActiveRecord::Migration[7.1]
  def change
    create_table :experiences do |t|
      t.references :user, null: false
      t.string :company_name, null: false
      t.string :position, null: false
      t.text :description, null: false
      t.datetime :start_year, null: false
      t.datetime :end_year, null:false
      t.timestamps
    end
  end
end
