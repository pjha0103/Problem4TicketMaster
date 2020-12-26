import {get} from '../common/Service_action';

export const searchApplicant= (obj) =>{
  return (dispatch) => {
    const request= get(
    `/discovery/v2/events.json?postalCode=${obj.postalCode}&apikey=74qDHxr3L6e3jTArWnU5gsVzT5mMpg18`
    ).then((res)=> {
      if(res.data._embedded){
      dispatch({
        type:'SEARCH_EVENT_BY_POSTAL_CODE' ,
        fetchedEventsResult: res.data._embedded.events,
        disableBtn:false
      });
    }
    else{
        dispatch({
        type:'SEARCH_EVENT_BY_POSTAL_CODE_FAILURE' ,
        fetchedEventsResult: [],
        noResult:true,
        disableBtn:false
      });
    }
    });
    return request;
  }
}
