# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
puts 'Clearing all data...'
User.destroy_all
Education.destroy_all
Experience.destroy_all
Profile.destroy_all

puts 'Seeding demo User...'
demo_user = User.create!(email: 'demouser@email.com', password: 'password')
demo_profile = Profile.create!(user_id: demo_user.id, last_name: 'Wang', first_name: "Jerry", heading:"App Academy Student", open_to_work: true)
demo_education = Education.create!(user_id: demo_user.id, school_name: 'University of Toronto', degree_name: 'Bachelor of Science', description: 'Double major in Math and Stats', start_year: '2017-09-01', end_year: '2021-06-30')
demo_experience = Experience.create!(user_id:demo_user.id, company_name: 'Beta Fellowship', position: 'Data Analyst', description: 'Web 3.0 start up', start_year: '2022-07-01', end_year:'2022-12-31')

puts 'Seeding all other user'
