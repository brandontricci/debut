class Car

def initialize(fuel_amount = 0, passenger_count = 0, model = "Audi A4", type = "sedan", capacity = 5)
	@fuel_amount = fuel_amount
	@model = "Audi A4"
	@type = "Sedan"
	@capacity = 5
	@passenger_count = passenger_count
	"im in initialize"
end

	def drive
		@distance = 100
		"the car is driving"
	end

	def fuel_amount
		@fuel_amount
	end



	def stop
		puts @distance
		"the car has stopped"
	end

	def self.max_speed
		absolute_speed - 50
	end

		private

def self.absolute_speed
	300
end

		def pump_gas
			"car is pumping gas"
		end

		def ignite_engine
			"engine is ignited"
		end
end
