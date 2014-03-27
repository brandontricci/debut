def sum (a, *b)
	result = a
	b.each {|x| result += x}
	result
end

add (4, 5, 5, 4, 6)