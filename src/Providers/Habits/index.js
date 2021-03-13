import { createContext, useContext, useState } from "react";
import api from '../../Services'

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {

  const [personHabits, setPersonHabits] = useState(()=> {
    api.get("/habits/personal/")
      .then((response) => setPersonHabits(response.data))
      .catch((err) => console.log(err))
  })

  return (
    <HabitsContext.Provider value={{ personHabits, setPersonHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
