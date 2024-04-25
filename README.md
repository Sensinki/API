
# Process Report 📰

## My idea 🍀
My idea is to create a Netflix-like application. For this I will work with TheMovieDB's API. I want to learn more about fetching data and working more with data. I want to make it possible for the user to see what movies are popular, view the details of any movie and search for specific movies. I also want to make it possible to search for movies with voice recognition, using the Google Web Speech API for the search feature. 

## What did I use to create this project 🚸
- NodeJS
- Express
- Npm
- EJS (templating engine)
- Render (deployment)
- Dotenv
- Git

### API's that I used 🎮
- [MovieDB API](https://developer.themoviedb.org/reference/intro/getting-started)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)


## How to install 📦

### 1. Create a folder
That helps you to place this project in your computer so you can easily navigate through it. 

### 2. Clone this repository 
You can clone the application from CLI or install it by downloading the ZIP file. To clone, you can paste the following code into the CLI you are using:

* HTTPS
`git clone https://github.com/Sensinki/API.git`

* or SSH
`git clone git@github.com:Sensinki/API.git`

### 3. Install dependencies
Now you have all documents but you can not run the code without dependencies. I used npm, you can install npm by copying the following code to the CLI.

You can check my "package.json" file if you want to see all of my dependensies and devDependensies.

`npm install`

### 4. .env file 
As last final step, you should set your .env file for MongoDB connection. In the .env file you will define following informations:

`TMDB_API_KEY=YOUR TMBD API KEY`
`PORT=2222`

### 5. Run the project
Now you can run the project. Write your terminal `npm run dev`. 

To check the connection you can go to your browser and write "localhost:2222" or "localhost:3333". If there is no problem, you should see the homepage of the MovyMovie app.
You can also check the connection by looking at the console. If it is working you should see something like:

`Loaded API Key: YOUR TMBD API KEY`
`MovyMovie app listening on port 2222`

## Process 📫
![TMDb API](https://developer.themoviedb.org/reference/intro/getting-started)
<img width="500" alt="" src="">

### Planning ✈️

| Planning                   | Monday             | Tuesday               | Friday                |
|----------------------------|---------------------|-----------------------|------------------------|
| Week 1 - Kickoff & concept | Easter | Introduction | Feedback |
| Week 2 - The baseline | College + workshops | Workshops | Feedback |
| Week 3 - Enhance | College + workshops | Workshops | Feedback |
| Week 4 - Enhance & wrap up | Individual question | Individual question | Assessment interviews |

### Week 1

In the first week we had an introduction to the API project. We generated ideas about which APIs we wanted to implement in our projects. I've always found APIs difficult and they make me anxious. I want to use this project to get more comfortable with APIs and learn how to use them correctly.

<img width="400" src="public/assets/wiki-images/week-1.jpeg"></img>

### Week 2

In week 2 I made my idea definite. My project is to implement [TMDb API](https://developer.themoviedb.org/reference/intro/getting-started) (The Movie Database) to make a Netflix like website. On top of that, I want to add a voice recognition function to the search bar. I will do this by using the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

My project will consist of these pages:

- Home page
All the trending/popular movies from the database will be visible here

- Movie detail page
A detail page with information about the movie that has been selected

- Search results page
A page consisting of results of the search prompt from the search bar on the home page

- 404 error page
An error page that indicates that the user is on the wrong page.

Because I was not sure how I could use the APIs that I selected, I spent this week styling my website and researching how to use the APIs.

<img width="400" src="public/assets/wiki-images/week-2_1.jpeg"></img><br></br>
<img width="400" src="public/assets/wiki-images/week-2_2.jpeg"></img>

### Week 3

I started using the TMDb API, I had a lot of difficulty during the process so I asked for help from my teachers. This helped me learn better and the information sank in really well.

At the end of the week, I learned how to fetch the API itself, and how to extract and use information about the movies on my own website.

Because I hadn't started the detail page yet, I made sketches of what I have in my mind.

<img height="400" src="public/assets/wiki-images/week-3_1.jpeg"></img>
<img height="400" src="public/assets/wiki-images/week-3_2.jpeg"></img>
<img height="400" src="public/assets/wiki-images/week-3_3.jpeg"></img>

### Week 4

In week 4 I got better at the things that I was struggling with in week 3, and I started to understand the process of using APIs better. Thanks to this I was able to finish the tasks below:

- Searching movies inside the movie database
- Showing the movies as search results
- Adding Web Speech voice recognition to the search function
- Making a movie detail page for every movie that's inside the database
- Adding trailers to the movie detail page
- Showing similar movies on the movie detail page
- Showing reviews on the movie detail page

<img height="400" src="public/assets/wiki-images/home-mobile.png"></img>
<img height="400" src="public/assets/wiki-images/detail-mobile-1.png"></img>
<img height="400" src="public/assets/wiki-images/detail-mobile-2.png"></img>
<img width="605" src="public/assets/wiki-images/home-desktop.png"></img>
<img width="605" src="public/assets/wiki-images/search-desktop.png"></img>
<img width="605" src="public/assets/wiki-images/detail-desktop.png"></img>
