# Project 2 for CSCI-355: Internet and Web Technologies

**Course**: CSCI-355: Internet and Web Technologies  
**Instructor**: Professor Nikola Baci  
**Group Members**:  
  i) Md Akram Hossain  
  ii) Mubasshir Al Shahriar  
**Session**: Summer 2025  

## Commit History
(Here keeping together only the main and mentionable commits, changes, modifications, works to keep track, collaborate, and to make sure viewers can get a good overview of the gradual development process of our project)


### Commit #1: Initial index.html  
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 24, ~9:50 p.m.  

- Created the initial `index.html` file.  
- This commit establishes the basic structure of the homepage.  
- Changes or modifications may be needed later based on upcoming files and Md Akram Hossain’s contributions.  
- Next step: Create an initial CSS file specifically for this page.  
- Md Akram Hossain is working on a comprehensive CSS file to enhance the styling of all `.html` pages. Until the updated CSS is received, this `index.html` and a temporary testing CSS file will be used.

### Commit #2: Small modifications to index.html  
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 24, ~10:24 p.m.  

- Fixed the skeleton footer section of `index.html`.  
- Made minor text changes.  
- Assigned a better project name and updated it on the homepage.

### Commit #3: Created a testing CSS file for index.html  
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 24, ~10:45 p.m.  

- This is just a basic testing CSS file to check and take decision about index.html. Md Akram Hossain will replace this one with an enhanced CSS file, where Mubasshir Al Shahriar and Md Akram Hossain both are currently working on.
- This is a temporary styling solution to visualize the appearance of the index page.  
- The CSS is a modified version of a previous testing file.  
- Awaiting Md Akram Hossain’s comprehensive CSS file, which I contributed too, to replace this temporary version.


### Commit #4: Uploaded the backend folder with some required backend files  
**Author**: Md Akram Hossain
**Date, Time**: July 25, ~10:40 p.m.  

-<!--Expecting Md Akram Hossain to update this part here and write what he uploaded just to keep track-->....   
Files
server.js
-Purpose: The main backend entry point, implementing an Express web server to handle HTTP requests, API logic, and serve the frontend.
- Key Features:
Starts the Express server (port 3000).
- Handles /api/start-quiz endpoint to send random questions to the client.
- Handles /api/submit-quiz endpoint to score answers and return results.
- Why It’s Necessary: This file is critical as it defines the backend, enabling API functionality and serving the application live.
package.json
- Purpose: Defines Node.js dependencies (e.g., express, cors), scripts, and project metadata.
- Key Features:
Ensures consistent dependency installation via npm install.
Required for cloud deployment platforms like Render or Railway.
- Why It’s Necessary: Acts as the project’s manifest, essential for running and deploying the server.
package-lock.json
Purpose: Automatically generated file that locks dependency versions for consistent, reproducible builds.
- Why It’s Necessary: Ensures environment consistency across development and deployment (optional for GitHub but recommended).
questions.json
- Purpose: Stores quiz questions, answer choices, and correct answers in an easily accessible format.
- Key Features:Read by the server to randomly select and send questions to the client.Supports easy updates or additions to the question set.Why It’s Necessary: The quiz functionality depends on this file for its question data.
- Express Definition
- Express: Operating at high speed.

### Commit #5: Pushed quiz.html front end file  
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 25, ~07:36 p.m.  

- This html file contains the basic structure and main interface of the quiz page. 
- As I am not done with the app.js server-side work yet, also have not pushed that yet, and the CSS file is not completely ready yet, this file should only show the skeleton version. - To make it actually dynamic, and to make the questions appear, I am working on server-side part too, which I will push next. 
- Also, on this file, have added a script with a relative part of 2 sound file, which I am trying to make working, but need to wait until I finish the app.js part and also choose and upload actual sound tracks.

### Commit #6: Pushed app.js file  
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 25, ~08:45 p.m.  


- Current version (till now) completely coded by me.
- This file contains almost all main frontend logic for all dynamic features and makes connection between files. 
- I have created this and tested this locally with other sample files, it is working correctly. 
- Might need to make some changes later to host and make it live properly. 
- This app.js handles page switching, built for API requests (will have to work more if need anything else later), timer, sound effects, dark mode, answer selection, score computation etc. 
- It basically controls the navigation and user experience across all pages too. 
- Though I have not put any audio track in Github's directory yet (as of 8:45 pm, July 25), in my local machine (my laptop) I have tested with sample sound track too and it worked well after some trial and error. 
- Next, I will upload appropriate sound track, adjust the path/directory in quiz.html file if needed. Then, I will work further with the CSS file and study the files Md Akram Hossain working on and make any adjustment if necessary. 
- Once these are done, I will start working on backend hosting. 


### Commit #7: Pushed sounds folder with appropiate audio files  
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 25, ~09:35 p.m.
- Chose and downloaded a short audio file. 
- Implementing it through app.js and adding it to quiz.html page to play after answering each question to let user instantly know if their attempt going correct or wrong.
- Tested it locally, working correctly.

 ### Commit #8: Uploaded the backend folder with some required backend files  
**Author**: Md Akram Hossain
**Date, Time**: July 25, ~10:50 p.m.

- DEsi gned result.html page
- This page will show the current results of the quiz
- currently working on another page which will show the full result of the attempts

### Commit #9: Pushed the result.history html page  
**Author**: Md Akram Hossain
**Date, Time**: July 25, ~11:20 p.m.

- Designed resultHistory.html page
- This page will show the total results of the quiz score
- few things needed to be fixed otherwise
- asking partner to check my files and make adjustment if necessary
  
<h3 style="color: blue;"> Some Mentionable Updates from Mubasshir: </h3>
**Date, Time**: July 26, ~12:19 a.m.

- Currently I am checking all the files Md Akram Hossain has worked on so far. Expecting him to check mine to stay on the same page.
- Checked the results.html and results_history.html files pushed by Md Hossain, everything looks perfect so far.  
- Just fixed the footer of the results_history.html page designed by Md Akram Hossain so that the footer looks same in the pages I designed and in pages Hossain has designed.
- Next I am gonna check the CSS file and make additional changes that I have already prepared, and make any other changes if really needs.
- After that, I will communicate with Hossain and start working on backend's hosting. These are the current plans for the remaining phase of this project (project #2 part).


### Commit #10: Enhanced CSS by Md Akram Hossain  
**Author**: --
**Date, Time**: --

<!-- Keeping this place blank and asking my partner Md Akram Hosssain to update it with the information about the enhanced version of CSS file he uploaded few hours ago. Keeping this section as Commit #10 so that we both can keep track of the flow of the work and it doesn't get messed up.-->


### Commit #11: Further modifying the enhanced CSS file (update 3.1) ehich was initially deployed by Md Akram Hossain 
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 26, ~01:35 a.m.


- On this commit I am making some addition, further enhancement, small modifications on the initial CSS Md Akram Hossain has deployed.
- Modification on navbar: some small design changes. 
- Made an animated gradient background here for the home page. 
- Made the question mark symbol/SVG bounce so that it looks more lively & interacting.


### Commit #12: Final Deployment (Till Project #2 part, would need to work more to satisfy the requirements of Project #3). 
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 26, ~03:47 a.m.

- Done making finishing touch before deployment on Heroku.
- Created and added Procfile which is an essential to complete the deployment on heroku properly.
- Added process.env.PORT as a port in the server.js (coded by Md Akram Hossain) in order to deploy on heroku.
- Added another necessary dependency (start) manually on the package.json file so that so that heroku can recognize that it needs to run server.js.
- Finally, deployed the project (till current update) successfully on heroku, and our web application "Quiz College" is live now!
- Tested the deployed project. It is running perfectly, smoothly, and also perfectly accessible.
- URL for the deployed project: https://quizcollege-390a56929cad.herokuapp.com/


### Commit #13: Favicon png icon/logo 
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 26, ~04:40 a.m.

- Designed a basic icon/logo for the web pages.
- Added it to html pages of our project.



### Work for the project 3 starts here.... Some necessary updates and planning: 
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 28, ~01:01 a.m.

- I have started working on backend, trying to learn basics about MongoDB, Mongoose.
- I have started working server.js file, which in project 2 was mostly developed by Md Akram Hossain with very little modification by me during the deployment phase.
- While modifying the server.js to meet requirements of project 3, I am assuming that we will have signup and login pages named as "signup.html" and "signin.html."

**For now, I am expecting Md Akram Hossain to start working on "signin.html," and inside the signin page, please refer to the sign up page's directory as "signin.html", no need to add anything else before it, as we will put these files in same folder when we gather everything together.**


### Commit #14: Signup Page 
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 28, ~07:35 a.m.

- I have finished working on the signup page front end, also wrote logics, fetch, to make it work soon.
- I have also finished working on backend to do the authentication with both sign up and sign in, assuming that Md Akram Hossain will complete and upload a page named "signing.html". I have set up the server.js assuming it.
- I have also connected the mongo db, currently trying to upload each user's data to mongo db. For that reason, I am not pushing the updated server.js right now as it needs more works. I will push final server.js once everything is finalized.

### Commit #15: SignIn Page 
**Author**: Akram Hossain  
**Date, Time**: July 28, ~3:35 p.m.

- I have finished working on the SignIN page front end.
- Expecting Partner for to finish backend part for the signin page.

### Commit #16: LeaderBoard 
**Author**: Akram Hossain  
**Date, Time**: July 28, ~3:35 p.m.

- I have finished working on the LeaderBoard page front end.
- Expecting Partner for to finish backend logic part for the LeadeBoard page.so it can count the percentage instead of direct scores

### Commit #17: Result and Results history page
**Author**: Akram Hossain  
**Date, Time**: July 28, ~4.11 p.m.
Shared Result View: Displays a public quiz result fetched from the server using a unique result ID passed via URL query parameter (?id=).Personal Result View: Shows the user's recent quiz result stored in localStorage after completing a quiz.
Fetches and displays shared quiz results from the server using /api/result/{id}.Shows personal quiz results from localStorage.this is the modified version of the older 1


### Commit #18: Results history page
**Author**: Akram Hossain  
**Date, Time**: July 28, ~5.11 p.m.
Authentication:
#1. Checks for a token in localStorage and redirects to signin.html if absent.
Includes a redundant check at the top of the page to ensure reliability, as the app.js version was unreliable in some cases.
#2. API Fetch:
Fetches user history from /api/user-history?username=<username>.
Handles errors (e.g., network issues or no results) with user-friendly messages.
#3. Result Rendering:
Sorts results by date (oldest first) and generates HTML for each attempt.
Displays score, date, and a detailed summary with color-coded answers (green for correct, red for incorrect).


### Commit #19: Profile page 
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 28, ~05:03 p.m.

- I have kept it protected too so that it is accessible when user is logged in (checks for token in localStorage, redirects to signin otherwise). The main logic part of this you can find inside app.js, I have developed it there and instructed Md Akram Hossain to utilize it in the pages he was working (if he thinks it is needed for those pages).
- It fetches user quiz history and stats from backend (/api/user-history) using the stored username.
- Also, displays a welcome/greeting, then shows an overview of the specific player like highest score, total quiz attempts, and then showed the chronological list of all quiz attempts (with date and score).
- I kept the "Start New Quiz" button to make navigation easier.
- Also defined how to handle error by showing error messages if unable to load history.



### Commit #20: index.html mofidication for project 3 (Full and Final version, update 4.1.0) 
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 28, ~05:14 p.m.

- Adding new pages which we had to create additionally for project #3 (merged version)

- Updating information about the features as we have added some new features for the new update (Project 3)

- This should be the final version of index.html (home page) of our project's final version (Project 3).



### Commit #21: quiz.html mofidication for project 3 (Full and Final version, update 3.1.1) 
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 28, ~05:25 p.m.

- I have modified and further enhanced quiz.html with user-customizable quiz options using Trivia API considering the requirements and options for project 3

- When I worked on project 2, I worked on this entire section, but it was so plain and straight used to load questions from question.json file. Now, as we are switching to Trivia API to load questions, I followed my instructors suggestions to make the game more interesting.

- Implemented a modal dialog (triggered on page load) allowing users to select quiz difficulty, category, and number of questions before starting the quiz.

- It dynamically fetches and populates available trivia categories from the Open Trivia DB API using JavaScript (fetch call in DOMContentLoaded).

- Difficulty selection is mapped to age ranges (easy: <13, medium: 13-19, hard: >19) to promote balanced competition and appropriate question sets.

- Users can set number of questions (5–50) for a personalized quiz length (Ofc thanks to Trivia API), and also to the instructor for suggesting and introducing it.

- All selections are passed to the backend to generate quizzes accordingly.

- I have now mad it completely integrated with existing quiz flow, navigation controls, dark mode toggle, and audio feedback (correct/wrong sounds).

- I believe it Improves user experience and fairness, making the leaderboard more meaningful across different age groups. As I worked with this Trivia API, I instructed my partner to modify and update the leaderboard.html page according to this as he was working on that part



### Commit #21: Modified final CSS for project 3 (update 4.1) 
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 28, ~05:25 p.m.


- This last modification of our CSS file is made by Mubasshir Al Shahriar, although the main file was initially designed by Md Akram Hossain with some small contributions and later modifications by Mubasshir Al Shahriar.

- For the modifications it needed for project 3 was done by Mubasshir Al Shahriar. Here I have added some new classes for the "difficulty-modal" and "difficulty-content."

- Any other changes/modifications that I made previously on this file (update 3.1) were for project 2.
