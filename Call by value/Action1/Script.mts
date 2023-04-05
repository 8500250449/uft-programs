Dim a


a=5
Function callbyref(byval var)
	   
	   var=10
	   msgbox var
End Function

call callbyref(a)
msgbox a
