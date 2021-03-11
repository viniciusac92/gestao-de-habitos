// import { createContext, useContext, useEffect } from "react";
// import { useState } from "react";
// import api from "../../Services";

// export const HabitsContext = createContext();

// export const HabitsProvider = ({ children }) => {
//   const [habits, setHabits] = useState("");
//   const [run, setRun] = useState(false);

//   useEffect(() => {
//     api
//       .get(`/habits/personal/`)
//       .then((res) => setHabits(res.data))
//       .then(() => localStorage.setItem("habits", JSON.stringify(habits)))
//       .catch((e) => console.log(e));
//   }, []);
//   console.log(habits);

//   return (
//     <HabitsContext.Provider value={{ habits, run, setRun }}>
//       {children}
//     </HabitsContext.Provider>
//   );
// };

// export const useProviderHabits = () => useContext(HabitsContext);
