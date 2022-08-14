import PropTypes from 'prop-types';
import { Box } from 'components/Common/Box';

import { FbButton } from './Feedback.styled';

export const Controls = ({ options = [], onFeedbackClick }) => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" py="10px">
      {options.map(option => {
        const { key, bgColor, uc:title } = option;

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
      cc: PropTypes.string,
      uc: PropTypes.string.isRequired,
      lc: PropTypes.string,
      bgColor: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFeedbackClick: PropTypes.func.isRequired,
};
