puts "Enter your fibinocci number that you want to view!!"

def fib_upto(max)
  i1, i2 = 1, 1
  while i1 <= max
    yield i1
    i1, i2 = i2, i1+i2
  end
end

fib_upto(gets.c) {|f| print f, " "}