import PropTypes from 'prop-types'
import { TbMoodSuprised } from "react-icons/tb";
import { Text } from './Notification.styled';

const Notification = ({ message }) => (
   <Text>{ message } <TbMoodSuprised width='20px'/></Text>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;