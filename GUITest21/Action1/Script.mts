set obj1=createobject("Scripting.Dictionary")
obj1.Add "10001","leena"
obj1.Add "10002","reena"
obj1.Add "10003","seena"
 
For each i in obj1.Items 
    msgbox i
	
Next

obj1.Remove "10002"
For each  i in obj1.Items 
	 msgbox i
Next

If obj1.Exists ("10002") Then
	msgbox "10002 is exists"
	
	else
	msgbox "10002 not exists"
	
End If
