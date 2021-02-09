import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class PlayButton extends React.Component {
    render() {
        return(
            <div>
              <Button variant="primary" size ="lg" active>
                 Youtube play
              </Button>
            </div>
        )
    }
}

Button.propTypes = {
    play: PropTypes.func,
};

export default PlayButton;