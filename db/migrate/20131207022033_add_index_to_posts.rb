class AddIndexToPosts < ActiveRecord::Migration
  def change
    add_index :posts, :id
  end
end
