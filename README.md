# FullStack Stock Media Library

#### Project Scope: Create a Full Stack Application that requires user authentication. I chose to make a Stock Media Library Site where the user can search for images or videos of what they want and save it in their "saved" media section. If they don't like the image or video generated, they can click on "more" to get another item.

- Home Page:
![Home Screenshot](/homeScreen.png)
- LogIn Page:
![LogIn Screenshot](/loginScreen.png)
- SignUp Page:
![SignUp Screenshot](/signScreen.png)
- Media Board:
![Profile Screenshot](/profileScreen.png)

# How it was made:
#### HTML5, CSS3, Javascript, API, JSON, Node.js, Express, EJS, MongoDB

# Optimizations:
#### Use of the the pixabay API to generate stock images and videos.

# Lesson Learned:
#### I learned that if the user clicks on video and then photo, the program would think that it had a "video src". So, I had to use the e.target properties to discern if the user saved a photo or video. I also learned that iframes have outlines by default, so I had to make sure to hide the iframe if a video was not generated.

## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `node server.js`
2. Navigate to `localhost:8080`

## Credit

Modified from Scotch.io's auth tutorial
