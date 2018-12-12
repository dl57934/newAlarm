import AddAlarm from "./AddAlarm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../reducer";

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(AddAlarm);
