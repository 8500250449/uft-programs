Dim empDict
Set empDict = CreateObject("Scripting.Dictionary")
empDict.Add "1001", "Namrata : Pune"
empDict.Add "1002", "Rajendra : Mumbai"
 For each i in empDict.Items
 	msgbox i
 Next
empId=Inputbox("enter Employee Id:")
empName=Inputbox("enter Employee Name:")
empLocation=Inputbox("enter Location:")
If empDict.Exists(empId) Then
	msgbox "Employee Id already exists ",vbCritical,"Error"
Else  
   empDict.Add empId,empName & ":" & empLocation
   msgbox " Employee information stored successfully", vbInformation,"Success"
   
End If

Dim empDetails
empDetails="Employee Details:" & vbcrLF
For each key in empDict.keys 
 empDetails = empDetails & key & " : " & empDict.Item(key) & vbcrLF
 	
Next
msgbox empDetails,vbInformation,"All Employees"
