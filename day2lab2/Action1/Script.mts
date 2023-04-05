Systemutil.Run"https://www.mcdelivery.co.in/"
 Browser("McDonald's - Order McDonald's").Page("McDonald's - Order McDonald's").waitproperty "visible", True, 10000
 Browser("McDonald's - Order McDonald's").Page("McDonald's - Order McDonald's").waitproperty "visible", false, 10000
 wait(5)
 
If Browser("McDonald's - Order McDonald's").Page("McDonald's - Order McDonald's").Exist(50) then
	msgbox "McDonalds web page is available"
else
   msgbox "McDonalds web page is not available"
End If
Browser("McDonald's - Order McDonald's").Page("McDonald's - Order McDonald's").Sync 
Browser("McDonald's - Order McDonald's").Page("McDonald's - Order McDonald's").WebElement("Login / Sign Up").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("McDonald's - Order McDonald's").Page("McDonald's - Order McDonald's").WebElement("Login Via Password").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("McDonald's - Order McDonald's").Page("McDonald's - Order McDonald's").WebEdit("email").Set "8500250449" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("McDonald's - Order McDonald's").Page("McDonald's - Order McDonald's").WebEdit("password").SetSecure "6410b93bcbc495733dc1cc771bc1ff8381dbbff8efae33710ada" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("McDonald's - Order McDonald's").Page("McDonald's - Order McDonald's").WebButton("Login").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("McDonald's - Order McDonald's").Page("McDonald's - Order McDonald's").WebEdit("password").SetSecure "6410b94c2582" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("McDonald's - Order McDonald's").Page("McDonald's - Order McDonald's").Image("close").Click @@ script infofile_;_ZIP::ssf7.xml_;_
 @@ script infofile_;_ZIP::ssf8.xml_;_
