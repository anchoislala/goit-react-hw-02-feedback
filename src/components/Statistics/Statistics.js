import PropTypes from 'prop-types';
import { CgSmileMouthOpen, CgSmileNeutral, CgSmileSad, CgUserList, CgUserlane } from "react-icons/cg";
import { List, ListItem, Text } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <List>
        <ListItem><CgSmileMouthOpen color='green'/><Text>Good: { good }</Text></ListItem>
        <ListItem><CgSmileNeutral color='orange'/><Text>Neutral: { neutral }</Text></ListItem>
        <ListItem><CgSmileSad color='red'/><Text>Bad: { bad }</Text></ListItem>
        <ListItem><CgUserList color='grey'/><Text>Total: { total }</Text></ListItem>
        <ListItem><CgUserlane color='green'/><Text>Positive feedback: { positivePercentage }%</Text></ListItem>
    </List>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;