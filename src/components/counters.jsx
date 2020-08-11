import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {

    render() { 
        return ( 
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary">Reset</button>
                {this.props.counters.map(counter=>
                <Counter 
                    onDelete={this.props.onDelete} 
                    onIncrement={this.props.onIncrement}
                    key={counter.id} 
                    count={counter.count}>
                </Counter>)}
            </div>

        );
    }
}
 
export default Counters;