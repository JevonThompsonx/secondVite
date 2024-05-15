import "./App.css";
import ArrayState from "./components/ArrayState";
import Counter from "./components/Counter";
import DoubleCounter from "./components/DoubleCounter";
import ObjectStateReview from "./components/ObjectStateReview";
import Players from "./components/Players";
function App() {
	return (
		<div className="flex flex-col justify-evenly align-center space-y-8">
			<h1>State demo</h1>
			<Counter key="Counter" />
			<DoubleCounter key="DoubleCounter" />
			<ObjectStateReview key="ObjectState" />
			<ArrayState key="ArrayState" />
			<Players playerAmount={5} key="playerScoreKeeper" />
		</div>
	);
}

export default App;
