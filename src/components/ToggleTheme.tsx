"use client";

import { useDispatch } from "react-redux";
import { toggleDarkMode } from "@/state/theme/themeSlice";
import useDarkMode from "@/hooks/useDarkMode";

const ToggleTheme = () => {
  const dispatch = useDispatch();
  const darkMode = useDarkMode();
  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <input type="checkbox" className="theme-checkbox" checked={darkMode} onChange={handleToggle} />
    </>
  );
};

export default ToggleTheme;
