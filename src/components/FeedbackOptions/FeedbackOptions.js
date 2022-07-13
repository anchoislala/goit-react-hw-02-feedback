import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(button => {
        return (
            <button
                key={button}
                type='button'
                onClick={onLeaveFeedback}
                name={button}>
            {button}
            </button>
        )})
};

//CgSmileMouthOpen
//CgSmileNeutral
//CgSmileSad

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;