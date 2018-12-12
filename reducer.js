const SET_DATE = "SET_DATE";
const VISIBLE_CALENDAR = "VISIBLE_CALENDER";

const setDate = () => {
  return {
    type: SET_DATE
  };
};

const visibleCalendar = () => {
  return {
    type: VISIBLE_CALENDAR
  };
};

const initialState = {
  visibleCalendar: false,
  setDate: ""
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

const applySetDate = state => {};

const applyVisibleCalender = state => {};

export const actionCreators = {
  setDate,
  visibleCalendar
};

export default reducer;
