export default function optionReducer(state = { list: [] }, action) {
  switch (action.type) {
    case "choose_option":
      return { ...state, list: [...state.list, action.payload] };
    default:
      return state;
  }
}
