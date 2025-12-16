import { useEffect, useState } from "react";
import { MENU_API } from "../constants/constants";
const useFetchMenu = (resId) => {
  const [menuInfo, setmenuInfo] = useState(null);
  useEffect(() => {
    FetchMenu();
  }, []);
  const FetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setmenuInfo(json.data);
  };
  return menuInfo;
};
export default useFetchMenu;