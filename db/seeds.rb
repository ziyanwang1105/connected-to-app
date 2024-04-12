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

puts 'Seeding all other users'
user1 = User.create!(email: 'email1@email.com', password:'password')
user2 = User.create!(email: 'email2@email.com', password:'password')
user3 = User.create!(email: 'email3@email.com', password:'password')
user4 = User.create!(email: 'email4@email.com', password:'password')
user5 = User.create!(email: 'email5@email.com', password:'password')

puts 'Seeding all other profiles'
profile1 = Profile.create!(user_id: user1.id, last_name: 'Cruise', first_name: 'Tom', heading: 'IMF Agent', open_to_work: false)
profile2 = Profile.create!(user_id: user2.id, last_name: 'Vettel', first_name: 'Sebastian', heading: 'F1 Driver', open_to_work: false)
profile3 = Profile.create!(user_id: user3.id, last_name: 'Lambert', first_name: 'Adam', heading: 'Current Queen Vocalist', open_to_work: false)
profile4 = Profile.create!(user_id: user4.id, last_name: 'Wang', first_name: 'Ryan', heading: 'High school student', open_to_work: true)
profile5 = Profile.create!(user_id: user5.id, last_name: 'Biber', first_name: 'Justin', heading: 'Canadian Pop Singer', open_to_work: true)

puts 'Seeding all other educations'
education1 = Education.create!(user_id: user1.id, school_name: 'TOPGUN Academy', degree_name: 'TOPGUN graduate', description: 'Best graduate from the TOPGUN program', start_year: '1986-01-01', end_year: '1987-12-31')

puts 'Seeding all other experiences'
experiences1 = Experience.create!(user_id: user1.id, company_name: 'TOPGUN Academy', position: 'TOPGUN instructor', description: 'Go Watch Top Gun: Maverick', start_year: '2022-01-01', end_year: '2023-12-31')
