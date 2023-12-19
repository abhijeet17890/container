// import { createSlice } from '@reduxjs/toolkit';

// export interface IWorker {
//     name: string;
//     age: number;
//     profile: string;
// }

// export interface IWorkerData {
//    workerList: IWorker[],
// }

// const initialState: IWorkerData = {
//    workerList: [],
// };

// export const workerSlice = createSlice({
//     initialState,
//     name: 'worker',
//     reducers: {
//         getAllWorkers: (state) => {
//             state.workerList = [{
//                 name: 'abhijeet',
//                 age: 32,
//                 profile: 'developer',
//             }]
//         }
//     }
// })

// export const { getAllWorkers } = workerSlice.actions
// export default workerSlice.reducer