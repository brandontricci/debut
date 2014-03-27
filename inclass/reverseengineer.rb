class TestAttrMethods

	attr_accessor :b
	attr_writer   :c

	def initialize(a, b = "hello", c = "bonjour")
@a = a
@b = b
@c = c
	end

def greetings
			puts "#{@a}" "#{b}," "#{@c}"
end	
end
	
