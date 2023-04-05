print("Example Showing Array Functions ")
num=Array(5,10,15,20)
print (" Array Function showing 4th and first element from the Array 5,10,15,20 ")
print(num(3))
print(num(0))

print("filter Function displaying only Weekdays with 'S' charecter")

weekday = Array("Sunday","Monday","Tuesday","Wednesday" ,"Thursday","Friday" , "Saturday")
filterweekday=Filter(Weekday,"S")
For each x in filterweekday
	print(x)
Next

days=Array("Sun","Mon","Tue","Wed" ,"Thu","Fri" , "Sat")
print("IsArray Function")
print(IsArray(days))

print("Join Function with different delimiters")
print(Join(days))
print(Join(days,","))
print(Join(days,"###"))

print("LBound and UBound Function on an array of the weekdays")
print(LBound(days))
print(UBound(days))

print("Split Function on the below line")

print("Experimenting in VbScript is fun")

statement = Split("Experimenting in VBScript is fun ")
For each x in statement 
	print(x)
Next

