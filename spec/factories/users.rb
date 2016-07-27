FactoryGirl.define do
  factory :user do
    name  {Faker::Name.name}
    birthday {Faker::Time.between(6000.days.ago, 5900.days.ago)}
    math {(1..10).to_a.sample}
    liter {(1..10).to_a.sample}
    swim {(1..10).to_a.sample}
    sing {(1..10).to_a.sample}
    computer {(1..10).to_a.sample}
    iq {(1..10).to_a.sample}
    physic {(1..10).to_a.sample}
    temper {(1..10).to_a.sample}
  end
end
