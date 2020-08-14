import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';
import NavBar from './components/navbar';


class App extends Component {

  state = { 
    counters : [
        {id : 1, count : 0},
        {id : 2, count : 2},
        {id : 3 ,count : 0},
        {id : 4 ,count : 0},
    ]
 }

  deleteElement = id =>{
      console.log('ADIOS');
      console.log(id)
      const counters = this.state.counters.filter(c=>c.id !== id);
      this.setState({counters});
  }

  incrementElement = counter =>{
      console.log('HOLA' );
      console.log(counter)
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
    <React.Fragment>
      <NavBar/>
      <main className="container">
        <Counters
          counters={this.state.counters}
          onReset={this.resetCounters}
          onDelete={()=>this.deleteElement}
          onIncrement={this.incrementElement}
        />
      </main>

    </React.Fragment>
    )
  }

}

export default App;
