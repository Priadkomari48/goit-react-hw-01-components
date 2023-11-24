import {
  TableTransaction,
  THeadTransaction,
  TBodyTransaction,
  RawOfTransaction,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const Transactions = ({ items }) => {
  return (
    <TableTransaction className="item-history">
      <THeadTransaction>
        <tr>
          <th>{'Type'.toUpperCase()}</th>
          <th>{'Amount'.toUpperCase()}</th>
          <th>{'Currency'.toUpperCase()}</th>
        </tr>
      </THeadTransaction>
      <TBodyTransaction>
        {items.map(item => {
          return (
            <RawOfTransaction key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </RawOfTransaction>
          );
        })}
      </TBodyTransaction>
    </TableTransaction>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
