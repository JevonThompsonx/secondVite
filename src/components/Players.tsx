// Create a component that takes an amount of players as a prop, defaults to 2 players
// The created component can also take a prop of a goal score
// Upon reaching the set goal score, the player is declared a winner
// No, score can be increased after a player is declared a winner
// Consider making the score increase disappear on a winner being selected
//
import { useState } from "react";
export default function Players({ playerAmount = 2, scoreGoal = 5 }) {
	const [playerScores, setPlayerScores] = useState(Array(playerAmount).fill(0));
	const resetScores = () => {
		setPlayerScores(() => new Array(playerAmount).fill(0));
	};
	const updateAndCheckScores = (index: number, score: number): void => {
		const setNewScore = () => {
			playerScores[index] = score + 1;
			const newScores = [...playerScores];
			setPlayerScores(() => newScores);
		};
		const checkScores = () => {
			if (playerScores[index] === scoreGoal) {
				setTimeout(() => {
					alert(`Player ${index + 1} wins!`);
					resetScores();
				}, 100);
			}
		};
		setNewScore();
		checkScores();
	};
	return (
		<div className="flex flex-col justify-evenly items-center space-y-4">
			<h2 className="text-2xl">Score keeper</h2>
			<ul className="flex flex-col justify-evenly items-center space-y-2">
				{playerScores.map((score, index) => {
					return (
						<li
							key={index}
							className="flex justify-evenly items-center space-x-2"
							id={index.toString()}
						>
							<p>
								{`player ${index + 1} `} : {score}
							</p>
							<button
								className="flex justify-center items-center p-2"
								type="button"
								onClick={() => {
									updateAndCheckScores(index, score);
								}}
								onKeyDown={(event) => {
									event.key !== "Shift" &&
										event.key !== "Tab" &&
										updateAndCheckScores(index, score);
								}}
							>
								+1
							</button>
						</li>
					);
				})}
				<li>
					<button
						type="button"
						onClick={() => resetScores()}
						onKeyDown={(event) =>
							event.key !== "Shift" && event.key !== "Tab" && resetScores()
						}
					>
						Reset Scores
					</button>
				</li>
			</ul>
		</div>
	);
}
