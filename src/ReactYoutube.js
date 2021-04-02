import React from 'react';
import { ButtonGroup, Button, Col, Row} from 'react-bootstrap';
import Proptypes from 'prop-types';
import YouTube from 'react-youtube';
import ProgressBar from './ProgressBar';
import './stylesheet/YoutubeVideo.sass'
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
      playfrom: 0,
      playUntil: 0,
      repeattime: 3,
      duration: 0,

    };

    this.updateProgressBar = this.updateProgressBar.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.repeat = this.repeat.bind(this);
    this.stop = this.stop.bind(this);
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
    let video =  this.state.eventVideo?.target;
    video?.pauseVideo();
    if(video?.getPlayerState() === 2){
      this.setState({isToogle: false});
    }
  };

  repeat() {
    this.setState({ progressBar: 0});
    this.state.eventVideo?.target?.seekTo(this.state.theFirstLesson?.playFrom, true);
    this.play();
  }

  updateProgressSkit() {
    let self = this;
    let timer = setInterval(() => {
      self.updateProgressBar();
      if(self.state.isToogle == false || self.state.progressBar == 100){
        clearInterval(timer);
      }
    }, 100);
  }

  resetRepeatTime() {
    this.repeatNumber = 0;
    this.pause();
  }

  setRepeatNumber() {
    let self = this;
    if(self.repeatNumber <= self.state.repeatTime && self.state.playVideo) {
      self.repeatNumber++;
    }
  }

  stop() {
    let video = this.state.eventVideo?.target;
    video?.stopVideo();
  }

  updateProgressBar() {
    let self = this;
    let timer = setInterval(function(){
      if (self.state.playVideo) {
        let currentVideoTime = self.state.eventVideo?.target?.getCurrentTime();
        let progressBarTime = (currentVideoTime - self.state.playFrom);
        let percentage = Math.floor((progressBarTime / self.state.duration) * 100);
        let [progressBar] = document.querySelectorAll(".b-progress-bar .progress-bar");
        if (typeof progressBar !== "undefined") {
          progressBar.style.width = `${percentage}%`;
        }

        if (currentVideoTime >= self.state.playUntil) {
          clearInterval(timer);
          self.repeat();
        }
      }
    }, 100);
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
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={12} sm={12} xs={12} className="px-0 px-sm-1 px-md-2 p-lg-3 video-box">
           <div className="Play-button">
             <ButtonGroup size="mb-2">
               <Button onClick={this.play}>play</Button>
               <Button onClick={this.pause}>pause</Button>
               <Button onClick={this.stop}>stop</Button>
             </ButtonGroup>
           </div>
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
        </Row>
      </React.Fragment>
    );
  }
}

ReactYoutube.propTypes = {
  dispatch: Proptypes.func,
  player: Proptypes.shape({
    isPlay: Proptypes.bool,
    isPause: Proptypes.bool
  }),
};