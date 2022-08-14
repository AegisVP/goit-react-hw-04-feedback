import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'components/Common/Box';
import { StatRow, Value } from './Display.styled';

export const Stats = ({ options, values, countTotalFeedback, countPositiveFeedbackPercentage }) => {
  let rColor = 255 - 2.55 * (countPositiveFeedbackPercentage - 75) * 4;
  let gColor = 2.55 * (countPositiveFeedbackPercentage * 2 - 100) * 2;

  rColor = Math.round(rColor > 255 ? 255 : rColor < 0 ? 0 : rColor);
  gColor = Math.round(gColor > 255 ? 255 : gColor < 0 ? 0 : gColor);

  return (
    <Box borderTop="2px solid #DDDDDD">
      {options.map(option => (
        <StatRow key={option.key} backgroundColor={option.bgColor}>
          {option.cc}:<Value>{values[option.key]}</Value>
        </StatRow>
      ))}
      <StatRow backgroundColor="#f0f0f0">
        Total: <Value>{countTotalFeedback}</Value>
      </StatRow>
      <StatRow backgroundColor={`rgba(${rColor}, ${gColor}, 0, 0.25)`}>
        Positive %: <Value>{countPositiveFeedbackPercentage}%</Value>
      </StatRow>
    </Box>
  );
};

Stats.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      cc: PropTypes.string.isRequired,
      uc: PropTypes.string.isRequired,
      lc: PropTypes.string.isRequired,
      bgColor: PropTypes.string.isRequired,
    })
  ),
  values: PropTypes.any.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
