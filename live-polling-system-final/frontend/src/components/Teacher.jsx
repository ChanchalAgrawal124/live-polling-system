import { socket } from "../services/socket";
import Result from "./Result";

function Teacher({ result }) {
  const createPoll = () => {
    socket.emit("createPoll", {
      question: "Which language do you like?",
      options: ["Java", "Python", "JavaScript"]
    });
  };

  return (
    <div>
      <h2>Teacher Panel</h2>
      <button onClick={createPoll}>Create Poll</button>
      <Result result={result} />
    </div>
  );
}
export default Teacher;