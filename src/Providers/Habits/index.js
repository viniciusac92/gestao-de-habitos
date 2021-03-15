import { createContext, useContext, useEffect, useState } from "react";
import api from '../../Services'

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {

  const [personHabits, setPersonHabits] = useState(false)
  
  useEffect(()=> {
    if(!personHabits)
    api.get("/habits/personal/")
      .then((response) => setPersonHabits(response.data))
      .catch((err) => console.log(err))
  },[personHabits])


  const handleHabit = title => {
    const testHabit = personHabits.filter(e=>title===e.title)[0]
    if(testHabit === undefined){
      const data = {
      title: title,
      category: "Progamação",
      difficulty: "Muito díficil",
      frequency: `{"day0": "${new Date().toISOString()}"}`,
      achieved: true,
      how_much_achieved: 1,
      user: localStorage.getItem('id')
    }
    api.post("/habits/", data)
      .then(() => setPersonHabits(false))
      .catch((err) => console.log(err))
  
    setPersonHabits(false)
    }
    else {
      const data2 = {
        title: testHabit.title,
        category: testHabit.category,
        difficulty: testHabit.difficulty,
        frequency: testHabit.frequency,
        achieved: testHabit.achieved,
        how_much_achieved: testHabit.how_much_achieved + 1
      }
      api.patch(`/habits/${testHabit.id}/`, data2)
        .then(() => setPersonHabits(false))
        .catch((err) => console.log(err))
    }
  }


  return (
    <HabitsContext.Provider value={{ personHabits, setPersonHabits, handleHabit }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
