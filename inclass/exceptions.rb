begin
	10 / 0
rescue ZeroDivisionError => e
	puts "Sorry you can't divide by zero - #{e.message}"
end

begin
	asdasd
rescue => e
	puts "SOmething wrong happened! #{e.message}"
end

class MyException, < StandardError 

	"Some exception happened"