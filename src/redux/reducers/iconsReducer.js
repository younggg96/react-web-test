export default function iconReducer(state = {}, action) {
  //   console.log(action)
  switch (action.type) {
    case "add_custom":
      return { ...state, iconType: action.payload.iconType };
    default:
      return state;
  }
}
