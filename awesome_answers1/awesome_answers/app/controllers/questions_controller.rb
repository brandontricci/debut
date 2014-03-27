class QuestionsController < ApplicationController

  def index
  end

  def create
  end

  def show
  render text: "The ID is: #{params[:id]}"
  end

  def edit
  end

  def vote_up
  end

  def vote_down
  end

  def destroy
     render text: "deleting!!"
  end

  def search
  end


end
