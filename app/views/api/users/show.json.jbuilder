json.user do
  json.extract! @user, :id, :email, :created_at
end
if @profile
  json.profile do
    json.extract! @profile, :last_name, :first_name, :heading, :open_to_work
  end
end
