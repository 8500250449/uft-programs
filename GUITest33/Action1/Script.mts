Dim objfso
Set objfso=CreateObject("Scripting.FilesystemObject")
'objfso.CreateFolder "C:\Users\uft"
objfso.CreateTextFile "C:\Users\uft\sample.txt"
objfso.CreateTextFile "C:\Users\uft\sample.doc"
objfso.CreateTextFile "C:\Users\uft\sample.pdf"
objfso.CreateTextFile "C:\Users\uft\sample.txt"
Set objfso=nothing
