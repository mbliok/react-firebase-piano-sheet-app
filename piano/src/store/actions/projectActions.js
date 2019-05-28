// here create any type of actions add/edit/delete..item
export const createProject = project => {
  return (dispatch, getState) => {
    // to do async call to db
    dispatch({ type: 'CREATE_PROJECT', project: project }); //  project: project is the state - form add new...
  };
};

// action that return a obj/action function with type 'CREATE_PROJECT' and poject which receve from this action creator
// when we use a thunk we actualy use a function return (dispatch, getState)
