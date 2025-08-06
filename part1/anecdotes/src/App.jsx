import { useState } from "react"

const Anecdote = ({anecdote, votes}) => {
  return (
    <>
      <p>{anecdote}</p>
      <p>Has votes - {votes}</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const maxVote = Math.max(...votes)
  const anecdoteWithMaxVote = anecdotes[votes.indexOf(maxVote)]

  const handleVotes = (selectedIndex) => {
    setVotes(prevVotes => {
      const votes = [...prevVotes]
      votes[selectedIndex] += 1
      return votes
    })
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={() => handleVotes(selected)}>Vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * 8))}>Next anecdotes</button>

      <h2>Anecdote with most votes</h2>
      {maxVote > 0 && <Anecdote anecdote={anecdoteWithMaxVote} votes={maxVote} />}
    </div>
  )
}

export default App