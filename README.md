# Public API Requests

Communicating with APIs allows you to work with microservices and with vast databases to build useful tools and relevant information quickly and easily. You can build utilities, games, infographics, and more. You can also integrate, display, and analyze social media and large data sets without having to create and curate them yourself.

For this project, you'll build an app for a fictional company called Awesome Startup, a distributed company with remote employees working all over the world. They need a smart way for employees to share contact information with each other.

You’ll use the Random User Generator API (https://randomuser.me/) to grab information for 12 random “employees,” and use that data to build a prototype for an Awesome Startup employee directory.

You’ll request a JSON object from the API and parse the data so that 12 employees are listed in a grid with their thumbnail image, full name, email, and location. Clicking the employee’s image or name will open a modal window with more detailed information, such as the employee’s birthday and address.

You may use jQuery with this project, but other frameworks, libraries or plugins are not permitted. While there are plugins that can help with the creation of a gallery and modal setup, it is important for developers to be able to understand how tools like that work "under the hood". So you'll need to write all your own JS or jQuery to create the necessary functionality for this project.

After building this project, you'll have yet another excellent portfolio piece to show off and demonstrate your incredible skills, which will now include working with public APIs, making API requests, and asynchronously handling the data that will be returned from your requests and displayed in an app.


## Project Instructions

* Create your js/scripts.js file and wire it up to the HTML
  * You may use jQuery if you like.

* HTML  
  * You'll be provided with a basic index.html file to use in your project. But this file is missing the main components of the app, which you will need to create and add to the DOM dynamically.

* Structure, style and CSS
  * Your finished project should match the general position and layout of the mockups. If you you followed the arrangement and attributes of the template markup in the HTML comments, then the provided styles should accomplish this for you.

* Get and display 12 random users
  * With information provided from The Random User Generator API, send a request to the API, and use the response data to display 12 users, along with some basic information for each:
    * Image
    * First and Last Name
    * Email  
    * Ciry or location

* Create a modal window
  * When any part of an employee item in the directory is clicked, a modal window should pop up with the following details displayed:
    * image
    * Name
    * Email
    * City or location
    * Cell Number
    * Detailed Address, including street name and number, state or country, and post code.
    * Birthday
  * Make sure there’s a way to close the modal window

* Add good code comments

* Check for cross-browser consistency


## Extra Credit

* Search
  * Add a way to filter the directory by name. To do this, you’ll need to adjust your API request to retrieve a user nationality that will only return data in the English alphabet.

* Modal toggle
  * Add a way to toggle back and forth between employees when the modal window is open.
  * There should be no errors once the end or beginning of the list is reached.

* Structure, style and CSS
  * Add or change at least one of the following:
    * color
    * background color
    * font
    * box or text shadows


## Custom CSS
  * Added box shadow around card div elements.
  * Changed header h1's font size to 1.5em, and font color to rgba(51, 102, 255, 0.9);.
