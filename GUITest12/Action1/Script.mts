print date
print dateadd("d",3,"17-mar-1999")
print dateadd("m",4,"17-mar-1999")
print dateadd("yyyy",5,"17-mar-1999")
print dateadd("w",3,"17-mar-1999")
print dateadd("n",6,"17-mar-1999")
print dateadd("h",3,"17-mar-1999")
print dateadd("s",3,"17-mar-1999")


Print ("datediff")
print datediff("d","1-jan-2021","31-Dec-2023")
print datediff("m","1-jan-2021","31-Dec-2023")
print datediff("yyyy","1-jan-2021","31-Dec-2023")
print datediff("w","1-jan-2021","31-Dec-2023")
print datediff("h","1-jan-2021","31-Dec-2023")
print datediff("n","1-jan-2021","31-Dec-2023")
print datediff("s","1-jan-2021","31-Dec-2023")

print("day")
print(day(date))


print("formatdatetime")
d=cdate("1-1-2023 13:45")
print(formatdatetime(d,0))
print(formatdatetime(d,1))
print(formatdatetime(d,2))
print(formatdatetime(d,3))
print(formatdatetime(d,4))

Print (hour(d))
Print (minute(d))
Print (second(d))
Print (isdate(d))

Print (month(d))
Print (monthname(2))
Print (time)

print(weekday(date,2))
