class Post < ActiveRecord::Base
  has_many :comments, dependent: :destroy
  default_scope -> { order('created_at DESC') }
  # http://i.imgur.com/H5EE6df.jpg

end

