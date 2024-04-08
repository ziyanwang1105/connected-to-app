json.user do
  json.extract! @user, :id, :email, :created_at
end
if @user.profile
  json.profile do
    json.extract! @user.profile, :last_name, :first_name, :heading, :open_to_work, :id, :user_id
  end
end

if @user.educations
  json.educations do
    @user.educations.each do |education|
      json.set! education.id do
        json.extract! education, :user_id, :school_name, :degree_name, :description, :start_year, :end_year, :id
      end
    end
  end
end

if @user.experiences
  json. experiences do
    @user.experiences.each do |experience|
      json.set! experience.id do
        json.extract! experience, :user_id, :company_name, :position, :description, :start_year, :end_year, :id
      end
    end
  end
end
