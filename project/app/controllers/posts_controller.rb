class PostsController < ApplicationController
before_filter :authenticate_user!

 def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to posts_path
 end

  def new
    @post = Post.new
  end

def update
  @post = Post.find(params[:id])

  if @post.update post_params
    redirect_to @post
  else
    render 'edit'
  end
 end
 
def create
    @post = Post.new post_params

    if @post.save
      redirect_to @post
    else
      render 'new'
    end
  end

 def edit
  @post = Post.find(params[:id])
 end

  def show
    @post = Post.find(params[:id])
  end

  def index
    @posts = Post.page(params[:page]).per_page(5)
  end
end


  private

  def post_params
  	params.require(:post).permit(:title, :text, :photo, :date)
  end

