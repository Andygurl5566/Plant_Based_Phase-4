class UsersController < ApplicationController
    # skip_before_action :authenticate_user, only: [:create, :show]

    def index
        render json: User.all, each_serializer: UserSerializer
    end



    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user, status: :ok
        else 
            render json: {error: "User not found"}, status: :not_found
        end
    end

    def create 
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: user.errors.full_messages, 
            status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        if user
            user.destroy
            head :no_content
        end
    end

    private

    def user_params 
        params.permit(:name, :email, :password, :bio, :garden_level)
    end

end
