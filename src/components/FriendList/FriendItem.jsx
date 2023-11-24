import {
  FriendCard,
  Status,
  PhotoFriend,
  NameFriend,
} from './FriendItem.styled';
import PropTypes from 'prop-types';

export const FriendItem = ({ friend }) => {
  return (
    <FriendCard className="item">
      <Status className="status" isOnline={friend.isOnline}></Status>
      <PhotoFriend
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <NameFriend className="name">{friend.name}</NameFriend>
    </FriendCard>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
