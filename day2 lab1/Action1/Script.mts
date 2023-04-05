Systemutil.Run"C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").WaitProperty "visible", True, 10000 @@ hightlight id_;_2143805248_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").WaitProperty "visible", False, 10000
wait(5)
if WpfWindow("HPE MyFlight Sample Applicatio").Exist(50) then
   msgbox "MyFlight Sample Applicatio is available"
Else 
    msgbox "MyFlight Sample Applicatio is not available"
End If 

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_2143821232_;_script infofile_;_ZIP::ssf2.xml_;_
wait(10)
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "6410ade7ed8d730bedd6" @@ hightlight id_;_1950896552_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_1950894824_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").Click 326,179 @@ hightlight id_;_3999840_;_script infofile_;_ZIP::ssf9.xml_;_
