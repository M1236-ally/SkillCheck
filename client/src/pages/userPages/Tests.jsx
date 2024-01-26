import React, { useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { reducer, initialState } from "../../reducer/TestReducer";

import AppbarTest from "../../components/test-components/AppbarTest";
import QuestionCard from "../../components/test-components/QuestionCard";
import TestNav from "../../components/test-components/TestNav";
import TestReport from "../../components/test-components/TestReport";
import StartPage from "../../components/test-components/StartPage";
import Loader from "../../components/test-components/Loader";

function Test() {
  //getting the information about the test
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const testType = searchParams.get("type");
  const topic = searchParams.get("option");
  const testDuration = searchParams.get("duration");

  // defining the api route based on the test information
  let uri;
  if (testType === "language") {
    uri = `http://localhost:3500/api/questions/lang/${topic}`;
  } else {
    uri = `http://localhost:3500/api/companies/test/${topic}`;
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataFetched", payload: data }))
      .catch((err) => dispatch({ type: "error" }));
  }, []);

  const numQuestions = state.questions.length;
  const currentDate = new Date();

  // Format the date as needed
  const formattedDate = currentDate.toDateString();
  return (
    <>
      {/* the loader component will be displayed when we fetch the data from the database */}
      {state.status === "loading" && <Loader />}
      {/* the start page will be displayed when the data is fetched and everything is set to go. , this will also have all the instructions for the test */}
      {state.status === "ready" && <StartPage dispatch={dispatch} />}

      {/* Once the user clicks on the start test button then the test page will be displayed */}
      {state.status === "active" && (
        <div className="page-layout">
          <div className="navbar">
            <TestNav questions={state.questions} dispatch={dispatch} />
          </div>
          <div className="content">
            <div className="appbar">
              <AppbarTest
                
                formattedDate = {formattedDate}
                secondsRemaining={state.secondsRemaining}
                dispatch={dispatch}

              />
              <h3>{formattedDate}</h3>
            </div>
            <div className="main">
              <QuestionCard
                index={state.index}
                question={state.questions.at(state.index)}
                answer={state.answer}
                dispatch={dispatch}
                numQuestions={numQuestions}
              />
            </div>
          </div>
        </div>
      )}
      {/* This section will be displayed when the user clicks on the submit button */}
      {state.status === "finished" && (
        <TestReport questions={state.questions} />
      )}
    </>
  );
}
export default Test;
