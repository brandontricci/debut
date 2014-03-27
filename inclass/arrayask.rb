puts "enter the array elements (type 'exit' to get out)"
input = gets.chomp
arr = []
while input != 'exit'
  arr << input.to_i
  input = gets.chomp
end

puts arr.count 
puts "times u have entered array items!!"