# Project 2 + 3 (Merged) for CSCI-355: Internet and Web Technologies

**Course**: CSCI-355: Internet and Web Technologies  
**Instructor**: Professor Nikola Baci  
**Group Members**:  
  i) Md Akram Hossain  
  ii) Mubasshir Al Shahriar  
**Session**: Summer 2025 Semester July Session 

## Bried Report:

### Overview:

## 🎓 Quiz College

Quiz College is a full-stack quiz web application where users can create accounts, play custom quizzes, view detailed results, track performance history, and compete on a exciting looking leaderboard. To be little more narcissistic, they can even share their scorecard on social media or with their friends too! Through this project of CSCI-355 course at CUNY Queens College, Md Akram Hossain and Mubasshir Al Shahriar, under the guidance of Professor Nikola Baci, showing their expertise in both front-end and back-end web development. The quiz app delivers a dynamic, thrilling, and engaging quiz experience powered by real-time logic and Open Trivia DB API.


## 🔗 Live Site URL: https://quizcollege-390a56929cad.herokuapp.com


## Main Features:

- Dynamic quizzes.
- User can select their preferred category, difficulty level (based on age range), and number of questions they want to play before starting the game.
- Real-time scoring with instant feedback sounds. Paying attention to the sounds, you can know if you got the answer correct or not right after finalizing your answer for a question.
- Dark mode toggle and responsive UI for all devices
- User friendly, simple, nice, easy navigation system. You can easily navigate between Home, Old Results, Your Profile (Dashboard), and Leaderboard pages.
- Home page keeps you updated with what we are offering with a nice UI. You can press the "Start Quiz" button any time to go to the quiz page and start the game. Old Results shows all your previous attempts' scores with date and time. You can find the same information on your dashboard (My Profile tab) too, but it is basically your dashboard, which shows more details, like greets you with your name, shows your highest score till now, total number of attempts etc too. You can start a new game from this page too if you want. Leaderboard page shows the top 10 competitor. Top 3 gets gold, silver, and bronzze medal in ordeer by the way! :P As you can select how many questions to answer, we don't just blindly announce top correct scorer as winner, rather we value the ratio!
- After each quiz, users see their total score, Color-coded breakdown of each question, Correct vs. selected answers.
 
Authentication:
- We have JWT-based signup & login Auth tokens stored securely in localStorage
- Protected routes: quiz, results, profile, and leaderboard pages require user's login to guarantee our user's privacy and data security.

Shareable Results:
- Every quiz attempt generates a unique result ID
- Therefore, you can share your scorecard (result link) with friends (requires login to view to maintain our privacy btw)

Additionally:
- Clean animations, interactive UI, modal quiz setup
- Reusable auth utility functions for all pages
- MongoDB schema tracks not just scores, but full quiz metadata
- Heroku deployment with MongoDB Atlas backend
- The limited timer makes your experience even more thrilling!
- You can always choose to restart the quiz during the game in case you want to. It will ask you once to confirm though.
- Last but not the least, don't forget to check out the cool logo we have designed only for you! :") 🥲

## How to run on web:
Just visit the link: https://quizcollege-390a56929cad.herokuapp.com/ , if you are visiting it first time, please sign up with a user name and password, otherwise, enter your existing username, password to login. Once you are loggin in, press start quiz button to play, or navigate our platform if you want!

## How to run locally:

#### i) Clone the repo & install dependencies:
git clone <your-repo-url>
cd quiz-college
npm install

#### ii) Create a .env file:
MONGO_URI=your-mongo-uri
JWT_SECRET=your-secret-key

#### iii) Start the server:
node server.js

#### iv) Open on browser:
http://localhost:3000


#### Else, if you don't want any to go anymore technical, just download everything from my repo and run node server.js or nodemon server.js and visit localhost: 3000 after setting the .env file!


## Roles (Very Briefly):

### Md Akram Hossain:

- Created major HTML structures for signin.html, results.html, leaderboard.html, results_history.html entirely.
- Designed enhanced CSS layout and styling framework for Project 2
- Implemented leaderboard UI, sorting, and data rendering in leaderboard.html front-end page.
- Developed results_history.page's view with quiz breakdown and styling
- Collaborated in debugging and frontend integration
- Coordinated feature testing and validated flows across pages
- Contributed to planning, design alignment, and project documentation
- Re-modified results.html, results_history.html page for Project 3
- Setup initial server.js for the Project 2. 
- Updated and pushed package.json, question.json during the progress of Project 2
- Coordinated in finalizing the project, run few tests.
- For results_history page, sorted results by date (oldest first) using some logics defined by Mubasshir inside app.js, and generated HTML for each attempt.
- Collaborated with group partner and helped him to fix some bugs

### Mubasshir Al Shahriar: 

- Led the project from planning to deployment, instructed and helped group partner Md Akram Hossain to make and stay on track with a complete planning
- Built nearly all backend logic using Node.js, Express, and MongoDB during Project 3.
- After Md Akram Hossain setup the initial server.js during Project 2, Mubasshir Al Shahriar made necessary modification and small bug fixes.
- Started the project with index.html, built the homepage completely for Project 2. Then re-modified after starting the Project 3.
- Created the initial CSS to make future plan on how to organize/design the enhanced version of CSS collaborating with Md Akram Hossain.
- Contributed in enhancing, modifying, and making adjustment for the Project 2 version of CSS.
- During Project 3, made all additional CSS design required to meet the goals of Project 3. Modified the styles.css as needed, re-decorated the CSS style for the leaderboard design.
- During Project 2, developed the full app.js, run bug-testing, fixed bugs, modified based on gradual progress of both of the team members, and finalized it for Project 2.
- During Project 3, re-modified app.js to meet the planning the group made for the Project 3, developed all necessary logics, kept connected with the database and Trivia API
- Implemented JWT-based authentication, session handling, route protection and utilized the token function in every pages where needed and suggested team member to do the same.
- Developed all core frontend interactivity in app.js, including: Dynamic quiz flow, Modal for quiz customization, Score calculation (select topper based on percentage), sound feedback, auth control.
- Integrated Trivia API with difficulty/category filters
- Built major html structure for index.html and quiz.html entirely during the progress of both Project 2 and Project 3.
- Built profile.html and signup.html page, their logic, front-end etc during project 3 as they were added requirements for project 3.
- Built the logic part of result history, and result sharing (using ID based link) on social or with friends
- Added the timer feature, modified later as needed.
- Designed and enhanced UI/UX: animations, dark mode, responsive layout
- Setup and managed the connecting to MongoDB part for Project 3.
- During Project 3, made all necessary modification for server.js to correctly connect, fetch, auth, and finally deploy
- Managed Heroku deployment, MongoDB Atlas setup, and .env configuration
- Generated a favicon icon/logo and added it to the .html pages
- Worked with the Trivia API
- Developed and pushed the User.js file for the backend part, additionally had to create another one named "QuizResult.js" to keep track properly on the quiz result and all metadata.
- Coordinated merging of all pages, finalized structure, and styling consistency




Some stuffs got overlapped during development as we worked together on few files too, and also helped fixing some issues we faced. To understand better and who exactly did what, you can read the below full progress report, which we used to write on real-time during the development of the project, to stay on track, keep track of what our group partner doing, and collaborate perfectly. These are the refined version of all commits, changed, modifications, additions we made, we have tried to keep only the major and important commits and planning there.



Some screenshots of how our WebApp output looks:

<img width="2940" height="1679" alt="image" src="https://github.com/user-attachments/assets/5453fcc5-ca6e-42b9-ac59-e6dfa23cbb4e" />

<img width="2940" height="1680" alt="image" src="https://github.com/user-attachments/assets/f1b69230-b4f8-485f-8136-2ad3aef12e38" />

<img width="2940" height="1483" alt="image" src="https://github.com/user-attachments/assets/953d3301-1f0b-4b23-8858-010b54746691" />

<img width="2940" height="1686" alt="image" src="https://github.com/user-attachments/assets/652ae4c2-0d2a-494d-8489-f7e9e7a87d35" />

<img width="2940" height="1684" alt="image" src="https://github.com/user-attachments/assets/274e9d22-09cb-46b4-bbc7-3176c438b5db" />

<img width="2940" height="1681" alt="image" src="https://github.com/user-attachments/assets/d8fd6a73-fe67-4d07-a886-0a2adfbda5c6" />






## Full report, about everything, every steps, how we kept going and how was the full progess:

## Commit History
(Here keeping together only the main and mentionable commits, changes, modifications, works to keep track, collaborate, and to make sure viewers can get a good overview of the gradual development process of our project)


#### [#### Progress of Project 2 phase starts here and continues till commit #13]

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



### Commit #22: Modified final CSS for project 3 (update 4.1) 
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 28, ~05:37 p.m.


- This last modification of our CSS file is made by Mubasshir Al Shahriar, although the main file was initially designed by Md Akram Hossain with some small contributions and later modifications by Mubasshir Al Shahriar.

- For the modifications it needed for project 3 was done by Mubasshir Al Shahriar. Here I have added some new classes for the "difficulty-modal" and "difficulty-content."

- Any other changes/modifications that I made previously on this file (update 3.1) were for project 2.






### Commit #23: Modified and Final app.js for project 3 (update 2.1) 
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 28, ~06:02 p.m.


- During project 2, I have coded this entire app.js, defining all required logics, actions.

- Now for project 3, I have modified this to meet all requirements and make some more features lively which we planned and worked on

- Added reusable JWT-based authentication (put JWT security in .env file, I am not going to post the .env file to ignore security risk) logic (setToken, getToken, clearAuth, getUsername) to store user session in localStorage.

- Enforced access control: quiz, results, and history pages are now protected; unauthenticated users are redirected to signin.
Implemented dynamic navbar update showing logged-in user and logout button; logout clears credentials and redirects. As I have defined the logic here, me and my partner Md Akram Hossain both can utilize it on any page wherever it is necessary just by using the function.

- Extended quiz flow to support difficulty, category, and question count selection via modal (with logic to capture and use these on quiz start).

- Updated quiz submission to post selected options and username to backend, supporting category/difficulty leaderboards and analytics.

- Removed quiz backtracking (prevBtn) for answer integrity; I actually made this modification right after adding the sound feedback provided after answer selection.

- Added result sharing via unique result ID, including share-to-clipboard and navigator. Pressing the share button, it will enable the user to get a unique id which will contain their result which using the link with id they can share with friends, social media (I set it in a way so that they can share, but to view the full result, those people will need to sign in, then they can see that friend's result. I did it to maintain result, question-answer's integrity.

- To better understand the modifications, please check the comments inside the code, I tried to explain it nicely.



### Commit #24: Pushed User.js 
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 28, ~06:15 p.m.

- As I worked and finished set up MongoDB already (I did it yesterday night), now working on the User.js part to transmit data properly
- Here I have extended scores array to store additional quiz metadata: difficulty (quiz level), category (quiz subject), and amount (number of questions per quiz attempt).
- The scores array in each user document now records not only the score, total, and date, but also the difficulty level, category, and number of questions for every quiz attempt.
- This structure enables richer statistics and filtering (for example: viewing highest scores by category/difficulty, or analyzing performance trends based on quiz settings etc which in this project we have not utilized that much, but later if work more on it, probably I will utilize it, that's why kept the structure like this).
- These changes are very much helpful to support new Project 3 features such as difficulty/category leaderboards and personalized profile statistics.



### Commit #25: QuizResult.js Schema for Project 3 
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 28, ~06:32 p.m.

- Here I am adding difficulty, category, and amount fields to each quiz result for keeping track. Maybe I could do it using only User.js, but I was having some trouble and later fixed it with this additional file. Through this file, I am also setting defaults for all new fields to ensure compatibility with legacy records.



### Commit #26: server.js updated version for Project 3 (update 3.1)
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 28, ~07:16 p.m.

Until project 2, Md Akram Hossain worked on this server.js. But after starting project 3, as I (Mubasshir) did the MongoDB setup and took care of the app.js too, it was more convenient and efficient to take charge of this server setup part by myself considering the limited time we have. So, I made necessary modification for this project 3 version of server.js. In this update 3.1, I am bringing following modifications:

- Implemented JWT-based authentication for user signup/signin; and also protected sensitive API routes.

- Enhanced /api/start-quiz further by making it accept and process difficulty, category, and amount query params, supporting custom quiz generation from both local DB and Open Trivia DB API.

- Modified /api/submit-quiz to keep record of quiz attempts with difficulty, category, and amount in both User and QuizResult collections.

- Added /api/user-history and /api/leaderboard endpoints for fetching filtered quiz stats by user, category, and difficulty.

- These are the main things I did as new update for the project 3 version of server.
- As I had to make changes very often in app.js and server.js, I am pushing the final update of these 2 file almost after finalizing all other files.



### Commit #27: Further enhancing leaderboard.html page's look & further addition in CSS
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 28, ~07:49 p.m.

- Original author of leaderboard.html page is Md Akram Hossain. But as it was looking very basic, on top of all the codes my partner wrote, I (Mubasshir) am adding some modification to make the leaderboard/table look little more enhanced/fancy. 

- To make it actually work, I have also added some additional class to the end of the CSS file (for ex: "leaderboard-glass," "@Keyframes leaderboard-fadein," ".fancy-leaderboard-list" etc).

- Next, I am going to wrap everything up, write an overview for the final (mergerd project 2 + project 3) project, re-deploy on heroku and add the ip address of the heroku app to MongoDB.


### Project Closure: Deployment on Heroku , Connecting Heroku App to MongoDB, and Finishing Touch
**Author**: Mubasshir Al Shahriar  
**Date, Time**: July 28, ~09:41 p.m.

- Finally we have reached our goal.
- I have set the accessing IP address for my MongoDB cluster0 to 0.0.0.0/0 to ensure proper access from heroku app
- I have deployed everything on heroku successfully after ensuring the final touch and revise for all files and set up the MongoURI and JWT correctly.
- After deployment, I have run the webapp several times, tested, and made sure everything is working perfectly.
- Thanks if you reached here skimming or reading or anyhow. Big thanks to my group partner Md Akram Hossain for his valuable time and kind cooperation. Also, thanks to our instructor Professor Nikola Baci for kind support and valuable guidances.




