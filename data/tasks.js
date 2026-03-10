const tasksData = [
  {
    id: "1",
    title: "Complete Homework",
    description: "Finish the React Native Task Manager assignment for class.",
    details:
      "This task focuses on completing the homework requirements by expanding the original React Native project. The app should include a task list, reusable task cards, navigation between screens, improved styling, and a working completion button that updates the interface dynamically.",
    image: require("../assets/homework.jpg"),
    completed: false,
  },
  {
    id: "2",
    title: "Review Navigation Setup",
    description: "Practice screen navigation using React Navigation.",
    details:
      "This task is about understanding how navigation works in a React Native application. It includes configuring the stack navigator, moving between the Task Manager, Profile, and Task Details screens, passing task data through route parameters, and making sure the header buttons work correctly.",
    image: require("../assets/study.jpg"),
    completed: false,
  },
  {
    id: "3",
    title: "Improve App Styling",
    description: "Update the interface to make it cleaner and more modern.",
    details:
      "This task focuses on user interface improvements. It includes using flexbox for layout, applying balanced spacing, adding rounded cards, using soft shadows, improving text hierarchy, reducing oversized elements, and making the overall design feel more modern and mobile-friendly.",
    image: require("../assets/debug.jpg"),
    completed: false,
  },
  {
    id: "4",
    title: "Test and Debug",
    description: "Use logs and Fast Refresh to find and fix problems.",
    details:
      "This task is about debugging the app and making sure it runs smoothly. It includes checking console logs, verifying navigation flows, testing button interactions, confirming that tasks update properly when marked complete, and using Fast Refresh to quickly test code changes during development.",
    image: require("../assets/github.jpg"),
    completed: false,
  },
  {
    id: "5",
    title: "Push Project to GitHub",
    description: "Upload the final updated version of the project.",
    details:
      "This task covers the final submission step. It includes reviewing all files, making sure the project meets the assignment requirements, committing the completed app to GitHub, pushing it to the remote repository, and preparing the repository link for submission.",
    image: require("../assets/homework.jpg"),
    completed: false,
  },
];

export default tasksData;
