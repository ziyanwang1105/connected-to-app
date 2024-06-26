class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :email, null: false, index: { unique: true }
      t.string :password_digest, null: false
      t.string :session_token, null: false, index: { unique: true }
      t.text :heading, null: false
      t.boolean :open_to_work, null: false, default: false
      t.timestamps
    end
  end
end
