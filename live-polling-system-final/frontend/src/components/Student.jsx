import { useState } from "react";
import { socket } from "../services/socket";
import Poll from "./Poll";
import Result from "./Result";

function Student({ poll, result }) {
  const [studentName, setStudentName] = useState("");

  const sendAnswer = (option) => {
    socket.emit("submitAnswer", { name: studentName, option });
  };

  return (
    <div>
      <h2>Student Panel</h2>
      {!studentName && (
        <input placeholder="Enter your name"
          onBlur={(e) => setStudentName(e.target.value)} />
      )}
      {poll && <Poll poll={poll} onAnswer={sendAnswer} />}
      <Result result={result} />
    </div>
  );
}
export default Student;