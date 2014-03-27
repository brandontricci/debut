array4 = [[1,2,3][1,2,3][1,2,3]]

 puts array4.each do [outer]
  outer.each do [inner]
    puts inner
   end
 end