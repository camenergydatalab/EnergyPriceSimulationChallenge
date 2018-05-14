class CreateEnergyData < ActiveRecord::Migration[5.1]
  def change
    create_table :energy_data do |t|
      t.integer    "user_id",             null: false, index: true
      t.integer    "year",                null: false
      t.integer    "month",               null: false
      t.float      "temperature",         null: false
      t.float      "daylight",            null: false
      t.integer    "energy_production",   null: false
      t.timestamps                        null: false
    end
  end
end
