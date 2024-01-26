// eslint-disable-next-line react/prop-types
export function LangCard({ name, img }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={img} alt={name} />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        {/* <p>Total Test: {test}</p>
        <p>Total Questions: {questions}</p> */}
      </div>
      <div className="card-buttons">
        <button className="start-quiz">Start Quiz!</button>
        <button className="study-material">Study Material</button>
      </div>
    </div>
  );
}
