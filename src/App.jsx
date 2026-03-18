
import { Suspense } from 'react';
import './App.css'
import FoodSection from './Components/FoodSection/FoodSection'
import Navbar from "./Components/Navbar/Navbar"

const foodDataRes = fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
.then(res => res.json());




function App() {
 
   return (
    <>
    <Navbar></Navbar>
    <Suspense fallback="Please Wait for Data Loading.....">
     <FoodSection foodDataRes={foodDataRes}></FoodSection>
    </Suspense>
    
    </>
  )

  }
 

export default App
