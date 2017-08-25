class TimerInterface extends React.Component {
    render() {
        return (
                <div className='timer'>
                    <Timer 
                        title={'Fire-Check Reminder'}
                        time={'00:00'}
                    />
                </div>
        );
    }        
}

class Timer extends React.Component {
    render() {
        return (
        <div className='ui card'>
            <div className='card'>
                <div className='content'>
                    <div id='timer_header'className='center aligned description'>
                        <p>{this.props.title}</p>
                    </div>
                    <div id='time' className='center aligned description'>
                        <h3>{this.props.time}</h3>
                    </div>
                </div>
                <div className='extra content'>
                    <div className='ui two buttons'>
                <div className="ui basic green button">Start</div>
                <div className="ui basic red button">Stop</div>
                    </div>
                </div>
            </div>
        </div>
        );
    }        
}

//class Reminder extends React.Component {
//    render() {
//        return (
//        );
//    }        
//}


ReactDOM.render(
  <TimerInterface />,
  document.getElementById('content')
);

