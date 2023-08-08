import axios from "axios";


export const getData = async (url) => {
    const res = await axios(url);
    const data = await res.data;
    return data;
  };

