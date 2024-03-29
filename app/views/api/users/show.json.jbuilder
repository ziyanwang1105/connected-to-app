json.user do
    json.extract! @user, :id, :email, :heading, :open_to_work, :created_at
  end
