import React, { useEffect, useContext } from 'react';
import { StoreContext } from './context/StoreContext';
import { getDataFromAirTable } from './AirTableApi';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  const { setIsFetching, setData } = useContext(StoreContext);

   const getData = async () => {
    setIsFetching(true);
    const records = await getDataFromAirTable();
    if (records?.length > 0) {
      setData(records);
      setIsFetching(false);
    } else return; 
  };

  useEffect(() => {
    getData();
  }, []); 

  

  return (
    <div className="App">
   <HomePage />
    </div>
  );
}

export default App;
