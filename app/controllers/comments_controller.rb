class CommentsController < ApplicationController
  def create
    post = Post.find(comm_params[:post_id])
    comment = post.comments.build(content:comm_params[:content])
    comment.save
    redirect_to root_url
  end

  def destroy

    comment = Comment.find(params[:id])
    comment.destroy
    redirect_to root_path
    
  end

  private

    def comm_params
      params.require(:comment).permit(:content,:post_id)
    end

end
