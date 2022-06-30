import PropTypes from 'prop-types';
import {
  Statistics,
  Title,
  List,
  ListItem,
  ItemLabel,
} from './Statistics.styled';

export const UserStatistics = ({ title, stats }) => {
  return (
    <Statistics>
      {Title && <Title>{title}</Title>}

      <List>
        {stats.map(elem => {
          return (
            <ListItem key={elem.id}>
              <ItemLabel>{elem.label}</ItemLabel>
              <ItemLabel>{elem.percentage}%</ItemLabel>
            </ListItem>
          );
        })}
      </List>
    </Statistics>
  );
};
UserStatistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
