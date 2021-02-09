import React from 'react';
import { Button } from 'react-bootstrap';

export default class PlayButton extends React.Component {
    render() {
        return(
            <div>
              <Button variant="primary" size ="lg" onClick={() => this.play()}>
                 Youtube play
              </Button>
            </div>
        )
    }
}