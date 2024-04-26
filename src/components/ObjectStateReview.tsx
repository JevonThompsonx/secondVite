import { useState } from "react";

export default function ObjectStateReview() {
	const [currentColorObject, setColorObject] = useState({
		player1: true,
		player2: false,
	});
	const p1ChangeColor = () => {
		setColorObject((currentColorObject) => {
			return { ...currentColorObject, player1: !currentColorObject.player1 };
		});
	};
	const p2ChangeColor = () => {
		setColorObject((currentColorObject) => {
			return { ...currentColorObject, player2: !currentColorObject.player2 };
		});
	};

	return (
		<div className="object-state-review-base flex flex-col w-4/5 h-4/5 m-auto justify-evenly items-center">
			<h2 className="text-3xl">Object State Manager</h2>
			<h3 className="text-yellow-300">Click button to switch teams</h3>
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
					onClick={p1ChangeColor}
					key="player1"
					type="button"
					id="player1"
					className="p-2 flex justify-center items-center"
				>
					Player 1
				</button>
				<button
					onClick={p2ChangeColor}
					type="button"
					key="player2"
					id="player2"
					className=" p-2 flex justify-center items-center"
				>
					Player 2
				</button>
			</div>
		</div>
	);
}
