

import { useState} from "react";

function useToggle(defaultValue) {
  const [toggle, setToggle] = useState(defaultValue);

  const toggleValue = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return [toggle, toggleValue];
}

export default useToggle;
