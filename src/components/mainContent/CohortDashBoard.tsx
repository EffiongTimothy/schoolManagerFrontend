import CustomInput from "@/input/CustomInput";
import { AppDispatch, RootState } from "@/store/Store";
import { useDispatch, useSelector } from "react-redux";
import { LuSearch } from "react-icons/lu";
import { Search } from "@mui/icons-material";
import CancelButtonStyle from "../button/buttonStyles/cancelButtonStyle";
import Picture from "@/assets/Picture";
import CustomButton from "../button/Button";
import createCohortStyles from "../button/buttonStyles/CreateCohortStyles";
import CreateCohortModal from "../modal/CreateCohortModal";
import { HiOutlineDotsVertical } from "react-icons/hi";
import viewProfileStyles from "../button/buttonStyles/ViewProfileStyles";
import MoreActionButtonStyles from "../button/buttonStyles/MoreAction";
import CohortAvatarStyle from "@/assets/style/CohortAvatarStyle";
import { useEffect, useState } from "react";
import { ViewAllCohortApi } from "@/fetchData/ViewAllCohort";
import { CreateCohortApi } from "@/fetchData/CreateCohortApiFetch";
import { createCohort } from "@/slice/CohortSlice";
import axios from "axios";
import { ViewAllCohortUrl } from "@/assets/urls/urls";
import EmptySpace from "../emptySpace/EmptySpace";


const CohortDashBoard = ({ handleOpen, clicked, handleClose }) => {
  // const cohortData = useSelector(
  //   (state: RootState) => state.cohortData.cohortData
  // );
 const [cohortData,setCohortData] = useState([]);
//  const dispatch = useDispatch<AppDispatch>();
 


 useEffect( ()=>{
  const fetchCohort = async ()=>{
  try{
    const response = await axios.get(ViewAllCohortUrl)
    setCohortData(response.data)
    console.log('response ---->',response.data)
  }
  catch(e:(e)){
    console.log(e.error)
  }}
  fetchCohort()

 },[] )
 

  return (
    <>
   {cohortData && cohortData.length > 0 ? (
    <div className="md:w-full md:text-blue w-[20%]">
      <div className="flex flex-row mt-5  justify-between w w-[100%]">
        <div className="flex w-[400px] h-[44px] border  border-solid border-grey-100 gap-2 rounded-[7px] justify-start items-center pl-2 ">
          <LuSearch color={"#D0DCE4"} />
          <CustomInput placeHolder={"Search"} style={{ width: '360px' }} 
          type={undefined} icon={undefined} value={undefined} 
          accept={""} 
          max={undefined} 
          min={undefined} 
          name={""} />
        </div>

        <div className="flex flex-row  gap-4">
          <CustomButton
            icons={[]}
            text={"Create a Cohort"}
            style={createCohortStyles}
            onClick={handleOpen}
          />
          <CustomButton
            icons={[<HiOutlineDotsVertical />]}
            text={"More Actions"}
            style={MoreActionButtonStyles}
          />
        </div>
      </div>

      <div className="flex flex-col mt-8 overflow-x-hidden w-[1025px] h-[250px] ">
        
          <div>
            {cohortData.map((item, index) => (
              
              <div key={index} className="flex flex-row shadow-md justify-between mb-5 p-2 h-[70px] items-center 
              w-[1025px] border border-[#F6FCF] rounded-lg ">
              <div className="flex gap-3 justify-center items-center">
                <div className="flex justify-center items-center">
                  <Picture url={item.CohortAvatarUrl} style={CohortAvatarStyle} />
                  </div>
                
                <div className="flex flex-col gap-2 ">
                <div className="font-black">{item.cohortName}</div>
                <div>{item.program}</div>
                </div>
                </div>
                <div className="flex justify-center items-center gap-8 pr-7">
                <div className="flex items-center gap-2 ">
                <div>Created</div>
                <div>{item.startDate}</div>
                </div>
                <HiOutlineDotsVertical />
              </div>
              </div>
            ))}
          </div>
      </div>

      <CreateCohortModal isClicked={clicked} closeModal={handleClose} />
    </div>
    ):(
      <EmptySpace callToActionButtonText={"create cohort"} callToActionText={"click me"} handleOpen={function (): void {
            throw new Error("Function not implemented.");
          } } clicked={false} handleClose={function (): void {
            throw new Error("Function not implemented.");
          } }/>
    )}
    </>
  );
};

export default CohortDashBoard;
