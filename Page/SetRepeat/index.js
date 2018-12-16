import SetRepeat from "./SetRepeat";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../reducer";

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setRepeatInterval: bindActionCreators(
      actionCreators.setRepeatInterval,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetRepeat);
