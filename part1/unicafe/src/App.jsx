import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	)
}

const Statistics = ({ good, neutral, bad }) => {
	const total = good + neutral + bad
	const averageScore = ((good * 1) + (neutral * 0) + (bad * -1)) / total
	const positivePercent = (good / total) * 100
	if (total > 0) {
		return (
			<>
				<h2>Statistics</h2>
				<table>
					<tbody>
						<StatisticLine text='Good' value={good} />
						<StatisticLine text='Neutral' value={neutral} />
						<StatisticLine text='Bad' value={bad} />
						<StatisticLine text='All' value={total} />
						<StatisticLine text='Average' value={averageScore} />
						<StatisticLine text='Positive' value={positivePercent} />
					</tbody>
				</table>

			</>
		)
	}
	return (
		<>
			<h2>Statistics</h2>
			<p>No feedbck given</p>
		</>
	)
}

const Button = ({ onClick, text }) => <button onClick={onClick} >{text}</button>

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (
		<div>
			<h2>Give Feebacks</h2>
			<Button onClick={() => setGood(good + 1)} text='Good' />
			<Button onClick={() => setNeutral(neutral + 1)} text='Neutral' />
			<Button onClick={() => setBad(bad + 1)} text='Bad' />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	)
}

export default App