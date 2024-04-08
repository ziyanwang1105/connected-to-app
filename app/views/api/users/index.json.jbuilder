@users.each do |user|

    json.set! user.id do
        json.extract! user, :id, :email, :created_at
        if user.profile
            json.extract! user.profile, :last_name, :first_name
        end
    end

end
