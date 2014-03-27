string = "Aaap noot miesbbbbtttttt".downcase

chars = Hash.new(0)

string.each_char do |s|
    chars[s] += 1
end

puts chars.max_by{|k, v| v}[0][0]