import "./App.css";
import Counter from "./components/Counter";
import DoubleCounter from "./components/DoubleCounter";
import ObjectStateReview from "./components/ObjectStateReview";
function App() {
	return (
		<>
			<h1>State demo</h1>
			<Counter />
			<DoubleCounter />
			<ObjectStateReview />
		</>
	);
}

export default App;
