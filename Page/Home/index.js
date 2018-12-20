import Home from "./Home";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../../reducer";

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setItemsState: bindActionCreators(actionCreators.setItemsState, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
