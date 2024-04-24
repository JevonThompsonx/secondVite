import { useState } from "react";

export default function ObjectStateReview() {
	const [currentColorObject, setColorObject] = useState({
		player1: true,
		player2: false,
	});

	const changeColor = (player: string) => {
		setColorObject(() => {
			return { ...currentColorObject, player: !currentColorObject.player };
		});
	};

	return (
		<div className="object-state-review-base flex flex-col w-4/5 h-4/5 m-auto justify-evenly items-center">
			<h1>Click to switch teams</h1>
			<div className="player-home w-full flex flex-row justify-evenly items-center my-2">
				<h3
					className={
						currentColorObject.player1 ? "text-blue-500" : "text-red-500"
					}
				>
					Player 1 {currentColorObject.player1 ? "blue" : "red"}
				</h3>
				<h3
					className={
						currentColorObject.player2 ? "text-blue-500" : "text-red-500"
					}
				>
					Player 2 {currentColorObject.player2 ? "blue" : "red"}
				</h3>
			</div>
			<div className="playerButtonsHome w-full flex flex-row justify-evenly items-center my-2">
				<button
					onClick={() => changeColor("player1")}
					type="button"
					className="p-2 flex justify-center items-center"
					id="player1"
				>
					Player 1
				</button>
				<button
					onClick={() => changeColor("player2")}
					type="button"
					className=" p-2 flex justify-center items-center"
					id="player2"
				>
					Player 2
				</button>
			</div>
		</div>
	);
}
