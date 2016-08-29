class UsersController < ApplicationController
  def index
    @users = User.all
    # @data = User.all_data @users
    @data = Temperature.all_data
  end

  def show
    @user = User.find_by id: params[:id]
    @point = User.collect_point @user
  end
end
