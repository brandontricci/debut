class Cookie

	attr_accessor :sugar_amount
	attr_accessor :flour_amount

	def initialize(sugar_amount, flour_amount)
		@sugar_amount, @flour_amount = sugar_amount, flour_amount
	end
end

def name
	puts "I'm a Cookie"
end

class Oreo < Cookie
	attr_accessor :filling_amount

def name
	puts "I'm an Oreo"

end

o = Oreo.new(2, 3)

end


