class UsersController < ApplicationController

  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json {render json: @users}
    end
  end

  def show
    binding.pry
    @user = User.find params[:id]
  end
end
