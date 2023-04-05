 Dim obj
Set obj=description.Create()
obj("micclass").value="Link"


Set chl=Browser("amazon - Google Search").Page("amazon - Google Search").ChildObjects(obj) @@ script infofile_;_ZIP::ssf18.xml_;_

msgbox chl.count

For i= 0 To chl.count-1 Step 1
	print chl(i).GetRoProperty("innerhtml")
Next
 @@ script infofile_;_ZIP::ssf19.xml_;_
