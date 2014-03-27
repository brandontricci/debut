class Cookie

def eat
	puts "nom nom nom"
end

def bake_n_eat
	bake
	eat
end

private

def bake
	puts "the cookie is baking"
end

cookie1 = Cookie.new
cookie2 = Cookie.new
cookie3 = Cookie.new

end