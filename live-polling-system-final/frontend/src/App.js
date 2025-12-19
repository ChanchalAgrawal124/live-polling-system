import { useEffect, useState } from "react";
import { socket } from "./services/socket";
import Teacher from "./components/Teacher";
import Student from "./components/Student";

function App() {
  const [role, setRole] = useState("");
  const [poll, setPoll] = useState(null);
  const [result, setResult] = useState({});

  useEffect(() => {
    socket.on("newPoll", setPoll);
    socket.on("pollResult", setResult);
  }, []);

  if (!role) {
    return (
      <div>
        <h2>Select Role</h2>
        <button onClick={() => setRole("teacher")}>Teacher</button>
        <button onClick={() => setRole("student")}>Student</button>
      </div>
    );
  }

  return role === "teacher"
    ? <Teacher result={result} />
    : <Student poll={poll} result={result} />;
}

export default App;