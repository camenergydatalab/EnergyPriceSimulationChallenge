# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

puts "start reading csv ..."

# ActiveRecord::Base.transaction do
#   House.import("#{Rails.root.to_s}/data/house_data.csv")
#   Datum.import("#{Rails.root.to_s}/data/dataset_50.csv")
# end

# House.create!(
#   csv_id: 100,
#   firstname: "keishi",
#   lastname: "yoshikawa",
#   city: "Kawagoe",
#   num_of_people: 4,
#   has_child: nil)