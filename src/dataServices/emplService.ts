import { useEffect, useState} from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants';

export interface IEmpl {
  id: number;
  employee_name: any;
  employee_age: string;
  employee_salary: string;
  profile_image: string;
}

export interface IEmplData {
      data: IEmpl[];
      messaage: string;
      status: string;
  }

const useFetchEmplData = () => {
  const [data, setData] = useState<IEmplData>();
  const [loading, setLoading] = useState(true);
    const fetchData = async (url: string) => {
      try {
        const { data: response } = await axios.get(`${BASE_URL}/${url}`);
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

  return {
    data,
    loading,
    fetchData,
  };
};

export default useFetchEmplData;