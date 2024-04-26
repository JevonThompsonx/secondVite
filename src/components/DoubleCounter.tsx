import { useState } from "react";
interface scoreType {
	p1Score: number;
	p2Score: number;
}
export default function DoubleCounter() {
	const [scores, setScores] = useState({
		p1Score: 0,
		p2Score: 0,
	});

	const p1ScoreUpdater = () => {
		setScores((prevScores: scoreType) => {
			return {
				...prevScores,
				p1Score: prevScores.p1Score + 1,
			};
		});
	};
	const p2ScoreUpdater = () => {
		setScores((prevScores: scoreType) => {
			return {
				...prevScores,
				p2Score: prevScores.p2Score + 1,
			};
		});
	};
	return (
		<div className="m-4 flex flex-col justify-evenly items-center">
			<h2 className="m-2 text-3xl">Score Keeper</h2>
			<h3 className="text-yellow-300">
				Click player button to increase <i>their</i> score
			</h3>
			<div className="flex flex-row justify-evenly items-center w-full">
				<h3 className="text-red-600">Player 1: {scores.p1Score}</h3>
				<h3 className="text-blue-600">Player 2: {scores.p2Score}</h3>
			</div>
			<div className="button-div flex justify-evenly items-center p-2 w-full ">
				<button type="button" onClick={p1ScoreUpdater}>
					+1 P1 Score
				</button>
				<button type="button" onClick={p2ScoreUpdater}>
					+1 P2 Score
				</button>
			</div>
		</div>
	);
}
