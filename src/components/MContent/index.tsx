import React, { useState, useEffect } from 'react';
import useFetchEmplData, { IEmplData, IEmpl } from '../../dataServices/emplService';
import EmplTable from '../EmplTable'
import "./index.css";
// import { useSelector, useDispatch } from 'react-redux';
// import type { RootState } from '../../CommonServices/store';
// import { getAllWorkers } from '../../CommonServices/slices/worker/workerSlice';



const MContent = () => {
  const [emplList, setEmplList] = useState<IEmpl[]>();
  const {
    data,
    loading,
    fetchData,
  } = useFetchEmplData();

  useEffect(() => {
    fetchData(`employees`);
  }, [])

  useEffect(() => {
    if (data?.data) {
      setEmplList(data.data);
      // debugger;
    }
  }, [data, loading])

  // const workerList = useSelector((state: RootState) => state.worker.workerList);
  // const dispatch = useDispatch();
  // useEffect(() => {
  // dispatch(getAllWorkers());
  // },[])

  return (
    <div className="container-div">
      <h4>Employee List</h4>
      {emplList && <EmplTable data={emplList} />}
    </div>
  )
};

export default MContent;