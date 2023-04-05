systemutil.Run "https://demo.opencart.com/"
Browser("Your Store").Page("Your Store").Link("My Account").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Your Store").Page("Your Store").Link("Register").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("firstname").Set "abc" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("lastname").Set "d" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("email").Set "abcd@gmail.com" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("password").SetSecure "64098cc4583d655146d35f05932cd820872e167f0fc2701a" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Your Store").Page("Register Account").WebCheckBox("agree").Set "ON" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf8.xml_;_

Browser("Your Store").Page("Your Store").WebElement("top").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Your Store").Page("Your Store").Link("My Account").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Your Store").Page("Your Store").Link("Login").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("email_2").Set "abcd@gmail.com" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("password").SetSecure "640b1be21266c43a8c7ce91c850115f8cacfea447e1c5e0a" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Login").Click @@ script infofile_;_ZIP::ssf14.xml_;_

Browser("Your Store").Page("Register Account").Link("My Account").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Your Store").Page("Register Account").Link("Login").Click @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("email_2").Set "abcd@gmail.com" @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("password").SetSecure "640b1c33f3af10370170da2d75a112d4013c12daf0787ec6a2f172665b4df97bc0918994" @@ script infofile_;_ZIP::ssf24.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Login").Click @@ script infofile_;_ZIP::ssf25.xml_;_
