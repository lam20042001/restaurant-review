# Restaurant Review Web App

## Overview

This web application allows users to discover, review, and rate restaurants. Users can create, edit, and delete their own restaurant listings, and other users can review and rate restaurants on a scale of 1 to 5 stars.

## Features


**Review and Rate Restaurants**
   - Users can read reviews and ratings from other users about restaurants.
   - Provides features such as star rating, comments, reviews, and images of their experience at the restaurant.

**Create, Edit, and Delete Restaurant Listings**
   - Users can create new restaurant listings, edit existing ones, and delete listings they no longer wish to keep.

**Manage Restaurant Reviews**
   - Users can add, edit, or delete their own reviews for restaurants.



## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js.
- **EJS (Embedded JavaScript)**: Template engine for generating HTML markup with JavaScript.
- **MongoDB**: NoSQL database for storing user, restaurant and review data.


## Prerequisites

Before running this application locally, make sure you have the following installed:

- Node.js (if running without Docker)
- Docker
- Docker Compose
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file for customizing your Cloudinary settings:

`CLOUDINARY_CLOUD_NAME`

`CLOUDINARY_KEY`

`CLOUDINARY_SECRET`

## Getting Started

### Running with Node.js

1. Clone the repository:

    ```
    git clone https://github.com/lam20042001/restaurant-review.git
    ```

2. Navigate to the project directory:

    ```
    cd restaurant-review
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. Run the application:

    ```
    npm start
    ```

5. Open a web browser and go to http://localhost:3000 to view the application.

### Running with Docker

1. Clone the repository:

    ```
    git clone https://github.com/lam20042001/restaurant-review.git
    ```

2. Navigate to the project directory:

    ```
    cd restaurant-review
    ```

3. Run the application with Docker Compose:

    ```
    docker-compose up --build
    ```

    If you want to run it in detached mode, you can add the `-d` flag:

    ```
    docker-compose up --build -d
    ```

4. Open a web browser and go to http://localhost:3000 to view the application.

