// icons
import shape1 from "../../assets/imgs/icons/Shape-1.png";
import shapeDark1 from "../../assets/imgs/icons/Shape-1-dark.png";
import shape2 from "../../assets/imgs/icons/Shape-2.png";
import shapeDark2 from "../../assets/imgs/icons/Shape-2-dark.png";
import shape3 from "../../assets/imgs/icons/Shape-3.png";
import shapeDark3 from "../../assets/imgs/icons/Shape-3-dark.png";

const ICON_MAP = {
  tempIcon: {
    img: shape1,
    dark: shapeDark1,
    alt: "Temperature",
  },
  cloudIcon: {
    img: shape2,
    dark: shapeDark2,
    alt: "Dust Temperature",
  },
  cloudTempIcon: {
    img: shape3,
    dark: shapeDark3,
    alt: "Cloud Temperature",
  },
  addIcon: {
    alt: "Add custom",
  },
};

export function addCustomIcon(icon) {
  let newElement = "";
  const arr = [ICON_MAP.tempIcon, ICON_MAP.cloudIcon, ICON_MAP.cloudTempIcon];
  arr.forEach(ele => {
    if(ele.alt === icon.iconType) {
      newElement = ele;
    }
  })
  console.log(newElement)
  return {
    type: "add_custom",
    payload: newElement,
  };
}
