import React, { Fragment } from 'react';
import { IEmpl } from '../../dataServices/emplService';
import EmplRow from './EmplRow';
import "./index.css";

const EmplTable = ({ data }: { data: IEmpl[] }) => {
    return <Fragment>
        <table>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((empl: IEmpl) => <EmplRow data={empl} />)}
            </tbody>
        </table>
    </Fragment>

};

export default EmplTable;