class PlantsController < ApplicationController

    def index
        plant = Plant.all 
        render json: plant

    end

    def show
        plant = Plant.find_by(id: params[:id])
        if plant 
            render json: plant
        else 
            render json: { error: "Plant not found"}, status: :not_found
        end
    end

    private

    def plant_params
    params.permit(:name, :plant_type, :plant_species, :image, :care_instructions, :notes, :garden_id)
    end
end
