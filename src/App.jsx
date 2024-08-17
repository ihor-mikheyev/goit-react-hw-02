import { useState, useEffect } from 'react'
import Description from './components/Description/Description'
import './App.css'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

function App() {
  const KEY = "feedback";

  const [feedback, setFeedback] = useState(() => {
    const savedObject = window.localStorage.getItem(KEY);
    return savedObject ? JSON.parse(savedObject) : { good: 0, neutral: 0, bad: 0 };
  });
  
  useEffect(() => { 
    window.localStorage.setItem(KEY, JSON.stringify(feedback), [feedback])
  })
 
const changeCount = (key) => { 
  setFeedback({
    ...feedback, [key]: feedback[key] + 1
  });
}
  
const resetFeedback = () => {
  setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
};
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)

  
  return (<>
    <Description></Description>
    <Options counter={changeCount}
      condition={totalFeedback}
      reset={resetFeedback}
    
    />
    {totalFeedback  ?  <Feedback object={feedback}   total={totalFeedback}
      positive={ positiveFeedback}/> : <Notification/>}
  </>)
}

export default App
