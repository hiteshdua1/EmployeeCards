# EmployeeCards

Live on https://engineer-ai.herokuapp.com/

A simple app 

### Problem Statement :
As shown in the box above, where first headline is ‘Employee Name’ and second line in the box
is employee designation.

```
var list = [{

empName: ‘Jon’,
designation : ‘Front End Developer’,
joining_date:’23/10/2015’,
age: 23
},
{
empName:’Viki’,
designation : ‘Ios Developer’
joining_date:’24/01/2015’,
age: 20
},
{
empName: ‘Manoj’,
designation : Back End Developer’
joining_date:’25/10/2015’,
age: 43
}];
``` 

Please write the code for following using html, css and javascript( You can use jquery plugin as
per your requirement.) -

i) Implement the code as the image shown above using the data list where ‘empName’ is the
‘Employee Name’ and ‘designation’ is ‘Employee Designation’.
ii) At the bottom of page you have to display the number of boxes inserted(as shown in the
image above) and increment the number of box whenever a new box is inserted, also it should
maintain the number of boxes even if user refresh the page.
iii) In one minute time interval insert a new box in the the container with the same name ,
reverse of the age(if age 23 then new age should be 32), and joining date should be
incremented by one as data is given in above list.
For eg if first row entry is -
```
{

name: ‘Jon’,
designation : ‘Front End Developer’,
joining_date:’23/10/2015’,
age: 23
}
```
Then 5th entry in the table should be -
```
{

name: ‘Jon’,
designation : ‘Front End Developer’,
joining_date:’24/10/2015’,
age: 32
}
```

6th entry in the table should be-
```
{
name:’Viki’,
designation : ‘Ios Developer’
joining_date:’25/01/2015’,
age: 02
}
```
iv) Stop timer when 8th box is inserted in the container.

v) On hover of name it should display the joining date.
