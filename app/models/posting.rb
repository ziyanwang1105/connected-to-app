class Posting < ApplicationRecord
    validates  :job_posting, inclusion: { in: [ true, false ] }
    validates :title, :body, presence: true

    belongs_to :user
end
