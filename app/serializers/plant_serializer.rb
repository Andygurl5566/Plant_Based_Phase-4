class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :plant_type, :plant_species, :image, :care_instructions, :notes, :garden_id
end
