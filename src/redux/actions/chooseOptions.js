export function chooseOption(ele) {
  return {
    type: "choose_option",
    payload: ele,
  };
}
