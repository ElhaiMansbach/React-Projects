# Tenzies Game 

Click here for a live demo of the Tenzies game: [Tenzies game website](https://tenzies-best-game.netlify.app/).

## Tenzies - A ReactJS Dice Game Project for Rolling Fun and Excitement
Tenzies is a dice game project made with ReactJS. The objective of the game is to roll the dice until all of them show the same value. The project utilizes React components, including a Die component for rendering individual dice, and external libraries such as nanoid for generating unique IDs and react-confetti for adding a confetti effect when the player wins.

## Features

- Roll the dice by clicking the "Roll" button.
- Each die can be clicked to freeze its current value and prevent it from rolling in subsequent turns.
- When all dice are held and display the same value, the player wins and a confetti effect is displayed.
- The number of rolls is displayed on the screen.
- The "New Game" button allows starting a new game after winning.

## Technologies Used

The Tenzies game project utilizes the following technologies:

- React: A JavaScript library for building user interfaces.
- styled-components: A CSS-in-JS library for styling React components.
- react-nanoid: A library for generating unique IDs.
- react-confetti: A library for adding confetti effects.

## Optimizations

There are several potential optimizations that can be implemented in the Tenzies game project:

- Implement different levels of difficulty by setting a maximum number of rolls allowed per game.
- Allow the player to choose the desired level of challenge.
- Implement multiplayer functionality using libraries like Socket.io to enable real-time gameplay with other players.

Please note that these optimizations are optional and can be considered to enhance the game experience.

## Installation

To run the Tenzies game project locally, follow these steps:

1. Clone the project repository.
2. Navigate to the project directory.
3. Install the dependencies by running `npm install` or `yarn install`.
4. Start the development server with `npm start` or `yarn start`.
5. Open your web browser and visit `http://localhost:3000` to play the game.

## Testing

The project includes a basic test written using the `@testing-library/react` library. To run the test, use the following command:

```bash
npm test
```
<img src="https://user-images.githubusercontent.com/74247437/209131453-7f9e89e2-7787-4ee7-9720-ed5a93029baa.png" width=100%>
