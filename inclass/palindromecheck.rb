  def palindrome?
  	print "is it a palindrome??"
   if gets.chomp == gets.chomp.reverse
   	puts "its a palindrome!"
   else
   	puts "its not a palindrome"
   end
  end
