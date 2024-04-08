# == Schema Information
#
# Table name: experiences
#
#  id           :bigint           not null, primary key
#  user_id      :bigint           not null
#  company_name :string           not null
#  position     :string           not null
#  description  :text             not null
#  start_year   :datetime         not null
#  end_year     :datetime         not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Experience < ApplicationRecord
    validates :company_name, :position, :description, :start_year, :end_year, presence: true

    belongs_to :user
end
