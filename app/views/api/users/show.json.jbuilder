json.user do
  json.extract! @user, :id, :email, :created_at
end
if @user.profile
  json.profile do
    json.extract! @user.profile, :last_name, :first_name, :heading, :open_to_work, :id, :user_id
  end
end
