import { useData } from "../context/Data-context";

const Quiz = () => {
  const {
    showQuiz,
    question,
    quizs,
    checkAnswer,
    correctAnswer,
    selectedAnswer,
    questionIndex,
    nextQuestion,
    showTheResult,
  } = useData();

  return (
    <section
      className="bg-dark text-white"
      style={{ display: `${showQuiz ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row vh-100 algin-items-center justify-content-center">
          <div className="col-lg-8">
            <div
              className="card p-4"
              style={{ background: "#d3d3d", borderColor: "#646464" }}
            >
              <div className="d-flex justify-content-between gap-md-3">
                <h5 className="md-2 fs-normal 1h-base">{question?.question}</h5>
                <h5
                  style={{
                    color: "#60d600",
                    width: "100px",
                    textAlign: "right",
                  }}
                >
                  {quizs.indexOf(question) + 1} / {quizs.length}
                </h5>
              </div>
            </div>
            {question?.options?.map((item, index) => (
              <button
                key={index}
                className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark ${
                  correctAnswer === item && "bg-success"
                }`}
                onClick={(event) => checkAnswer(event, item)}
              >
                {item}
              </button>
            ))}
          </div>
          {questionIndex + 1 !== quizs.length ? (
            <button
              className="btns"
              onClick={nextQuestion}
              disabled={!selectedAnswer}
            >
              Next Question
            </button>
          ) : (
            <button
              className="btns"
              onClick={showTheResult}
              disabled={!selectedAnswer}
            >
              Show Result
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
