class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :artist
      t.string :song
      t.string :img_loc
      t.string :player_src


      t.timestamps
    end
  end
end
