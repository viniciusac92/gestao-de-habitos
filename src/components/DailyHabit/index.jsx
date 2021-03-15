import { useState } from "react";
import { useEffect } from "react";
import CustomizedProgressBars from "./progess";
import api from "../../Services";

const Graphic = ({ id }) => {
  const [media, setMedia] = useState(0);
  const [day0, setDay0] = useState("");

  const today = new Date();
  const current = `${
    today.getMonth() + 1
  }/${today.getDate()}/${today.getFullYear()}`;

  const handleMedia = (diffDays, points) => {
    if (diffDays > 1) {
      setMedia(points / diffDays);
    } else {
      setMedia(points);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`/habits/${id}/`);
      const formated = JSON.parse(result.data.frequency);
      setDay0(formated.day0);
      setTitle(result.data.title);
      const points = result.data.how_much_achieved;
      const day0 = new Date(formated.day0);
      const date2 = new Date(current);
      const diffTime = Math.abs(date2 - day0);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      handleMedia(diffDays, points);
    };
    fetchData();
  }, []);

  const [title, setTitle] = useState("");

  return (
    <div>
      {<h3>{title}</h3>}
      <CustomizedProgressBars xp={media} />
      {`sua média entre ${day0} e ${current} : ${Math.floor(media)}%`}
      <br></br>
      <p>Obtenha 100pts diários para manter um aproveitamento de 100%</p>
    </div>
  );
};

export default Graphic;
