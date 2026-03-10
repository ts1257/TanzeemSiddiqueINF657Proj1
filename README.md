# React Native Task Manager

This project is a React Native Task Manager application built using Expo and React Navigation. The app allows users to view a list of tasks, see detailed information for each task, and mark tasks as completed. The project demonstrates the use of reusable components, navigation, state management, styling, and debugging in React Native.

## Features

- Display a list of tasks with title, description, and image
- Scrollable task list using FlatList
- Reusable TaskCard component
- Navigation between Home screen and Task Details screen
- Detailed task view with additional information
- Mark tasks as completed
- Dynamic UI updates based on task completion
- Responsive layout using Flexbox
- Styled UI with margins, padding, shadows, and rounded corners
- Debugging with console logs
- Fast Refresh support during development

## Technologies Used

- React Native
- Expo
- React Navigation
- JavaScript
- Flexbox for layout

## Project Structure

```
TanzeemSiddiqueINF657Proj1
│
├── App.js
├── app.json
├── index.js
├── package.json
├── README.md
│
├── assets
│   └── images
│
├── components
│   ├── Button.js
│   ├── Header.js
│   ├── Profile.js
│   └── TaskCard.js
│
├── data
│   └── tasks.js
│
└── screens
    ├── HomeScreen.js
    ├── ProfileScreen.js
    └── TaskDetailsScreen.js
```

## Installation and Setup

To run this project locally, follow these steps:

### 1. Clone the repository

git clone https://github.com/ts1257/TanzeemSiddiqueINF657Proj1.git

### 2. Navigate to the project folder

cd TanzeemSiddiqueINF657Proj1

### 3. Install dependencies

npm install

### 4. Start the Expo development server

npx expo start

## Running the Application

After starting the Expo server, you can run the application using:

- **Expo Go App (Recommended)**  
  Scan the QR code with the Expo Go mobile app.

- **Web Version**
  Press `w` in the terminal.

- **Android Emulator**
  Press `a` in the terminal.

- **iOS Simulator (Mac only)**
  Press `i` in the terminal.

## Debugging

The application includes console logging for debugging task navigation and completion events. Chrome Developer Tools can be used to monitor logs and debug the application.

## Author

Tanzeem Siddique

## Course

INF 657 – Mobile Web Development
