let currentPoll = null;
let answers = {};

function createPoll(poll) {
  currentPoll = poll;
  answers = {};
}

function submitAnswer(studentName, selectedOption) {
  if (!answers[studentName]) {
    answers[studentName] = selectedOption;
  }
}

function getResults() {
  const result = {};
  Object.values(answers).forEach(option => {
    result[option] = (result[option] || 0) + 1;
  });
  return result;
}

module.exports = { createPoll, submitAnswer, getResults };