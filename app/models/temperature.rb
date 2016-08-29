class Temperature < ActiveRecord::Base

  scope :hcm_data, ->{where country: :hcm}
  scope :tokyo_data, ->{where country: :tokyo}

  class << self
    def all_data
      data = []
      date = hcm_data.pluck(:date)
      hcm_temp = hcm_data.pluck(:temp)
      tokyo_temp = tokyo_data.pluck(:temp)
      data << {"date" => date, "hcm" => hcm_temp, "tokyo" => tokyo_temp}
    end
  end
end
