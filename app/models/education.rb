# == Schema Information
#
# Table name: educations
#
#  id          :bigint           not null, primary key
#  user_id     :bigint           not null
#  school_name :string           not null
#  degree_name :string           not null
#  description :text             not null
#  start_year  :datetime         not null
#  end_year    :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Education < ApplicationRecord
    validates :school_name, :degree_name, :description, :start_year, :end_year, presence: true

    belongs_to :user
end
