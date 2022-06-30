import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  TheadCell,
  TbodyRow,
  TbodyCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <TheadCell>Type</TheadCell>
          <TheadCell>Amount</TheadCell>
          <TheadCell>Currency</TheadCell>
        </tr>
      </Thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TbodyRow key={id}>
              <TbodyCell>{type}</TbodyCell>
              <TbodyCell>{amount}</TbodyCell>
              <TbodyCell>{currency}</TbodyCell>
            </TbodyRow>
          );
        })}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
