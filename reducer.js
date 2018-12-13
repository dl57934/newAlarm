const SET_DATE = "SET_DATE";
const VISIBLE_CALENDAR = "VISIBLE_CALENDER";
const SET_TIME = "SET_TIME";

const setDate = date => {
  return {
    type: SET_DATE,
    date
  };
};

const visibleCalendar = () => {
  return {
    type: VISIBLE_CALENDAR
  };
};

const setTime = time => {
  return {
    type: SET_TIME,
    time
  };
};

const initialState = {
  calendar: false,
  settedDate: {},
  setTime: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return applySetDate(state, action);
    case VISIBLE_CALENDAR:
      return applyVisibleCalender(state, action);
    case SET_TIME:
      return applySetTime(state, action);
    default:
      return state;
  }
};

const applySetTime = (state, action) => {
  return {
    ...state,
    setTime: action.time
  };
};

const applySetDate = (state, action) => {
  const setDate = action.date.dateString;
  let jsonVariable = {};
  jsonVariable[setDate] = {
    selected: true,
    marked: true,
    selectedColor: "#00008C"
  };
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
  visibleCalendar,
  setTime
};

export default reducer;
