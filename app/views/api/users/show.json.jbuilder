json.user do
  json.extract! @user, :id, :email, :created_at
end
if @user.profile
  json.profile do
    json.set! @user.id do
      json.extract! @user.profile, :last_name, :first_name, :heading, :open_to_work
    end
  end
end
