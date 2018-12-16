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
    ),
    setTime: bindActionCreators(actionCreators.setTime, dispatch),
    setMusic: bindActionCreators(actionCreators.setMusic, dispatch),
    setTitle: bindActionCreators(actionCreators.setTitle, dispatch),
    visibleSetTitle: bindActionCreators(
      actionCreators.visibleSetTitle,
      dispatch
    ),
    setVibration: bindActionCreators(actionCreators.setVibration, dispatch),
    setDaysOfWeek: bindActionCreators(actionCreators.setDaysOfWeek, dispatch),
    setInitialState: bindActionCreators(
      actionCreators.setInitialState,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAlarm);
