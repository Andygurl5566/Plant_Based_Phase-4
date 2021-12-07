class ApplicationController < ActionController::API
  # before_action :authenticate_user <---Commented this out because it was affecting garden get requests
  include ActionController::Cookies


  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end




  # def current_user
  #   User.find_by(id: session[:user_id])
  # end

  # def authenticate_user
  #   return render json: {error: "Not authorized" }, status: :unauthorized unless current_user
  # end



  
end
