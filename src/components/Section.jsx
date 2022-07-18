import React from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { useState } from "react";
import { Feedback } from "./Section.styled";

export default function Section() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    // обробляє натискання на кнопку
    const onLeaveFeedback = key => {
        switch (key) {
            case 'good': setGood(prev => prev + 1); break;
            case 'neutral': setNeutral(prev => prev + 1); break;
            default: setBad(prev => prev + 1); break;                
        }
    };

    return (
        <Feedback>
            <h2>Please leave your feedback</h2>

            {/* блок кнопок */}
            <FeedbackOptions onLeaveFeedback={onLeaveFeedback} /> 

            {/* блок статистики */}
            <Statistics data={[good, neutral, bad]} />
        </Feedback>
    )
}

