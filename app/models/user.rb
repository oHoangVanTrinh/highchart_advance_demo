class User < ActiveRecord::Base
  class << self
    def collect_point user
      point_data = []
      point_data << user.math << user.literary << user.chemistry << user.physical << user.biological
      point_data << user.foreign_language << user.information_technology << user.history
      point_data
    end

    def all_data users
      data = []
      users.each do |user|
        data << [user.id, user.name, user.math, user.literary, user.chemistry, user.physical, user.biological,
          user.foreign_language, user.information_technology, user.history]
      end
      data
    end
  end
end
