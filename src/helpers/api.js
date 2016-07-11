import * as Rx from 'rxjs';

// thunkservable pattern for api requests
export default (params) => {
const { url, method, data, loading, success, failure, abort, fnToAbort, stateKey } = params;

  return (actions, store) => {
    if (stateKey && store.getState()[stateKey].isLoading[fnToAbort]) {
      store.dispatch(abort);
    }
    return Rx.Observable.ajax({
      url,
      method,
      crossDomain: true,
      createXHR() {
        return new XMLHttpRequest();
      },
      withCredentials: false,
      body: data || null
    })
    .map(ajaxData => {
      if (ajaxData.response.status === 500) {
        return failure({
          errors: ajaxData.response.message,
          message: ajaxData.response.developerMessage
        }).value;
      }
      return success({
        response: ajaxData.response,
        message: `successful ${method} to ${url}`
      });
    })
    .takeUntil(actions.ofType(abort().value.type))
    .catch(failure)
    .startWith(loading);
  };
}