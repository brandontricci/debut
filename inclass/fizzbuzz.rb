fizzarray = []

upto(100) do |n|
n % 15 == 0 ? puts "Fizzbuzz"  
n % 5 == 0 ? puts "Buzz"
n % 3 == 0 ? puts "Fizz"
end