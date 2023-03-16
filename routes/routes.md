# Routes

Routes are our different directories for our webpage. More broadly, our website pages. [index.js](index.js) is our homepage, [opportunities.js](opportunities.js) is one of many endpoints for database data. The behavior for loading these endpoints properly is defined in [../app.js](../app.js).

To be able to properly show or host data, the data needs an endpoint. Think of our data as a pipe filled with water. To be able to fill a cup (access our data), we need a faucet. Our endpoints are those faucets.

To do an html file as a custom endpoint:

1. Make a new .js file in [/routes/](/routes/), feel free to copy over the structure of adv-search or opportunities.js
2. Change the pathname in your file to be accurate to the html page's location
3. Now in app.js, define a router like opportunitiesRouter
4. Also in app.js, do app.use("{desired path}, {routerVariableName}");
5. Now if you go to localhost:3000/{desired path} it should show the html page you defined in the route
Written by @N8Hopp

