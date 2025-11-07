import { useState, useEffect } from "react";
import { RESTO_API } from "../constants/constants";
const useFetchResto = () => {
  const [restInfo, setRestInfo] = useState([]);
  useEffect(() => {
    fetchResto();
  }, []);
  const fetchResto = async () => {
    const data = await fetch(RESTO_API);
    const json = await data.json();
    console.log(json);
    setRestInfo(json);
  };
  return restInfo;
};
export default useFetchResto;
