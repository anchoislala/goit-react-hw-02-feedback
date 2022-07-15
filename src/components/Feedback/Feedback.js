import React, {Component} from 'react';
import FeedbackOptions from '../FeedbackOptions'
import Section from '../Section'
import Statistics from '../Statistics';
import Notification from '../Notification';

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleFeedbackButton = event => {
        const { name } = event.target;
        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }))
    }

    countTotalFeedback () {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage () {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return Number(total ? (good / total * 100).toFixed(0) : 0);
    }

    getFeedbackOptions() {
        return Object.keys(this.state);
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();

        return (
            <div>
                <Section title='Please leave feedback'>
                    <FeedbackOptions
                        options={this.getFeedbackOptions()}
                        onLeaveFeedback={this.handleFeedbackButton} />
                </Section>

                <Section title='Statistics'>
                    {!total ?
                    (<Notification message="There is no feedback" />) :
                    (<Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={this.countPositiveFeedbackPercentage()} />)
                    }
                </Section>
                    
            </div>
            
        );
    }
}

export default Feedback;