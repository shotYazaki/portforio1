import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import Proptypes from 'prop-types';
import YouTube from 'react-youtube';

// https://www.youtube.com/watch?v=-_pgcFQ0l64
// https://youtu.be/-_pgcFQ0l64
// https://www.youtube.com/watch?v=-_pgcFQ0l64&list=PLEsfXFp6DpzQbwYDx1zgcKJ4tzyWFaESK
export default class ReactYoutube extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventVideo: {},
      responsed: false,
      isToogle: false,
      playbackRate: 1,
      progressBar: 0,
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.repeat = this.repeat.bind(this);

  }

  play() {
    let video = this.setState.eventVideo?.target;

    video?.playVideo();

    if(video?.getPlayerState() === 1){
      this.setState({isToogle: true});
    }
  };

  pause() {
    let video = this.state.eventVideo?.target;
    video?.pauseVideo();
    if(video?.getPlayerState() === 2){
      this.setState({isToogle: false});
    }
  };

  repeat() {
    this.play();
  };


  componentWillUnmount (event) {
    const player = event.target
    console.log(player.getCurrentTime())
  }

  render () {
    let self = this;

    const _onPlay = () => {
      self.play();
    };

    const _onReady = () => {
      self.play();
    };

    const _onPause = () => {
      self.pause();
    };

    const _onEnd = () => {
      self.repeat();
    };

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        loop: 1,
        autoplay: 1,
        controls: 0,
        fs: 0,
        playsinline: 1,
        cc_load_policy: 3,
        rel: 0,
      }
    };
    const {videoId} = this.props
    return (
      <React.Fragment>
        <div className='Youtube-Video'>
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={_onReady}
            onPlay={_onPlay}
            onPause={_onPause}
            onEnd={_onEnd}
            onStateChange={this.videoStateChange}
          />
        </div>
        <div className="float-btn">
          <div className="btn-play-pause">
            <div className="btn-play-pause">
              { this.state.isToogle ? <FontAwesomeIcon icon={faPause} size="xs" className="icon" onClick={() => this.pause()}/>
                : <FontAwesomeIcon icon={faPlay} size="xs" className="icon" onClick={() => this.play()}/>
              }
            </div>
          </div> 
        </div>
      </React.Fragment>
    );
  }
}

ReactYoutube.propTypes = {
  skitDetail: Proptypes.object,
  dispatch: Proptypes.func,
  math: Proptypes.shape({
    params: Proptypes.shape({
      sklitId: Proptypes.string
    }),
  }),
};