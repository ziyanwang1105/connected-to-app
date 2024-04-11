json.experience do
    json.extract! @experience, :user_id, :company_name, :position, :description, :start_year, :end_year, :id
end
