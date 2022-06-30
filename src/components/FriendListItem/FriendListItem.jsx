import PropTypes from 'prop-types';
import { avatarSize } from 'constants';
import {
  FriendItem,
  Status,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendItem key={id}>
      <Status status={isOnline}>{isOnline}</Status>
      <FriendAvatar src={avatar} alt="User avatar" width={avatarSize.average} />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
