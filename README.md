
# Super App

Welcome to the **Super App**! This feature-rich application offers a range of functionalities, including registration, a customizable dashboard, and widgets for notes, a timer, weather, and news. Additionally, it includes a genre selection page that personalizes your entertainment recommendations.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

### Registration
- **User Registration**: Create an account with a username, email, and password.
- **Authentication**: Secure login and logout functionality.

### Dashboard
- **Customizable Dashboard**: Set your preferences, including genre selection for entertainment recommendations.
- **Timer Widget**: Track time effectively with a Circular Timer.
- **News Widget**: Stay updated with the latest news, fetched from reliable sources.
- **Weather Widget**: Get real-time weather updates for your location.
- **Notes Widget**: Keep your notes organized and easily accessible.

### Genre Selection & Entertainment
- **Genre Selection Page**: Choose your favorite genres, which will be used to tailor the entertainment content on your dashboard.
- **Browse Entertainment Page**: Discover movies based on your selected genres.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Sridhar-Shankar/Super-App.git
    cd Super-App
    cd client
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add necessary environment variables for API keys (e.g., for weather, news, and movie services).

4. **Start the development server**:
    ```bash
    npm start
    ```

5. **Access the app**:
    Open your browser and go to `http://localhost:5173`.

## Usage

1. **Register or Login**: Create an account or log in with your existing credentials.
2. **Set Preferences**: Use the Genre Selection Page to choose your preferred genres.
3. **Explore the Dashboard**: Access the various widgets on the dashboard, tailored to your preferences.
    - **Timer**: Start, stop, and reset the Circular Timer.
    - **News**: Browse through the latest news headlines.
    - **Weather**: Check current weather conditions.
    - **Notes**: Add, edit, and delete notes.
    - **Entertainment**: Browse movies based on your selected genres.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **React Context**: For managing global state and passing data through the component tree.
- **useState & useEffect**: To manage and handle component state and side effects.
- **React Router DOM**: For client-side routing.
- **Axios**: For making API calls to fetch data.
- **React Icons**: For incorporating icons throughout the UI.
- **Circular Timer**: For the Timer Widget.
- **API Integrations**: 
  - **Weather API**: To fetch real-time weather data.
  - **News API**: To fetch the latest news headlines.
  - **Movie Database API**: To fetch movies based on selected genres.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.


## Contact

For any inquiries or feedback, please contact:

- Sridhar Shankar
- Email: ssridhar571999@gmail.com

---

