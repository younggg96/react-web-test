const initialState = {
  arr: [
    {
      alt: "Add custom",
    },
  ],
};

export default function iconReducer(state = initialState, action) {
  //   console.log(action)
  switch (action.type) {
    case "add_custom":
      return { ...state, arr: [...state.arr, action.payload] };
    default:
      return state;
  }
}
