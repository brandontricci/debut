print "Enter your order: "
order = gets.chomp
case order
when "double double", "ice cap"
  puts 'Timmy Hos!'
when "grande latte", "frappe"
  puts 'Starbucks!'
else
  puts "You can't even use a computer!"
end