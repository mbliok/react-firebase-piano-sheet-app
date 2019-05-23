const initState = {
  projects: [
    { id: '1', title: 'Pr title one', content: 'Pr content 1' },
    { id: '2', title: 'Pr title two', content: 'Pr content 2' },
    { id: '3', title: 'Pr title tree', content: 'Pr content 3' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
  }
  return state;
};
export default projectReducer;
