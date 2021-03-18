
const initialState = {
  arr: [
    {
      alt: "Add custom",
    },
  ],
};

export default function iconReducer(state = initialState, action) {
  switch (action.type) {
    case "add_custom":
      return { ...state, arr: [action.payload, ...state.arr ] };
    default:
      return state;
  }
}
