# Vue_coach

This repository contains the "Vue_coach" project, a coaching application built with Vue.js and other technologies.

## Technologies Used

The project makes use of the following technologies:

- `Vue.js`: A progressive JavaScript framework used for building user interfaces. 
- `Vue Router`: A routing library for Vue.js applications, allowing for navigation between different views.
- `Vuex`: A state management pattern and library for Vue.js applications, used for managing application-level state.
- `Axios`: A promise-based HTTP client used for making HTTP requests to the server.
- `Tailwind CSS`: A utility-first CSS framework used for rapidly building custom user interfaces.
- `PostCSS`: A tool for transforming CSS with JavaScript plugins, used to enhance the CSS development process.

## Project Setup

To set up the project locally, please follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/FedorivRostik/Vue_coach.git
``` 
2. Navigate to the project directory:
```bash
cd Vue_coach
``` 
3.  Install the dependencies:
```bash
npm install
``` 
4. Run the development server:
```bash
npm run serve
```
5. Run TailwindCSS:
```bash
npm run watch
```
6. Open your browser and visit `http://localhost:8080` to see the running application.

## Deployed Version

A deployed version of the application is available at: [https://vue-http-demo-2439d.web.app/coaches](https://vue-http-demo-2439d.web.app/coaches)

Feel free to visit the deployed version to explore the application.

## Project Structure

The project structure is organized as follows:

- `src/`: Contains the main source code of the application.
  - `styles/`: Stores tailwind css files.
  - `components/`: Contains reusable Vue components used throughout the application.
  - `router.js`: Defines the application routes using Vue Router.
  - `store/`: Contains the Vuex store, which manages the application's state.
  - `pages/`: Contains the main pages of the application.
  - `App.vue`: The root component that wraps the entire application.
  - `main.js`: The entry point of the application, where the Vue instance is created.
- `public/`: Contains the static assets that are served directly by the server.

### Screens

The application includes the following screens:

- **Coaches**: A listing page displaying a list of coaches available.
- **CoachDetails**: Details page showing information about a specific coach.
- **RegisterCoach**: The place for registration as a coach.
- **Authentication**: The authentication page for user login and registration.
- **Requests**: A list of coach requests
<hr style="border:2px solid gray">



<h4 align="center">Coaches:</h4>
<p align="center">
  <img src="https://github.com/FedorivRostik/Vue_coach/assets/45173800/521df6dd-50a3-48fc-bf79-47074d1a0cae" alt="Coaches">
</p>
<hr style="border:2px solid gray">

<h4 align="center">RegisterCoach:</h4>
<p align="center">
  <img src="https://github.com/FedorivRostik/Vue_coach/assets/45173800/64f9cd33-b8e5-420b-a30a-13709148127f" alt="RegisterCoach">
</p>
<hr style="border:2px solid gray">

<h4 align="center">CoachDetails:</h4>
<p align="center">
  <img src="https://github.com/FedorivRostik/Vue_coach/assets/45173800/678b2757-963c-4b3b-b805-ae1569ec56cd" alt="CoachDetails">
</p>
<hr style="border:2px solid gray">

<h4 align="center">Authentication:</h4>
<p align="center">
  <img src="https://github.com/FedorivRostik/Vue_coach/assets/45173800/9b46b1e6-16cf-4887-9fbf-b85e2bc24f4a" alt="Authentication">
</p>
<hr style="border:2px solid gray">

<h4 align="center">Requests:</h4>
<p align="center">
  <img src="https://github.com/FedorivRostik/Vue_coach/assets/45173800/0154052a-c38c-471a-873c-020f99342896"
 alt="Requests">
</p>
