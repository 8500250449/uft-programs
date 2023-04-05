Dim Num1
Dim Num2
Private Num3

Call prod()
Function prod()

  Num1 = 2
  Num2 = 5
  Num3 =  Num1*Num2
  Msgbox ("The product of two values : " &Num3 )  'Displays 10 , the product of two values
  
  End Function
  
  Msgbox ("Num1 is declared at Script level and so it returns : " &Num1 ) 
  Msgbox ("Num2 is declared at Script level and so it returns : " &Num2) 
  Msgbox ("Num3  is available for this Script and so it returns : " &Num3 ) 
