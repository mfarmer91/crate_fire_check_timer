class ReminderInterface extends React.Component {
    
    render() {
        return (
            <div className='interface'>
                <div className='timer'>
                    <Timer 
                        title={'Fire-Check Reminder'}
                    />
                </div>
                <div className='reminder'>
                    <Reminder 
                    />
                </div>
            </div>
        );
    }        
}

class Timer extends React.Component {
    state = {
        elapsed: 0
    }
    
    tick = () => {
        this.setState({ elapsed: this.state.elapsed + 1});
    }


    onStartClick = () => {
        setInterval(() => this.tick(), 50);
    }
    
    render() {
        return (
        <div className='ui card'>
            <div className='card'>
                <div className='content'>
                    <div id='timer_header'className='center aligned description'>
                        <p>{this.props.title}</p>
                    </div>
                    <div id='time' className='center aligned description'>
                        <h3>{this.state.elapsed}</h3>
                    </div>
                </div>
                <div className='extra content'>
                    <div className='ui two buttons'>
                        <div className="ui basic green button" onClick={this.onStartClick}>Start</div>
                        <div className="ui basic red button">Stop</div>
                    </div>
                </div>
            </div>
        </div>
        );
    }        
}

class Reminder extends React.Component {
    state = {
        isShown: false,
    }
    
    render() {
        return (
            <div id='notification' className="ui warning compact message">
                <p>Yo, fool: check the building to make sure it's not on fire!</p>
            </div>
        );
    }        
}


ReactDOM.render(
  <ReminderInterface />,
  document.getElementById('content')
);

