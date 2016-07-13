import m from 'mithril';

import { connect } from '../configureStore';
import { toggleMenu, toggleAuth } from '../actions/navigationActions';

const Navigation = {
  view(ctrl, props) {
    const {
      actions: { toggleMenu, toggleAuth },
      isOpen,
      isAuthed
    } = props;

    return (
      <nav>
        <div
          className="nav--element-right"
          onClick={toggleMenu}
        >
          {isOpen ? 'close' : 'hamburger'}
        </div>

        <div
          className="nav--element-left"
          onClick={toggleAuth}
        >
          {isAuthed ? 'Logout' : 'Login'}
        </div>

      </nav>
    );
  }
}

const mapStateToProps = ({ navigation: { isOpen, isAuthed } }) => ({
  isOpen,
  isAuthed
});

export default connect(mapStateToProps, {
  toggleMenu,
  toggleAuth
})(Navigation);
