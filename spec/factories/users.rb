FactoryGirl.define do
  factory :user do
    name  {Faker::Name.name}
    birthday {Faker::Time.between(6000.days.ago, 5900.days.ago)}
    math {(1..10).to_a.sample}
    literary {(1..10).to_a.sample}
    chemistry {(1..10).to_a.sample}
    physical {(1..10).to_a.sample}
    biological {(1..10).to_a.sample}
    foreign_language {(1..10).to_a.sample}
    information_technology {(1..10).to_a.sample}
    history {(1..10).to_a.sample}
  end
end
