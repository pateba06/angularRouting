                            Basic Setup

1)create an angular app.

2)We gonna use navigation bar which for that we will copy below code in our HTML file.

Copy Below Code to app.component.html file
```JS 

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Let's Learn Routing</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
  
<div class="container">
  <h3>Inverted Navbar</h3>
  <p>An inverted navbar is black instead of gray.</p>
</div>
```

3)We are going to add bootstrap. It is only just to see our element style rendered perfectly
This is optional, it has no relation with the concept of routing. 
Please add in index.html file in the head element
```js
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
```

4) Run the application and see our application. It should look like below screenshot. 

![image](https://user-images.githubusercontent.com/34305933/112247406-a0d8a600-8c2a-11eb-8b0d-3ad4a86abb3e.png)


5) Now we have to create component for Home, Iphone, Laptop and Tablet. As we will use for navigation.

so we will create component for each feature.

```
/*Please run below commands..In real project it is good to create different folders for differnt features.So I am creating component in new folders*/

ng g c home/home   
ng g c iphone/iphone
ng g c laptop/laptop
ng g c tablet/tablet
```

