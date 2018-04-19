# Net Music Player  
> Module - Applied Project and Minor Dissertation / 4th Year      
> Supervisor - Kevin O'Brien           
> [Final Project Year4 and Minor Disseration](https://github.com/w326004741/Final-Project-Year4/tree/master/Final%20Year%20Minor%20Dissertation)      
> Video Link - https://www.youtube.com/watch?v=ZgPW87Lhnno    

> by - [Weichen Wang](https://github.com/w326004741)

## Table of Contents:
1. [Overview](#overview)
2. [Nedd Components](#need-components)
3. [How to use this repository](#how-to-use-this-repository)
4. [How to Run](#how-to-run)
5. [What is Ionic Framework?](#what-is-ionic-framework)
6. [Architecture](#architecture)
7. [Firebase Authentication](#firebase-authentication)
8. [Function Code](#function-code)
9. [Reference](#reference)
## Overview
This is a Music Player of mobile app project with [Node.js](https://nodejs.org/en/), uses [Ionic3 framework](https://ionicframework.com/), [Google Firebase](https://firebase.google.com/) as a database, [Heroku](https://www.heroku.com/platform) as a cloud deploy platform, [Visual Studio Code](https://code.visualstudio.com/) as a code editor and test execution.

## Need Components:
-  [Ionic Framework](https://ionicframework.com/getting-started)
-  [XCode](https://developer.apple.com/xcode/)
-  [Visual Studio Code](https://code.visualstudio.com/)
-  [Node.js](https://nodejs.org/en/)


## How to use this repository:
#### [Get started with Ionic Framework](https://ionicframework.com/getting-started)

#### 1. Install Ionic: 
```
npm install -g ionic
```

First, install [Node.js](https://nodejs.org/en/). Then, install the latest Ionic command-line tools in your terminal. Follow the [Android](https://cordova.apache.org/docs/en/7.x/guide/platforms/android/) and [iOS](https://cordova.apache.org/docs/en/7.x/guide/platforms/ios/) platform guides to install required tools for development.(**The IOS platform must be installed**.)


2. Click Clone or Download or Copy to clipboard.
3. Enter your Terminal(for mac) or cmd(for windows), and following below:
```
# Change directory to anywhere just you like put
cd anywhere.....

# Clone this repository
git clone https://github.com/w326004741/Final-Project-Year4.git
&
cd your folder(Final-Project-Year4)

# Enter `code .` in your terminal(open visual studio code)
```

## How to Run:
- In the [Visual Studio Code](https://code.visualstudio.com/) Terminal(cmd+shift+Y for Mac) Enter: `Ionic cordova ios run`.       

- Run and Test the Application Using the [XCode](https://developer.apple.com/xcode/) Simulator

## What is Ionic Framework?
Ionic Framework is a complete open-source SDK for hybrid mobile app development. The more recent releases, known as Ionic 3 or simply "Ionic", are built on Angular. Ionic provides tools and services for developing hybrid mobile apps using Web technologies like CSS, HTML5, and Sass. Apps can be built with these Web technologies and then distributed through native app stores to be installed on devices by leveraging Cordova.

## Architecture
The UI design of the page is based on [Ionic Native UI Component](https://ionicframework.com/docs/components/).  For example: button, loading, alert, page navigation, Music Card, Toast Notification, thumbnail, etc.

The project is based on the Ionic3 framework. Firebase is the database of the user management system. The login system is based on Firebase authentication, including Login, Sign up, and Reset Password.

The tabs control the conversion between three main pages.  These pages mainly implement music play, stop and video play.  Function implement based on [Ionic Native Plug-in](https://ionicframework.com/docs/native/) Streaming Media.

![image](https://github.com/w326004741/Final-Project-Year4/blob/master/image/ionicSystem.png)

![image](https://github.com/w326004741/Final-Project-Year4/blob/master/image/4301524152100_.pic_hd.jpg)

## Firebase Authentication:
Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

### How does it work?
To sign a user into your app, you first get authentication credentials from the user. These credentials can be the user's email address and password, or an OAuth token from a federated identity provider. Then, you pass these credentials to the Firebase Authentication SDK. Our backend services will then verify those credentials and return a response to the client.

```html
<script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCWyA_drTwdJ-_N8OA2vajNXfvKxyzh9ks",
    authDomain: "netmusic-c9a02.firebaseapp.com",
    databaseURL: "https://netmusic-c9a02.firebaseio.com",
    projectId: "netmusic-c9a02",
    storageBucket: "netmusic-c9a02.appspot.com",
    messagingSenderId: "971450191473"
  };
  firebase.initializeApp(config);
</script>
```
![image](https://github.com/w326004741/Final-Project-Year4/blob/master/image/firebaseauth5.png)

## Function Code:
#### Login:
![image](https://github.com/w326004741/Final-Project-Year4/blob/master/image/Loginfunction.png)
#### Sign Up:
![image](https://github.com/w326004741/Final-Project-Year4/blob/master/image/Registerfunction.png)
#### Reset Password:
![image](https://github.com/w326004741/Final-Project-Year4/blob/master/image/resetPasswordfunction.png)
#### Logout:
![image](https://github.com/w326004741/Final-Project-Year4/blob/master/image/logout.png)
#### Play Audio: 
![image](https://github.com/w326004741/Final-Project-Year4/blob/master/image/playAudio.png)
#### Stop Audio:
![image](https://github.com/w326004741/Final-Project-Year4/blob/master/image/stopAudio.png)
#### Play Video:
![image](https://github.com/w326004741/Final-Project-Year4/blob/master/image/playVideo.png)
## Reference
- [Solution of deploy a Web App of Ionic3 Project to Heroku](https://stackoverflow.com/questions/43701033/ionic-pwa-deploy/43701116)

- [Node.js](https://nodejs.org/en/)     
- [Ionic3 framework](https://ionicframework.com/)      
- [Google Firebase](https://firebase.google.com/)     
- [Heroku](https://www.heroku.com/platform)     
- [Visual Studio Code](https://code.visualstudio.com/)      
- [Ionic Native UI Component](https://ionicframework.com/docs/components/)      
- [Ionic Native Plug-in](https://ionicframework.com/docs/native/)


## Question
###### *update at 2018/2/13*
[What is the difference between ionic build & ionic serve](https://github.com/w326004741/Final-Project-Year4)

[What is function of the package.json in Ionic](https://github.com/w326004741/Final-Project-Year4)

[What is function of the main.js in Ionic & Why need to create the main.js file to be deployed](https://github.com/w326004741/Final-Project-Year4)

What is function of the server.js & Why

What is function of `npm start`

What is function of `npm install express --save`
