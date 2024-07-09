# Bacterial Growth Simulator

## Overview

The Bacterial Growth Simulator is a React and TypeScript application designed to simulate and visualize the growth patterns of a bacterial colony within a grid-based petri dish. 
Users can interact with the simulation to observe how bacterial cells spread and multiply over time, influenced by user-configurable parameters and interactions.
Users are able to define the interval time after which cells multiply. Further, users can manually toggle each cell "on" and "off."

## Features

- **Dynamic Grid Representation**: Simulates bacterial growth on a grid that can be adjusted from 1x1 to 75x75 cells.
- **Interactive Simulation Controls**:
  - **Start/Pause**: Users can start or pause the simulation at any time.
  - **Reset**: Resets the simulation and grid to the initial state.
  - **Interval Adjustment**: Allows users to set the time interval for simulation updates.
- **Manual Cell Toggle**: Click to toggle the occupancy state of any cell in the grid to simulate adding or removing bacteria manually.
- **Performance Metrics**: Tracks and displays performance metrics such as execution time and render speed under varying conditions.

## Project Setup

1. ```bash
   git clone https://github.com/Raghav0005/bacterial-growth-simulator.git
2. ```bash
   cd bacterial-growth-simulator
3. ```bash
    npm install
4. ```bash
    npm start
Access the application at http://localhost:3000.

## Project Structure

The application is organized into several key directories and files:

- `src/`: Source files for the application
  - `components/`: Contains React components, which include:
    - `Grid`: Manages and displays the grid for the simulation
    - `Cell`: Represents individual cells in the grid
    - `Controls`: Provides interactive controls for managing the simulation
  - `types/`: TypeScript interfaces and types
- `public/`: Public files, including:
  - The HTML entry point and other assets like icons and manifest files
- `README.md`: contains comprehensive project documentation

## Project Structure
Grid Component: Renders the grid and handles cell state visualization
Cell Component: Represents individual cells in the grid and handles user interactions
Controls Component: Provides UI elements by controlling the simulation

## Assumptions
I assumed that manual cell toggling does not reset or affect the simulation interval

## Additional Features
Grid Size Customization: Users can now dynamically change the grid size without restarting the application.
Options are available through a dropdown menu.

## Performance Analysis



