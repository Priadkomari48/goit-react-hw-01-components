import { Friendslist } from './FriendList.styled';
import { FriendItem } from './FriendItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <Friendslist className="friend-list">
      {friends.map(friend => {
        return <FriendItem friend={friend} key={friend.id}></FriendItem>;
      })}
    </Friendslist>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
