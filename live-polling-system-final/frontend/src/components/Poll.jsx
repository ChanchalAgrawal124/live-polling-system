function Poll({ poll, onAnswer }) {
  return (
    <div>
      <h3>{poll.question}</h3>
      {poll.options.map(option => (
        <button key={option} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}
export default Poll;