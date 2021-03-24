# angularRouting
                            Basic Setup

1)create an angular app.

2)We gonna use navigation bar which for that we will copy below code in our HTML file.

Copy Below Code to app.component.html file
```html

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand">Let's Learn Routing</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a>Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
  

```

3)We are going to add bootstrap. It is only just to see our element style rendered perfectly
This is optional, it has no relation with the concept of routing. 
Please add in index.html file in the head element
```html
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
```

4) Run the application and see our application. It should look like below screenshot. 

![image](https://user-images.githubusercontent.com/34305933/112254723-74775680-8c37-11eb-8074-1f44a861da3f.png)



5) Now we have to create component for Home, Iphone, Laptop and Tablet. As we will use for navigation.

so we will create component for each feature.

```
/*Please run below commands..In real project it is good to create different folders for differnt features.
So I am creating component in new folders*/

ng g c home/home   
ng g c iphone/iphone
ng g c laptop/laptop
ng g c tablet/tablet
```
6) Final Check before we start our Routing Concept. Open app.module.ts. Please see all components are imported and declared.

![image](https://user-images.githubusercontent.com/34305933/112248599-8dc6d580-8c2c-11eb-9755-1dca61dc73b0.png)


##Steps of Routing Concept in Angular

Step 1: Create app-routing file. If it is new project you may have to create it, as in our case we will create it. 

Use below code to generate app-routing File

```

ng g m app-routing --flat --module=app

\\--flat puts the file insrc/app instead of its own folder.
\\--module=app tells the CLI to register  it in the imports array of the AppModule
```
Your app-routing file look like this

![image](https://user-images.githubusercontent.com/34305933/112249981-0b8be080-8c2f-11eb-8bcc-c9e0e47f14e3.png)

This is how my components and root files look like till now.

![image](https://user-images.githubusercontent.com/34305933/112250222-63c2e280-8c2f-11eb-9b29-d0ad2244b95b.png)


Step 2 : app-routing.module.ts

a. imports RouterModule and Routes so the application can have routing functionality.

```ts
import {RouterModule,Routes} from '@angular/router'
```
b. We can remove CommonModule and declaration array as it unnecessary at the moment.
We wil import RouterModule

```ts
@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
```
The @NgModule metadata initializes the router and starts it listening for browser location changes.
The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot():
The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.

c. Export RouterModule so it can be available throughtout the app.

```ts
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
```

d. Configure our Routes. Routes tell the Router which view to display when a user clicks a link or pastes a URL into addressbar.

A typical Angular Route has two properties:
path: a string that matches the URL in the browser address bar.
component: the component that the router should create when navigating to this route.
```ts
//make sure the component are imported
const routes:Routes = [
  {
    path:'home', 
    component:HomeComponent
 },
 {
  path:'iphone', 
  component:IphoneComponent
},
{
  path:'laptop', 
  component:LaptopComponent
},
{
  path:'tablet', 
  component:TabletComponent
},
]
```

--- the code till now in app.routing.module.ts look like as below till now. Cross check your flow.

```ts
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { HomeComponent } from './home/home/home.component';
import { IphoneComponent } from './iphone/iphone/iphone.component';
import { LaptopComponent } from './laptop/laptop/laptop.component';
import { TabletComponent } from './tablet/tablet/tablet.component';

const routes:Routes = [
  {
    path:'home', 
    component:HomeComponent
 },
 {
  path:'iphone', 
  component:IphoneComponent
},
{
  path:'laptop', 
  component:LaptopComponent
},
{
  path:'tablet', 
  component:TabletComponent
},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

```


Step 3 :Adding Routes to our Application . i.e in out app.component.html file

a. Add routerLink inside anchor tag to add route.
```html
      <li><a routerLink="/home">Home</a></li>
      <li><a routerLink="iphone">Iphone</a></li>
      <li><a routerLink="/laptop">Laptop</a></li>
      <li><a routerLink="/tablet">Tablet</a></li>


```

b. add <router-outlet> </router-outlet>

```html
<router-outlet></router-outlet>
```

--- the code till now in app.component.html file look like as below till now. Cross check your flow.

```html
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" >Let's Learn Routing</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a routerLink="/home">Home</a></li>
      <li><a routerLink="iphone">Iphone</a></li>
      <li><a routerLink="/laptop">Laptop</a></li>
      <li><a routerLink="/tablet">Tablet</a></li>
    </ul>
  </div>
</nav>

<router-outlet></router-outlet>
```

Basic Routing is done. We can test it now.

Test 1: Run the application and test it

I am attaching a screenshot that it works.
![image](https://user-images.githubusercontent.com/34305933/112256277-f23c6180-8c39-11eb-9f8c-bd2b4e200d61.png)

.
