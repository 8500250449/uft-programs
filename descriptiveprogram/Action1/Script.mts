Systemutil.Run"C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

'WpfWindow("devname=HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john"
'WpfWindow("devname=HPE MyFlight Sample Applicatio").WpfEdit("password").Set "HP"
'WpfWindow("devname=HPE MyFlight Sample Applicatio").WpfButton("OK").Click

Dim win,agentName,password,okbutton
Set win=Description.Create()
Set agentName=Description.Create()
Set password=Description.Create()
Set okbutton=Description.Create()
win("devname").value="HPE MyFlight Sample Application"
agentName("devname").value="agentName"
password("devname").value="password"
okbutton("text").value="OK"
WpfWindow(win).WpfEdit(agentName).Set "john"
WpfWindow(win).WpfEdit(password).Set "HP"
WpfWindow(win).WpfButton(okbutton).Click
WpfWindow(win).Close
