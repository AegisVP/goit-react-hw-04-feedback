import PropTypes from 'prop-types';
import { Box } from 'components/Common/Box';

import { FbButton } from './Feedback.styled';

export const Controls = ({ options: feedbackOptions = [], onFeedbackClick }) => {
  // console.log(options);
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" py="10px">
      {feedbackOptions.map(feedbackOption => {
        const { key, bgColor, title } = feedbackOption;

        return (
          <FbButton
            key={key}
            backgroundColor={bgColor}
            onClick={() => {
              onFeedbackClick(key);
            }}
          >
            {title}
          </FbButton>
        );
      })}
    </Box>
  );
};

Controls.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      bgColor: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFeedbackClick: PropTypes.func.isRequired
};
