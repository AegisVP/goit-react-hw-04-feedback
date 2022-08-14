import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'components/Common/Box';
import { lang } from '../Common/lang.js';

import { StatRow, Value } from './Display.styled';

export const Stats = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {
  let rColor = 255 - 2.55 * (countPositiveFeedbackPercentage - 75) * 4;
  let gColor = 2.55 * (countPositiveFeedbackPercentage * 2 - 100) * 2;

  rColor = Math.round(rColor > 255 ? 255 : rColor < 0 ? 0 : rColor);
  gColor = Math.round(gColor > 255 ? 255 : gColor < 0 ? 0 : gColor);

  return (
    <Box borderTop="2px solid #DDDDDD">
      <StatRow backgroundColor="#ccffcc">
        {lang.good.cc}: <Value>{good}</Value>
      </StatRow>
      <StatRow backgroundColor="#ccffff">
        {lang.neutral.cc}: <Value>{neutral}</Value>
      </StatRow>
      <StatRow backgroundColor="#ffcccc">
        {lang.bad.cc}: <Value>{bad}</Value>
      </StatRow>
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
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
