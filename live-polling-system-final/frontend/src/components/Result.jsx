function Result({ result }) {
  return (
    <div>
      <h3>Live Results</h3>
      {Object.keys(result).map(option => (
        <p key={option}>{option} : {result[option]}</p>
      ))}
    </div>
  );
}
export default Result;