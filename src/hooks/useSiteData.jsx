import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

const useSiteData = () => {
  return useContext(DataContext);
};

export default useSiteData;
