import './styles.css'

const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board">
      <h2>Your score: {score}</h2>
    </div>
  );
};

export default ScoreBoard;
