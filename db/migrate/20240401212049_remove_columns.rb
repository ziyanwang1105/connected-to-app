class RemoveColumns < ActiveRecord::Migration[7.1]
  def change
    remove_column :users, :heading
    remove_column :users, :open_to_work
  end
end
