class AddBumpsToPost < ActiveRecord::Migration
  def change
    add_column :posts, :bumps, :integer, default:0
  end
end
