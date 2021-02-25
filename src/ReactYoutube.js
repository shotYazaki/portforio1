import React from 'react';
import { ButtonGroup, Button, Col,} from 'react-bootstrap';
import ProgressBar from './ProgressBar';
import Proptypes from 'prop-types';
import YouTube from 'react-youtube';
import './stylesheet/YoutubeVideo.sass'
import './stylesheet/ProgressBar.sass'
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
    this.stop = this.stop.bind(this);
    this.updateProgressSkit = this.updateProgressSkit.bind(this);
  }

  play() {
    let video = this.state.eventVideo?.target;

    video?.playVideo();

    if(video?.getPlayerState() === 1){
      this.setState({isToogle: true});
      this.updateProgressSkit();
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
    this.setState({ progressBar: 0});
    this.state.eventVideo?.target.seekTo(this.props.video?.playFrom, true);
    this.play();
  }

  stop() {
    let video = this.state.eventVideo?.target;
    video?.stopVideo();
  }

  updateProgressSkit() {
    let self = this;
    let timer = setInterval(() => {
      self.updateProgressBar();
      if(self.state.isToogle === false || self.state.progressBar === 100){
        clearInterval(timer);
      }
    }, 100);
  }


  updateProgressBar(){
    let timeDurration = this.props.playUntil - this.props.playFrom;
    let timeRunning = this.state.eventVideo?.target?.getCurrentTime() - this.props.playFrom;
    let percentage = Math.floor((timeRunning / timeDurration) * 100);
    this.setState((prevState) =>  {
      if (prevState.progressBar < percentage){
        return { progressBar: percentage };
      }
    });
  }

  render () {
    let self = this;

    const _onPlay = () => {
      self.play();
    };

    const _onReady = (event) => {
      self.setState({ eventVideo: event });
      self.play();
    };

    const _onPause = () => {
      self.pause();
    };

    const _onEnd = () => {
      self.repeat();
    };

    const opts = {
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
        <div className="Play-button">
          <ButtonGroup size="mb-2">
            <Button onClick={this.play}>play</Button>
            <Button onClick={this.pause}>pause</Button>
            <Button onClick={this.stop}>stop</Button>
          </ButtonGroup>
        </div>
        <Col lg={{ span: 8, offset: 2 }} md={12} sm={12} xs={12} className="p-0 p-sm-1 p-md-2 p-lg-3">
          <div className={"auto-resizable-iframe"}>
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={_onReady}
              onPlay={_onPlay}
              onPause={_onPause}
              onEnd={_onEnd}
            />
          </div>
          <ProgressBar />
        </Col>
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