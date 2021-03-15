import { useState } from "react";
import { useEffect } from "react";
import CustomizedProgressBars from "./progess";
import api from "../../Services";

const GraphicGroup = ({ id }) => {
  const [media, setMedia] = useState(0);
  const [startDate, setStartDate] = useState(0)

  const currentDate = new Date().getTime();

  const handleMedia = (diffDays, points) => {
    diffDays > 0 ? setMedia((points/diffDays)*100) : setMedia(points*100)
  };

  useEffect(() => {
    const fetchData = async () => {
      const currentGoal = await api.get(`/goals/${id}/`);
    //   const initialDate = new Date(JSON.parse(result.data.frequency).day0).getTime();
      setTitle(currentGoal.data.title);
    //   setStartDate(initialDate)
      const points = currentGoal.data.how_much_achieved;
    //   const diffDays = Math.floor((currentDate - initialDate) / (1000*60*60*24))

      handleMedia(1, points);
    };
    fetchData();
  }, []);

  const [title, setTitle] = useState("");

  return (
    <div>
      {<h3>{title}</h3>}
      <CustomizedProgressBars xp={media} />
      <br></br>
      <p>Obtenha 100pts diários para manter um aproveitamento de 100%</p>
    </div>
  );
};

export default GraphicGroup;
