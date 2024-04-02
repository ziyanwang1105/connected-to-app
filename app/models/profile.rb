# == Schema Information
#
# Table name: profiles
#
#  id           :bigint           not null, primary key
#  user_id      :bigint           not null
#  last_name    :string           not null
#  first_name   :string           not null
#  heading      :text             not null
#  open_to_work :boolean          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Profile < ApplicationRecord
    validates :last_name, :first_name, :heading, presence: true
    validates  :open_to_work, inclusion: { in: [ true, false ] }

    belongs_to :user
end
