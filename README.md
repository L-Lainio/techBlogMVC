# techBlogMVC
Week-14 Challenge Model-View-Controller (MVC): Tech Blog

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![GITHUB](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Lora Lainio](https://img.shields.io/badge/Lora-Lainio-4baaaa.svg)

## Table of Contents

 * [Description](#description)

 * [Screenshots](#screenshots)

 * [Technologies-Used](#technologies-used)

 * [Installation](#installation)

 * [Test-Instructions](#test-instructions)

 * [License](#license)

 * [Questions](#questions)

## Description

Your task is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers' posts as well. You will create this site from scratch and deploy it to Render. The app should follow the MVC paradigm, using Handlebars.js for templating, Sequelize as the ORM, and the express-session npm package for authentication.

As a developer who writes about tech, I want a CMS-style blog site so that I can publish articles, blog posts, and my thoughts and opinions.

When I visit the site for the first time, I should be presented with the homepage containing existing blog posts, navigation links for the homepage and dashboard, and the option to log in. Clicking on the homepage option should take me to the homepage. If I click on any other links in the navigation, I should be prompted to sign up or sign in. Upon choosing to sign up, I should create a username and password, which will be saved when I click the sign-up button, logging me into the site.

Upon revisiting the site and choosing to sign in, I should enter my username and password. Once signed in, I should see navigation links for the homepage, dashboard, and the option to log out. Clicking on the homepage option in the navigation should take me to the homepage with existing blog posts displaying the post title and date created.

If I click on an existing blog post, I should see the post title, contents, post creator's username, and date created, with the option to leave a comment. Entering a comment and clicking submit while signed in should save the comment and update the post to display the comment, the comment creator's username, and the date created.

Clicking on the dashboard option in the navigation should take me to the dashboard, showing any blog posts I have created and allowing me to add a new blog post. Adding a new blog post should prompt me to enter a title and contents, which will be saved when I click the create button, taking me back to an updated dashboard with the new post.

When clicking on one of my existing posts in the dashboard, I should be able to delete or update the post and then be taken back to an updated dashboard. Clicking on the logout option in the navigation should sign me out of the site. If I am idle on the site for more than a set time, I should still be able to view posts and comments but prompted to log in again before adding, updating, or deleting posts.

## Screenshots & GIF


## Technologies-Used

Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views, use the [pg](https://www.npmjs.com/package/pg) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a PostgreSQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

  * Uses the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views.


## Installation


## Test-Instructions

Test and Debug:

Test your application to ensure that it functions as expected. Debug any issues that arise during testing to ensure a smooth user experience.
By following these installation steps and setting up the necessary libraries and project structure, you can start working on the Week 5 Challenge - Third-Party APIs: Task Board successfully.

## License

NOTICE: This application is covered under the MIT License

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/L-Lainio)

<a href="mailto:lora.lainio.it@gmail.com">lora.lainio.it@gmail.com</a>
