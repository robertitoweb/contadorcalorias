import { useMemo } from "react";
import type { Activity } from "../types";
import CaloriesDisplay from "./CaloriesDisplay";

type CalorieTrackerProps = {
    activities: Activity []
}

const CalorieTracker = ({activities}:CalorieTrackerProps ) => {
   
 const CaloriesConsumed = useMemo(()=> activities.reduce((total,activity)=>activity.category===1 ? total +  activity.calories : total,0 )  ,[activities])
 const CaloriesBurned = useMemo(()=> activities.reduce((total,activity)=>activity.category===2 ? total +  activity.calories : total,0 )  ,[activities])
 const NetCalories = useMemo(()=> CaloriesConsumed - CaloriesBurned  ,[activities])
   
    return ( 
        <>
        <h2 className=" text-4xl font-black
         text-white text-center">Resumen de calorias</h2>

    <div className=" flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        
        <CaloriesDisplay
        calories={CaloriesConsumed}
        text={"Consumidas"}
        />
      
      <CaloriesDisplay
        calories={CaloriesBurned}
        text={"Ejercicio"}
        />
      
      <CaloriesDisplay
        calories={NetCalories}
        text={"Diferencia"}
        />
      
    </div>

        </>
     );
}
 
export default CalorieTracker;