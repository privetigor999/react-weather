import React from "react";
import axios from "axios";
import styles from "./MainBlock.module.scss";

const MainBlock = ({ currentCity }) => {
  console.log(currentCity);
  const [city, setCity] = React.useState({});
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=410f4d0fdda24873e9cacf4cdbfc1341`;
  const axiosUrl = axios.get(url).then((response) => {
    return response.data;
  });
  console.log(axiosUrl);

  return (
    <div className={styles.mainBlock}>
      <div className={styles.cityWeater}>
        <h3>{axiosUrl.id}</h3>
        <img />
        <p>temp</p>
        <p>some info</p>
      </div>
      <div className={styles.infoCity}>
        <img />
        <p>about city</p>
      </div>
    </div>
  );
};

export default MainBlock;
