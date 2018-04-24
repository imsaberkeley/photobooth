import React from 'react'
import ReactDOM from 'react-dom'
import globalCss from '../css/global.css.js'
import { Button, Score, CountDownDigit } from '../components/elements'
import Loading from '../components/loading'
import _ from 'lodash'

const STATE_READY = 0;
const STATE_COUNT_DOWN_3 = 1;
const STATE_COUNT_DOWN_2 = 2;
const STATE_COUNT_DOWN_1 = 3;
const STATE_WAITING_PHOTO = 4;
const STATE_PREVIEW = 5;

export default class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isFrontEnd: false,
      appState: STATE_READY
    }
    
  }

  componentDidMount() {
    this.setState({ isFrontEnd: true })
  }

  renderWS() {
    if(this.state.isFrontEnd) {
      const Websocket = require('react-websocket');
      return (<Websocket url='ws://localhost:8080/' onMessage={this.handleData.bind(this)} ref={(ws) => {this.ws = ws;}}/>);
    }
  }

  handleData(data) {
    let result = JSON.parse(data);
    if(result.event ==='sensor') {
      //const timeSinceLastTrigger = new Date() - this.lastPhaseTrigger;
      if(result.fsr2Hit && this.state.appState == STATE_READY) {
        this.handleSnapClicked();
      }

    } else if(result.event == 'photo_ready') {
      this.setState({ appState: STATE_PREVIEW, previewPath: result.path });
      setTimeout(() => {
        this.setState({ appState: STATE_READY });
      }, 5000);
    }
  }

  handleMouseMove(e) {
    // const triggeredKey = Math.floor(e.screenX * 5 / 1280.0);
    // this.setState({ triggeredKey })
  }

  handleSnapClicked() {
    this.setState({ appState: STATE_COUNT_DOWN_3 });
    setTimeout(() => {
      this.setState({ appState: STATE_COUNT_DOWN_2 });
    }, 1000);
    setTimeout(() => {
      this.setState({ appState: STATE_COUNT_DOWN_1 });
    }, 2000);
    setTimeout(() => {
      //TODO tell server to take photo
      if(this.ws) {
        console.log(this.ws);
        this.ws.state.ws.send(JSON.stringify({ type: 'command', 'command': 'take_photo' }));
      }
      this.setState({ appState: STATE_WAITING_PHOTO });
    }, 3000);

  }

  render() {
    const { appState, previewPath } = this.state;
    return (
      <div>
        <style jsx global>{globalCss}</style>
        <div style={{ padding: '0 20px' }}>
          {appState == STATE_READY &&
            <div>
              <h1>Press the floor mat or 'Space'<br /> to take a photo</h1>
              <div>
                <Button onClick={this.handleSnapClicked.bind(this)}>Snap</Button>
              </div>
            </div>
          }
          {appState == STATE_COUNT_DOWN_3 &&
            <div>
              <CountDownDigit>3</CountDownDigit>
            </div>
          }
          {appState == STATE_COUNT_DOWN_2 &&
            <div>
              <CountDownDigit>2</CountDownDigit>
            </div>
          }
          {appState == STATE_COUNT_DOWN_1 &&
            <div>
              <CountDownDigit>1</CountDownDigit>
            </div>
          }
          {appState == STATE_WAITING_PHOTO &&
            <div>
              <h2>Waiting for the camera</h2>
              <Loading />
            </div>
          }
          {appState == STATE_PREVIEW &&
            <div>
              <img src={previewPath} style={{ maxWidth: '80%' }}/>
            </div>
          }
          
        </div>
        {this.renderWS()}
      </div>
    );
  }

}