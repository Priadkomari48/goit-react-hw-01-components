import {
  Section,
  TitleUploadStats,
  ListStats,
  ItemStats,
  LabelStats,
  Percentage,
} from './Statistics.styled';
import { getRandomHexColor } from './getRandomHexColor';
import PropTypes from 'prop-types';

export const StatisticsList = ({ data, title }) => {
  return (
    <Section className="statistics">
      {title && <TitleUploadStats>{title}</TitleUploadStats>}
      <ListStats className="stat-list">
        {data.map(data => {
          let randomColor = getRandomHexColor();
          return (
            <ItemStats
              key={data.id}
              style={{
                backgroundColor: randomColor,
              }}
            >
              <LabelStats className="label">{data.label}</LabelStats>
              <Percentage className="percentage">{data.percentage}%</Percentage>
            </ItemStats>
          );
        })}
      </ListStats>
    </Section>
  );
};

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
