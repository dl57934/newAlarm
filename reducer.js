const SET_DATE = "SET_DATE";
const VISIBLE_CALENDAR = "VISIBLE_CALENDER";
const VISIBLE_SET_TITLE = "VISIBLE_TITLE";
const SET_TIME = "SET_TIME";
const SET_MUSIC = "SET_MUSIC";
const SET_TITLE = "SET_TITLE";
const SET_VIBRATION = "SET_VIBRATION";
const SET_INTERVAL_REPEAT = "SET_INTERVAL_REPEAT";
const SET_DAYS_OF_WEEK = "SET_DAYS_OF_WEEK";
const SET_INITIAL_STATE = "SET_INITIAL_STATE";

const setDaysOfWeek = daysOfWeek => {
  const day = Object.keys(daysOfWeek);
  return {
    type: SET_DAYS_OF_WEEK,
    day
  };
};

const setInitialState = () => {
  return {
    type: SET_INITIAL_STATE
  };
};

const setVibration = () => {
  return {
    type: SET_VIBRATION
  };
};

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

const setRepeatInterval = (interval, repeat) => {
  return {
    type: SET_INTERVAL_REPEAT,
    repeatInterval: { interval, repeat }
  };
};

const initialState = {
  calendar: false,
  settedDate: {},
  time: "AM 01시 01분",
  musicInfo: { uri: undefined, name: "설정 안 함" },
  title: "설정 안 함",
  visibleTitle: false,
  vibration: false,
  repeatInterval: { interval: [5, 0], repeat: [3, 0] },
  daysOfWeek: {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  }
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
    case SET_VIBRATION:
      return applySetVibration(state, action);
    case SET_INTERVAL_REPEAT:
      return applySetIntervalRepeat(state, action);
    case SET_DAYS_OF_WEEK:
      return applySetDaysOfWeek(state, action);
    case SET_INITIAL_STATE:
      return applySetInitialState(state, action);
    default:
      return state;
  }
};

const applySetInitialState = (state, action) => {
  return {
    ...initialState
  };
};

const applySetDaysOfWeek = (state, action) => {
  if (action.day[0] === "remove") {
    return {
      ...state,
      daysOfWeek: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
      }
    };
  } else {
    return {
      ...state,
      daysOfWeek: {
        ...state.daysOfWeek,
        [action.day[0]]: !state.daysOfWeek[action.day[0]]
      }
    };
  }
};

const applySetIntervalRepeat = (state, action) => {
  return {
    ...state,
    repeatInterval: action.repeatInterval
  };
};

const applySetVibration = (state, action) => {
  return {
    ...state,
    vibration: !state.vibration
  };
};

const applyVisibleSetTitle = (state, action) => {
  return {
    ...state,
    visibleTitle: !state.visibleTitle
  };
};

const applySetTitle = (state, action) => {
  if ((state.title !== undefined, action.title === "")) {
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
    time: action.time
  };
};

const applySetDate = (state, action) => {
  const setDate = action.date.dateString;
  let jsonVariable = {};
  if (state.settedDate.hasOwnProperty(setDate)) {
    delete state.settedDate[setDate];
  } else {
    jsonVariable[setDate] = {
      selected: true,
      marked: true,
      selectedColor: "#00008C"
    };
  }
  if (setDate === "remove") {
    return {
      ...state,
      settedDate: {}
    };
  } else {
    return {
      ...state,
      settedDate: {
        ...jsonVariable
      }
    };
  }
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
  visibleSetTitle,
  setVibration,
  setRepeatInterval,
  setDaysOfWeek,
  setInitialState
};

export default reducer;
