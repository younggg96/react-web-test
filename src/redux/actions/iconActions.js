export function addCustomIcon(iconType) {
  return {
    type: "add_custom",
    payload: iconType,
  };
}
