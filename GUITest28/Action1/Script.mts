Set objexcel=CreateObject("Excel.application")
Set objworkbook=objexcel.workbooks.open(‪"C:\Users\Administrator\Documents\excel\Data.xlsx")
Set objworksheet=objworkbook.worksheets(1)

rowcount=objworksheet.usedrange.rows.count
msgbox rowcount
For i = 2 To rowcount Step 1
	
Systemutil.Run"C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set cstr(objectworksheet.cells(i,1))
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set cstr(objectworksheet.cells(i,2))
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
WpfWindow("HPE MyFlight Sample Applicatio").Close

Next

Set objworkbook = nothing
Set objworksheet = nothing


