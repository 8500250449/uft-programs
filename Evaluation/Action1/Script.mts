Dim obj1
Set obj1=createobject("scripting.dictionary")
obj1.Add "1001" , "Namrata :Pune"
obj1.Add "1002" , "Rajendra :Mumbai"

For each i in obj1.Items 
msgbox i	
Next

Id=inputbox("Enter the Employee id",Id)
msgbox Id
Name=inputbox("Enter the Employee name", Name)
msgbox name
location=inputbox("Enter the Employee location",location)
msgbox location

print Id 
print name
Print location

If obj1.Exists(id) Then
	msgbox " Employee Id already exists"
	

End If

For each i in obj1.Items 
msgbox i	
Next




