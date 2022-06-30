import PropTypes from 'prop-types';
import {
  UserWrapper,
  UserDescription,
  UserAvatar,
  Username,
  Usertag,
  UserLocation,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const UserProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserWrapper>
      <UserDescription>
        <UserAvatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Usertag>@{tag}</Usertag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>
      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </UserWrapper>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
