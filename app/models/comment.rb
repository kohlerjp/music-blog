class Comment < ActiveRecord::Base
  belongs_to :post
  default_scope -> { order('created_at DESC') }
  validates :content, presence: true, length:{minimum:3}
end
