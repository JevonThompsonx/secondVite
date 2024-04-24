import { useState } from "react";
export default function Counter() {
	const [count, setCount] = useState(0);
	const updateCount = () => setCount(count + 2);
	return (
		<>
			<h2>Count = {count}</h2>
			<button type="button" onClick={updateCount}>
				Count + 2
			</button>
		</>
	);
}
