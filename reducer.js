const SET_DATE = "SET_DATE";
const VISIBLE_CALENDAR = "VISIBLE_CALENDER";
const VISIBLE_SET_TITLE = "VISIBLE_TITLE";
const SET_TIME = "SET_TIME";
const SET_MUSIC = "SET_MUSIC";
const SET_TITLE = "SET_TITLE";

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

const visibleSetTitle = () => {
  console.log("hihi");
  return {
    type: VISIBLE_SET_TITLE
  };
};

const setTime = time => {
  return {
    type: SET_TIME,
    time
  };
};

const setMusic = music => {
  return {
    type: SET_MUSIC,
    music
  };
};

const setTitle = title => {
  return {
    type: SET_TITLE,
    title
  };
};

const initialState = {
  calendar: false,
  settedDate: {},
  setTime: [],
  musicInfo: { uri: undefined, name: "설정 안 함" },
  title: "설정 안 함",
  visibleTitle: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return applySetDate(state, action);
    case VISIBLE_CALENDAR:
      return applyVisibleCalender(state, action);
    case SET_TIME:
      return applySetTime(state, action);
    case SET_MUSIC:
      return applySetMusic(state, action);
    case SET_TITLE:
      return applySetTitle(state, action);
    case VISIBLE_SET_TITLE:
      return applyVisibleSetTitle(state, action);
    default:
      return state;
  }
};

const applyVisibleSetTitle = (state, action) => {
  return {
    ...state,
    visibleTitle: !state.visibleTitle
  };
};

const applySetTitle = (state, action) => {
  if ((state.title !== undefined, action.title === undefined)) {
    return {
      ...state
    };
  } else {
    return {
      ...state,
      title: action.title
    };
  }
};

const applySetMusic = (state, action) => {
  if ((state.musicInfo !== undefined, action.music.name === undefined)) {
    return {
      ...state
    };
  } else {
    return {
      ...state,
      musicInfo: action.music
    };
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
  setTime,
  setMusic,
  setTitle,
  visibleSetTitle
};

export default reducer;
