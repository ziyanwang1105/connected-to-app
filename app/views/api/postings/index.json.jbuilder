@postings.each do |posting|

    json.set! posting.id do
        json.extract! posting, :id, :title, :body, :job_posting, :created_at
    end

end
