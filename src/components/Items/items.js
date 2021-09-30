import React, { useEffect, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import SkeletonLoaders from "../SkeletonLoaders";
import Item from "./Item";
import "./Items.css"

const Items = ({}) => {
  const { data, isFetching, userInPage } = useContext(StoreContext);

  const displayDataAccordingToPage = () => {
    let tempData = [...data];
    const start = userInPage === 1 ? 0 : userInPage === 2 ? 6 : 12;
    const end = userInPage === 1 ? 6 : userInPage === 2 ? 12 : data?.length;

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent
      )
    ) {
      return tempData;
    } else {
      if (data?.length > 0) {
        tempData = tempData.slice(start, end);
      }
      return tempData;
    }
  };

  useEffect(() => {
    displayDataAccordingToPage();
  }, [userInPage]);

  return (
    <div className="grid sm:grid-cols-auto-fill sm:gap-10 sm:p-12 w-full  mx-auto gap-8 p-8 grid-cols-auto-fill-sm">
      {!isFetching && displayDataAccordingToPage()?.length > 0 ? 
        displayDataAccordingToPage().map(({ id, fields }) => <Item key={id} fields={fields}/>) : (
        <SkeletonLoaders />
      )}
    </div>
  )
};

export default Items;

/* 

*/
