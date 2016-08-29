class TemperaturesController < ApplicationController
  def index
    @temperatures = Temperature.all
    @data = Temperature.all_data
  end
end
