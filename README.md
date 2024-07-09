# Bacterial Growth Simulator

## Overview

The Bacterial Growth Simulator is an application developed in React and TypeScript, designed to simulate and visualize the growth patterns of a bacterial colony within a grid-based petri dish. 
Users can interact with the simulation to observe how bacterial cells spread and multiply over time, influenced by user-configurable parameters such as time interval of multiplication and the ability to manually toggle each cell as "on" or "off".

## Features

- **Interactive Simulation Controls**:
  - **Start/Pause**: Users can start or pause the simulation at any time
  - **Reset**: Resets the simulation and grid to the initial state
  - **Interval Adjustment**: Allows users to set the time interval for simulation updates
- **Manual Cell Toggle**: Allows users to click to toggle the occupancy state of any cell in the grid to simulate adding or removing bacteria manually.
- **Grid Size Customization**: Users can also dynamically change the grid size without restarting the application.
Options are available through a dropdown menu. Grid size can range from 1x1 to 75x75.

## Project Setup on Local

1. ```bash
   git clone https://github.com/Raghav0005/bacterial-growth-simulator.git
2. ```bash
   cd bacterial-growth-simulator
3. ```bash
    npm install
4. ```bash
    npm start
Access the application at http://localhost:3000

## Project Structure

The application is organized into several key directories and files:

- `src/`: contains the source files for the application
  - `components/`: contains React components, which include:
    - `Grid`: manages and displays the grid for the simulation
    - `Cell`: represents individual cells in the grid
    - `Controls`: provides interactive controls for managing the simulation
  - `types/`: TypeScript interfaces and types
- `public/`: Public files, including the HTML entry point and other assets like icons and the manifest file
- `README.md`: contains comprehensive project documentation

## Assumptions
Manual cell toggling does not reset or affect the simulation interval. <br>
Dropdown menus are a valid input field - they are used to reduce the margin for user input error, by providing specific options for user input.

## Performance Analysis
I used the performance metrics in Google Chrome's dev tools, under the performance tab.
Upon recording and analyzing the simulation through that tool, each frame duration was approximately the time interval specified by the user.
That is, for a 250 ms interval specified by the user, each frame duration was approximately 250 ms as well. <br>
Further, according to the same performance report, there were no recorded memory leaks or memory hazards.
