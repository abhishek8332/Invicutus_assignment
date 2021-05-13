# Invicutus_assignment

Note: code file name "App.js"

Components:
1.Varibles used:
  o	n(number taken from user)
  o	dict(object that used to implement dictionary from freq. count)
  o	text( content raw text of the file)
  o	words(use to store filtered text in the form of    array)
  o	abb(content array inside array)

2.	Functions
  •	submitFun(): calls when the submit button clicked, used to set value of ”n” and make a link to online file.

  •	Fun1(): calls from submitFun(), used to get file data, filtering data, implementing frequency counter and dictionary.
  •	Tabb():calls from Fun1(), used to fetch data from dictionary and make table of size “n”.

  •	isAlpha(): calls from fun1(), used to check whether the element is word or a number.
  
Libraries Used:
  1. React(To make the react app)
  2. Axios(To fetch the data from online file)

Test Cases:
1.	When no number is submitted:
  <pic1>
 
Output:
  <pic2>
 
2.when a number >=0 or <=max limit submitted:
 <pic3> 
 

3.when a number >max limit entered(All values will be shown with a warning)
  <pic4>
 



