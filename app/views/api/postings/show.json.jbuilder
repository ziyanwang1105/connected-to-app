json.posting do
    json.extract! @posting, :id, :user_id, :title, :body, :job_posting, :created_at
end
