print("Example showing Date Functions")
print("The Current system date is :")
print(Date)

print("DateAdd Functions")
print(DateAdd("yyyy",1,"31-Jan-15"))
print(DateAdd("q",1,"31-Jan-15"))
print(DateAdd("m",1,"31-Jan-15"))
print(DateAdd("y",1,"31-Jan-15"))
print(DateAdd("d",1,"31-Jan-15"))
print(DateAdd("w",1,"31-Jan-15"))
print(DateAdd("ww",1,"31-Jan-15"))
print(DateAdd("h",1,"31-Jan-15 08:50:00"))
print(DateAdd("n",1,"31-Jan-15 08:50:00"))
print(DateAdd("s",1,"31-Jan-15 08:50:00"))


fromDate="31-Jan-14 00:00:00"
toDate="31-Jan-15 23:59:00"
print("DateDiff Function")
print("FromDate=31-Jan-14 00:00:00")
print("ToDate=31-Jan-15 23:59:00")
print(DateDiff("yyyy",fromDate,toDate))
print(DateDiff("q",fromDate,toDate))

print(DateDiff("m",fromDate,toDate))

print(DateDiff("y",fromDate,toDate))

print(DateDiff("d",fromDate,toDate))

print(DateDiff("w",fromDate,toDate))

print(DateDiff("ww",fromDate,toDate))

print(DateDiff("h",fromDate,toDate))

print(DateDiff("n",fromDate,toDate))

print(DateDiff("s",fromDate,toDate))
