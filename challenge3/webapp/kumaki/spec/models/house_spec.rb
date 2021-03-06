# == Schema Information
#
# Table name: houses
#
#  id            :bigint           not null, primary key
#  firstname     :string(255)      not null
#  has_child     :boolean          not null
#  lastname      :string(255)      not null
#  num_of_people :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  city_id       :bigint
#
# Indexes
#
#  index_houses_on_city_id  (city_id)
#
# Foreign Keys
#
#  fk_rails_...  (city_id => cities.id)
#

require 'rails_helper'

RSpec.describe House, type: :model do
  let(:house) { build(:house) }

  it '有効なファクトリを持つこと' do
    expect(house).to be_valid
  end
end
