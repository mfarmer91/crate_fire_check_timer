const toSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)

class ReminderInterface extends React.Component {
    
    render() {
        return (
            <div className='interface'>
                <div className='timer'>
                    <Timer 
                        title={'Fire-Check Reminder'}
                    />
                </div>
            </div>
        );
    }        
}

class Timer extends React.Component {
    state = {
        elapsed: 1800,
    }
    
    tick = () => {
        this.setState({ elapsed: this.state.elapsed + 1});
    }

    onStartClick = () => {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    onStopClick = () => {
        clearInterval(this.interval);
    }
    
    render() {
        let reminder = null;
        if (this.state.elapsed >= 1800){
            reminder = <Reminder />
        }
        
        return (
        <div>
            <div className='ui card'>
                <div className='card'>
                    <div className='content'>
                        <div id='timer_header'className='center aligned description'>
                            <p>{this.props.title}</p>
                        </div>
                        <div id='time' className='center aligned description'>
                            <h3>{toSeconds(this.state.elapsed)}</h3>
                        </div>
                    </div>
                    <div className='extra content'>
                        <div className='ui two buttons'>
                            <div className="ui basic green button" onClick={this.onStartClick}>Start</div>
                            <div className="ui basic red button" onClick={this.onStopClick}>Stop</div>
                        </div>
                    </div>
                </div>
            </div>
            {reminder}
        </div>
        );
    }        
}

class Reminder extends React.Component {
    
    render() {
        return (
            <div className='reminder'>
                <div id='notification' className="ui warning compact message">
                    <p>Yo, fool: check the building to make sure it's not on fire!</p>
                </div>
            </div>
        );
    }        
}


ReactDOM.render(
  <ReminderInterface />,
  document.getElementById('content')
);



