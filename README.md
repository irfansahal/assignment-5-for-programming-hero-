# Irfan Taqi
## irfansahal1998@gmail.com
## Project Name
 assignment project.
***
## Project Live URL
[assignment project 5.](https://fluffy-cucurucho-c2c8df.netlify.app/)

*** 
## Project description And Technology that I use   
I built it with React typescript and tailwind and React toastify , I was not able to use typescript properly because time was short,
***
## Some features about your project
there are some cart of technology, you can select and add to stack and delete from stack indivitually or all of them , 
I made the top sign in and sign out button working , you can check by clicking it, it is working little bit
***

## Note 
I can build this project more clearly and more successfully if I have time,
I was not able to use typescript perfectly and add some extra feature and make it more responsive, If I have more time I can try to make  coloring bedge on base condition.
even if I had extra more time I can create pagination and show all items more beautifully 
****
***
# Question And Its Answers
### What is JSX, and why is it used in React?
JSX means JavaScript XML . It is syntax extension, it lat us write html in javascript, because html and javascript con not be written in same place I mean mixing one with other, so when we use jsx extension or make a folder react folder we can write bothe html and javascript mixing, it makes our work easy because new we don't need to separate two file 

JSX is used in react to make a file like a file where we can write html and javascript
it makes file readable for browser because browser can not understand react or other just plain javascript 

### What is the difference between props and state
props is like function parameter you can send any value or data or variable through props, it helps us send data or  whatever we need to its child components.
And state is like a recorder what saves a coponent's previous condition and when it would be updated the previous condition would be updated 

### What does the useState hook do, and where did you use it in this project?
it helps us to update previous situation for a components , I used it in this project to store stacked data in different array when a user click the "add button" in a cart 

### What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect helps us to fetch data from database,
it shows us updated data based on a specific condition, it is more useful for fetching data , for it we dont need to update or reload who window for showing updated data 

### Why does every item in a .map() list need a unique key prop?
If we don't provide a unique key for every item it shows error in browser, A unique key helps react to track every child/item by the diffrent key or id, it makes the project more safety whent we deploying 

### What is conditional rendering? Show one place you used it (example: the empty stack message).
conditional rendering means: when you seek a chain of data or many datas one into other by chaining , sometimes may you faces empty space, so if you don't use  conditional rendering in this case your application carshes, so if you use conditional rendering it means , it tells your application: if you find out any data you work withe you have to do otherwise you should't wait , even you go ahead , then your application does not crash 

###  How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
I am  always used to send data from parent to child through props, or sometime we can do it using useContext, although we did not face it in this course, yes when we need to send data from child to parent, it is impossible, becuse React is one dymansional, so if you need ever sent data to parent from children you should mount it from child to top component where two parent and children come togather, then if you need to do prop-drilling you have to do it, it is only one way to sent data to parent 

