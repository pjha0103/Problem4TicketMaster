const initialState={
  fetchedEventsResult: [],
}

const EventReducer =(state = initialState, action) => {
  switch(action.type){
    case 'SEARCH_EVENT_BY_POSTAL_CODE':
    return {
      ...state,
      fetchedEventsResult: action.fetchedEventsResult,
      disableBtn:action.disableBtn
    };
      case 'SEARCH_EVENT_BY_POSTAL_CODE_FAILURE':
    return {
      ...state,
      fetchedEventsResult: action.fetchedEventsResult,
      noResult:action.noResult,
      disableBtn:action.disableBtn
    };
     default:
     return state;
  } 
};

export default EventReducer;
