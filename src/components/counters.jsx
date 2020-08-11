import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    state = { 
        counters : [
            {id : 1, count : 0},
            {id : 2, count : 2},
            {id : 3 ,count : 0},
            {id : 4 ,count : 0},
        ]
     }

    deleteElement = id =>{
        const counters = this.state.counters.filter(c=>c.id !== id);
        this.setState({counters});
    }

    incrementElement = counter =>{
        console.log('HOLA');
        const counters = [...this.state.counters]
        const index = this.state.counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].count ++;

        this.setState({counters});

    }

    

    resetCounters = ()=>{
        const counters = this.state.counters.map(c=> {
            c.count = 0
            return c;
        });
        console.log(counters);
        this.setState({counters});
    }

    render() { 
        return ( 
            <div>
                <button onClick={this.resetCounters} className="btn btn-primary">Reset</button>
                {this.state.counters.map(counter=>
                <Counter 
                    onDelete={()=>this.deleteElement(counter.id)} 
                    onIncrement={()=>this.incrementElement(counter)}
                    key={counter.id} 
                    count={counter.count}>
                </Counter>)}
            </div>

        );
    }
}
 
export default Counters;