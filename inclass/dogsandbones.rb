require "./bones.rb"

class Dog


	 def initialize(color, type)
		@color = color
		@type = type
   end

  def give_bone
  	 puts “enter the values”
     a = gets.chomp 
     array = a.split(‘ ‘) 
     p array

	end

  def eat_a_bone
  		@bones = bones
  		@bones = (-1)
  end
end