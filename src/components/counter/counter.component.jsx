import React from "react";
import { connect } from "react-redux";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//   }

//   // incrementCount = () => {
//   //   this.setState({ count: this.state.count + 1 });
//   // };

//   // decrementCount = () => {
//   //   this.setState({ count: this.state.count - 1 });
//   // };

//   // resetCount = () => {
//   //   this.setState({ count: 0 });
//   // };

//   //   toggleDisabled = () => {
//   //     this.setState({ disableCounter: !this.state.disableCounter });
//   //   };

//   render() {
//     // const { count } = this.state;
//     const { count } = this.props;
//     return (
//       <div>
//         <h4>Count: {count}</h4>
//         <p>Disabled counter: {!this.props.logged ? `true` : `false`}</p>
//         <button onClick={this.incrementCount} disabled={!this.props.logged}>
//           +
//         </button>
//         <button onClick={this.decrementCount} disabled={!this.props.logged}>
//           -
//         </button>
//         <button onClick={this.resetCount} disabled={!this.props.logged}>
//           Reset
//         </button>
//         {/* <div>
//           <button onClick={this.toggleDisabled}>
//             {disableCounter ? `Enable` : `Disable`}
//           </button>
//         </div> */}
//       </div>
//     );
//   }
// }

const Counter = ({ count }) => {
  console.log(count);

  return <h4>Count: {count}</h4>;
};

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);
