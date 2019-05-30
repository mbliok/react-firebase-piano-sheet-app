// here create any type of actions add/edit/delete..item
export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // to do async call to db
    // referance to fb db
    const firestore = getFirestore();
    firestore
      .collection('sheets')
      .add({
        //which is reseved from this.state on submit in create project
        // the same as project.title / project.content
        ...project,
        authorFirstName: 'Maya',
        authorLastName: 'Bliok',
        authorId: 123,
        createdAt: new Date()
        // because this take some time to do, it return a promisse
      })
      .then(() => {
        // then() method will only fire when this action method in compleate,
        // this then() method takes in a collback function,
        // and this callback func( dispatch({ type: 'CREATE_P......) is the fires when this task is compleate
        dispatch({ type: 'CREATE_PROJECT', project: project }); //  project: project is the state - <form> add new...
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
};

// action that return a obj/action function with type 'CREATE_PROJECT' and poject which receve from this action creator
// when we use a thunk we actualy use a function return (dispatch, getState)
