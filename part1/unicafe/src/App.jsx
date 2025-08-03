import { useState } from 'react'

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const total = good + neutral + bad
	const averageScore = ((good * 1) + (neutral * 0) + (bad * -1)) / total
	const positivePercent = (good / total) * 100

	return (
		<div>
			<h2>Give Feebacks</h2>

			<button onClick={() => setGood(good + 1)}>Good</button>
			<button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
			<button onClick={() => setBad(bad + 1)}>Bad</button>

			<h2>Statistics</h2>

			<p>Good {good}</p>
			<p>Neutral {neutral}</p>
			<p>Bad {bad}</p>
			<p>All {total}</p>
			<p>Average {averageScore}</p>
			<p>Positive {positivePercent}</p>
		</div>
	)
}

export default App