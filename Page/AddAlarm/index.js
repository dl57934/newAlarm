import AddAlarm from "./AddAlarm";
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
    setDate: bindActionCreators(actionCreators.setDate, dispatch),
    visibleCalendar: bindActionCreators(
      actionCreators.visibleCalendar,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAlarm);
