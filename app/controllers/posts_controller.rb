class PostsController < ApplicationController
    http_basic_authenticate_with name: "john", password: "testing", only: [:new, :delete]
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
    @posts = Post.paginate(page:params[:page],per_page:3)
    puts params

    respond_to do |format|
      format.js if request.xhr?
      format.html
    end
  end

  def delete
    @posts = Post.all()
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    redirect_to root_path
  end

  def bump
    post = Post.find(params[:id])
    post = post.update_attributes(bumps:post.bumps + 1)
  end

  def unbump
    post = Post.find(params[:id])
    post = post.update_attributes(bumps:post.bumps - 1)
  end
  def edit
    @post = Post.find(params[:id])
  end
  def update
    @post = Post.find(params[:id])
    @post.update_attributes(post_params)
    redirect_to root_path
  end



  private 

    def post_params
      return params.require(:post).permit(:artist,:song,:img_loc,:player_src)
    end
end
