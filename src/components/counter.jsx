import React, { Component } from "react";

class Counter extends Component {
    state = {
        // count : this.props.count,
    }



  render() {

    return (
      <div className="m-2">
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.props.onIncrement} className="btn btn-secondary" >Increment</button>
        <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }



    getBadgeClasses() {
        let classes = 'badge m-2 ';
        classes += this.props.count === 0 ? 'badge-warning' : 'badge-primary';
        return classes;
    }

  formatCount(){
      return this.props.count === 0 ? 'Zero': this.props.count;
  }
}

export default Counter;
