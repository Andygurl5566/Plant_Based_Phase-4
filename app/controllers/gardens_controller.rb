class GardensController < ApplicationController
    def show
        garden = Garden.all 
        render json: garden

    end

    def index
        plant = Garden.create(garden_params)
        render json: plant 

    end

    private

    def garden_params
    params.permit(:name, :location )
    end
end
end
