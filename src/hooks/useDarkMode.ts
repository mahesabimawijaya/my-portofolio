import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const useDarkMode = () => {
  return useSelector((state: RootState) => state.theme.darkMode);
};

export default useDarkMode;
