import m from 'mithril';

import { connect } from '../configureStore';
import { increment, decrement } from '../actions/counterActions';

// const Counter = {
//   view(ctrl, props) {
//     const { actions: { increment, decrement }, counter } = props;

//     return m('.Counter', [
//       m('h1', `${counter} clicked`),
//       m('button', { onclick: increment }, 'increment'),
//       m('button', { onclick: decrement }, 'decrement')
//     ]);
//   }
// };

// mjsx
const Counter = {
  view(ctrl, props) {
    const { actions: { increment, decrement }, counter } = props;

    return (
      <div className="Counter">
        <h1>
          {`${counter} clicked`}
        </h1>
        <button onclick={increment}>
          increment
        </button>
        <button onclick={decrement}>
          decrement
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ counter }) => ({
  counter
});

export default connect(mapStateToProps, {
  increment,
  decrement
})(Counter);
