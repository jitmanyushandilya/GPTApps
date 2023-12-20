# GPT_R2D2

## Overview

Welcome to the GPT_R2D2 project! This project consists of a backend server built with Flask, providing three key use cases: MarketGPT for complex competitor research, Personalized Email Outreach automation, and Social Media template creation. The frontend is developed using React, offering a user-friendly interface to interact with the backend services.

## Project Structure

The project is structured into two main components:
1. **Flask Server (Backend):**
    - Handles communication with the OpenAI API.
    - Processes data received from the frontend.
    - Implements three primary functionalities: MarketGPT for competitor research, Personalized Email Outreach, and Social Media template creation.
    - Utilizes Flask for web server implementation.

2. **React Frontend:**
    - Provides a user interface for users to input required data.
    - Displays the generated results.
    - Facilitates seamless interaction with the backend services.

## Features

- **MarketGPT:** Obtain a chain of tasks for conducting complex competitor research.
- **Personalized Email Outreach:** Auto-generate personalized email content.
- **Social Media Template Creation:** Generate templates for social media posts.

## Development

### Backend Development

- Developed using Flask.
- Backend processes data from the frontend and communicates with the OpenAI API.

### Frontend Development

- Built with React.
- User-friendly interface for inputting data and displaying results.

### Cloud Deployment

- Can be ready for deployment on AWS using serverless services like AWS Lambda or Fargate by changing export ports.
- Implemented Jenkins CI/CD pipeline with triggers demonstrated in the video presentation.

## Setup Instructions

1. **Clone the Repository:**
    ```
    git clone https://github.com/jitmanyushandilya/GPT_R2D2
    ```

2. **Navigate to the Project Folder:**
    ```
    cd GPT_R2D2
    ```

3. **Setup Flask Server:**
    ```
    cd flask-server
    pip install -r requirements.txt
    python server.py
    ```
    Access the server at http://127.0.0.1:5000.

4. **Setup React Frontend:**
    ```
    cd my-app
    yarn install
    yarn run start
    ```
    Access the frontend at http://localhost:3000/.

5. **Both Servers Running:**
    After both servers are running, you should see the main page as described in the application.

## Main Page

Upon successful setup, visit the main page to start utilizing the powerful features of GPT_R2D2.
