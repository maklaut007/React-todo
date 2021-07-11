const initialState = {
  id: 'section_1',
};

export default function chosenDateReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_DATE': {
      return { id: action.payload.dateId };
    }

    default:
      return state;
  }
}
