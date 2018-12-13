const SET_DATE = "SET_DATE";
const VISIBLE_CALENDAR = "VISIBLE_CALENDER";

const setDate = date => {
  return {
    type: SET_DATE,
    date
  };
};

const visibleCalendar = () => {
  console.log("hihi");
  return {
    type: VISIBLE_CALENDAR
  };
};

const initialState = {
  calendar: false,
  settedDate: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return applySetDate(state, action);
    case VISIBLE_CALENDAR:
      return applyVisibleCalender(state, action);
    default:
      return state;
  }
};

const applySetDate = (state, action) => {
  const setDate = action.date.dateString;
  let jsonVariable = {};
  jsonVariable[setDate] = {
    selected: true,
    marked: true,
    selectedColor: "#00008C"
  };
  console.log();
  if (state.settedDate.hasOwnProperty(setDate)) {
    jsonVariable[setDate] = undefined;
  }
  return {
    ...state,
    settedDate: {
      ...state.settedDate,
      ...jsonVariable
    }
  };
};

const applyVisibleCalender = state => {
  return {
    ...state,
    calendar: !state.calendar
  };
};

export const actionCreators = {
  setDate,
  visibleCalendar
};

export default reducer;
