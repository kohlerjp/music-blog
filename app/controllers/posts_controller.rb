class PostsController < ApplicationController
    http_basic_authenticate_with name: "john", password: "testing", only: [:new]
  def new
    @post = Post.new
  end

  def create
    post = Post.new(post_params)
    if post.save
      flash[:success] = "Post Added"
      redirect_to root_path
    else
      flash[:danger] = "There was an error"
      render 'new'
    end
  end

  def index
    @posts = Post.all()
  end


  private 

    def post_params
      return params.require(:post).permit(:artist,:song,:img_loc,:player_src)
    end
end