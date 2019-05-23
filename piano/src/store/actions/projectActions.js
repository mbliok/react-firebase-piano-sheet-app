// here any type of add/edit/delete..item
export const createProject = project => {
  return (dispatch, getState) => {
    // to do async call to db
    dispatch({ type: 'CREATE_PROJECT', project: project });
  };
};

// action that return a obj/action function with type 'CREATE_PROJECT' and poject which receve from this action creator
