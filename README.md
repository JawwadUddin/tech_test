
# Tic-Tac-Toe
Problems 1 and 2 have been tackled as per the instructions from the assignment (Problem 3 is somewhat easier than 2 so I thought it would be fun to give 2 a go!) 

## Features
- 3X3 grid, 2 player mode
- Ability to modify grid size up to 15x15
- Illogical for the number of consecutives in a row required to win to grow with the grid size (e.g impossible to really win a game in a grid of 7x7 if you need to get 7 consecutives), also reduces complexity of dynamically creating winning combinations, thus to make the game winnable as well as show off my problem solving skills, for any grid size bigger than 4, you need to obtain 4 consecutives to win.
- Additional sounds for tile clicks as well as game over have been added (required modification of webpack, tscofig as well as creation of a type decleration file)
- Custom hooks, utility functions, SOC, single resposibilty and in general best coding practices were used.
- Strongly typed application.
- Unit tests for core business logic.

## Coming Soon
- 3 player option
- Track score by user

## Quickstart
- Make sure you have **node** installed
- `cd client`
- `npm i`
- `npm start`
