class ApplicationController < ActionController::API
  # before_action :authenticate_user <---Commented this out because it was affecting garden get requests
  include ActionController::Cookies

  def current_user
    User.find_by(id: session[:user_id])
  end

  def authenticate_user
    return render json: {error: "Not authorized" }, status: :unauthorized unless current_user
  end



  
end
