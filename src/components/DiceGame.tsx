// Goal:
// Make a dice game that asks for the amount of dice you want,
// renders an amount of dice requested
// asks, the user for a goal for the dice game,
// header for the goal
// Displays failure or win based on the win condition
// of the dice being equal to the set goal
// a reset button that starts the game over w/ a prompt for dice amount and goal

import { KeyboardEvent, useState } from "react";
import Die from "./partialComponents/Die";
import { getRolls, sum, dice6 } from "../utils/getRolls.ts";
export default ({ setGoal = 10, numberOfDice = 2 }) => {
	const [dice, setDice] = useState(getRolls(numberOfDice));
	const [goal, checkGoal] = useState(setGoal);
	const [currentSum, checkSum] = useState(sum(dice));
	const checkRoll = () => {
		setDice(() => getRolls(numberOfDice));
		setTimeout(() => {
			return checkSum(() => {
				return sum(dice);
			});
		}, 100);
	};
	const reRollSingleDie = (indexOfDie: number) =>
		setDice(() => {
			const newValue = dice6();
			dice[indexOfDie] = newValue;
			checkRoll();
			return [...dice];
		});
	return (
		<div className="flex flex-col justify-evenly items-center space-y-4">
			<h1 className="text-2xl text-sky-700">Dice Game</h1>
			<h2>Current Goal: {goal}</h2>
			{currentSum === goal && (
				<h2 className="text-lg">You win!! The dice equal: {goal}</h2>
			)}
			<ul className="flex flex-row justify-evenly items-center space-x-2">
				{dice.map((dieNumber, index) => {
					return (
						<div className="flex flex-col justify-evenly items-center space-y-2">
							<Die val={dieNumber} />
							<button
								className="w-16 h-10 flex justify-center items-center p-2"
								type="button"
								onClick={() => reRollSingleDie(index)}
								onKeyPress={(event): void => {
									event.key !== "Shift" &&
										event.key !== "Tab" &&
										reRollSingleDie(index);
								}}
							>
								ReRoll
							</button>
						</div>
					);
				})}
			</ul>
			<button
				className="w-30 h-10 flex justify-center items-center"
				type="button"
				onClick={() => checkRoll()}
				onKeyPress={(event) => {
					event.key !== "Tab" && event.key !== "Shift" && checkRoll();
				}}
			>
				ReRoll All
			</button>
		</div>
	);
};
