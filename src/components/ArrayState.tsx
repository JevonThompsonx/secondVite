import { useState } from "react";
import randomNumGen from "../utils/randomNumGen";
import { v4 as uuid } from "uuid";
const randomNumTo100 = () => randomNumGen(100);
export default function ArrayState() {
	const startingArray = [
		{ id: uuid(), number: randomNumTo100() },
		{ id: uuid(), number: randomNumTo100() },
		{ id: uuid(), number: randomNumTo100() },
	];
	const [currentArray, setArray] = useState(startingArray);

	const deleteElement = (id: string) => {
		setArray(() => {
			return currentArray.filter((element) => id !== element.id);
		});
	};
	const incrementBy2 = () => {
		setArray(() => {
			return currentArray.map((element) => {
				return { ...element, number: element.number + 2 };
			});
		});
	};
	const makeAll3s = () => {
		setArray(() => {
			return currentArray.map((element) => {
				return { id: element.id, number: 3 };
			});
		});
	};
	const arrayInElements = currentArray.map(
		({ id, number }: { id: string; number: number }) => {
			return (
				<li
					id={id}
					className="flex flex-col justify-evenly items-center"
					key={id}
				>
					{number}
					<button
						type="button"
						onKeyDown={(event) =>
							event.key !== "Tab" && event.key !== "Shift" && deleteElement(id)
						}
						onClick={() => deleteElement(id)}
						key={`${id} delete button`}
						className="text-red-600 p-1 flex justify-evenly items-center border border-white rounded-lg"
					>
						🗙
					</button>
				</li>
			);
		},
	);

	const addElement = () => {
		setArray(() => [...currentArray, { id: uuid(), number: randomNumTo100() }]);
	};
	return (
		<div className="m-2 space-y-4 flex flex-col justify-evenly items-center">
			<h2 className="text-3xl">Array State management</h2>
			<h4 className="text-yellow-300">
				Click the corresponding x to delete a number
			</h4>
			<ul className="space-x-4 flex justify-evenly items-center">
				{arrayInElements}
			</ul>
			<button type="button" className="" onClick={addElement}>
				Add a random number to array
			</button>
			<button type="button" className="" onClick={incrementBy2}>
				Increment by 2
			</button>
			<button type="button" onClick={makeAll3s}>
				Make every number 3
			</button>
		</div>
	);
}
