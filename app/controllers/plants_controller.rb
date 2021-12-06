class PlantsController < ApplicationController

    def show
        plant = Plant.all 
        render json: plant

    end

    def index
        plant = Plant.create(plant_params)
        render json: plant 

    end

    private

    def plant_params
    params.permit(:name, :plant_type, :plant_species, :image, :care_instructions, :notes, :garden_id)
    end
end
