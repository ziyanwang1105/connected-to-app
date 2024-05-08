class CreatePostings < ActiveRecord::Migration[7.1]
  def change
    create_table :postings do |t|
      t.references :user, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.boolean :job_posting, null:false
      t.timestamps
    end
  end
end
