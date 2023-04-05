Dim var1
Dim var2
Public var3
Call prod()
Function prod()
	
	Var1 = 2
	Var2 = 5
	Var3= Var1 * Var2
	Msgbox Var3   'Displays 10 , the product of two values
End Function

Msgbox Var1   'Displays 2 as Var1 is declared at Script level 
Msgbox Var2   'Displays 5 as Var2 is declared at Script level 
Msgbox Var3   'Displays 10 as Var3 is declared as Public

