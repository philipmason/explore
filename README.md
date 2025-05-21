# Project: Explore

This project is a React application designed for interactive data exploration and visualization. It allows users to view data through configurable pie and bar charts, filter data based on chart selections, and inspect the filtered data in a grid format.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd explore
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Features

*   **Interactive Charts:** Visualize data using dynamic Pie and Bar charts.
*   **Data Filtering:** Click on chart segments to filter the displayed data across the application.
*   **Data Grid:** View and inspect raw or filtered data in a sortable and searchable grid.
*   **Responsive Design:** The application layout adjusts for different screen sizes.

## Data

The application utilizes sample datasets for demonstration:

*   `src/test.json`: A JSON file containing sample records with fields like name, age, and gender. This is the primary dataset used for chart generation and grid display in the initial view.
*   `src/adae.csv`: A CSV file, likely containing adverse event data (though not fully explored in the current code analysis). This data source might be intended for future expansion or alternative views.

Data manipulation and aggregation, particularly for generating chart data from `test.json`, is handled using AlaSQL, an in-browser SQL database library.

## Key Dependencies

This project relies on several key libraries to provide its functionality:

*   **React:** A JavaScript library for building user interfaces.
*   **Material UI (MUI):** A comprehensive suite of UI tools to help you ship new features faster.
    *   `@mui/material`: Core Material Design components.
    *   `@mui/icons-material`: Material Design icons.
    *   `@mui/x-charts`: Advanced charting components.
    *   `@mui/x-data-grid-pro`: Advanced data grid component.
*   **AlaSQL:** An in-browser SQL database library used for querying and manipulating client-side data.
*   **React Scripts:** Part of Create React App, providing scripts and configurations for development, building, and testing.

For a full list of dependencies, please see the `package.json` file.
