# Sown App

Sown is a seed starting planner that helps users figure out when to start planting seeds based on their last frost dates (through zip code) and reminds them in the appropriate time-frame. The user will select the seeds they are planning to grow for the season from the database, or add their own (if none are available), and the app will save and display when to start planting the seeds.

The working app can be found at:
[https://sown-app.herokuapp.com/](https://sown-app.herokuapp.com/)

The github repository for the backend of this app can be found at:
[https://github.com/ljor/sown-app-backend](https://github.com/ljor/sown-app-backend)

## Technologies Used

This app was created using React.js and Flask

## Installation

In the project directory, install any dependencies by running:
```
$ npm install
```

Before you can run the app locally, you will need to create your own .env file that includes the following variables:

*REACT_APP_BASE_URL* set it to equal `https://sown-app-db.herokuapp.com` (the deployed backend) OR `http://localhost:8000` if you are running the backend locally straight from the repository (found at [https://github.com/ljor/sown-app-backend](https://github.com/ljor/sown-app-backend))

*REACT_APP_WEB_TOKEN* set this to equal your free webservices token provided by NOAA at [https://www.ncdc.noaa.gov/cdo-web/token](https://www.ncdc.noaa.gov/cdo-web/token)

*REACT_APP_API_URL_BASE* set it to equal `https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=NORMAL_ANN&datatypeid=ANN-TMIN-PRBLST-T36FP30&locationid=ZIP:` (the starting search query for the average last frost date in the NOAA database)

*REACT_APP_API_URL_TAIL* set it to equal `&startdate=2010-01-01&enddate=2019-01-01`(the ending search query for for the average last frost date the NOAA database)

Once you've filled out the .env variables, you can now run the app locally by typing:
```
$ npm start
```

This runs the app in the development mode at http://localhost:3000

## User Stories

- As a gardener, I want to be able to keep track of when to sow the seeds I want to grow in my garden so that I can get them started on time
- As a planner, I want to know when to get my seeds started so I can plan the time to do that

## Wireframes

![IMG_3049](https://user-images.githubusercontent.com/85857768/146685101-746984b0-bfb9-4670-80be-f04c4e1e9d76.JPG)

## Entity-Relationship Diagram

![Screen Shot 2021-12-19 at 2 08 44 PM](https://user-images.githubusercontent.com/85857768/146688346-44651f38-1333-4856-96cc-d9f5f2c3b23b.png)

## Current Issues

- API data from NOAA not consistently being pulled (further investigation has yielded that not not every zipcode pulls data, I will need to create a function that will convert an input zipcode to the nearest one that does work)
- Creating a new seed is encountering CORS error (redirection not allowed)

## Future Plans

- Improvements to the database.
- Improvements to the user interface and dashboard that includes:
    - A way to exit a modal you don't want to be in
    - Adding a calendar view, where users can get an overview of the dates they need to start sowing
    - A timeline overview table display
    - Search/filtering features
- Mobile reminder features, where a user can be notified when they can start planting the seeds of plants they want to grow in their garden
- Print options for users that want to print out their planned seeds calendar