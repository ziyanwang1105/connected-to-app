json.education do
    json.extract! @education, :user_id, :school_name, :degree_name, :description, :start_year, :end_year, :id
end
