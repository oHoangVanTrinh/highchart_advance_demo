puts "== Create 10 user"
10.times{FactoryGirl.create :user}

puts "== Create temperature"
20.times do |n|
  FactoryGirl.create :temperature, date: Date.today-n,temp: rand(25..36), country: "hcm"
end

20.times do |m|
  FactoryGirl.create :temperature, date: Date.today-m,temp: rand(2..27), country: "tokyo"
end
