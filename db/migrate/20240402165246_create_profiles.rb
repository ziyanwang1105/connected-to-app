class CreateProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :profiles do |t|
      t.references :user, null: false
      t.string :last_name, null: false
      t.string :first_name, null: false
      t.text :heading, null: false
      t.boolean :open_to_work, null: false
      t.timestamps
    end
  end
end
