import React, { Fragment } from 'react';
import { IEmpl } from '../../../dataServices/emplService';
import "../index.css";

const EmplRow = ({ data: { employee_name, employee_salary, employee_age } }: { data: IEmpl }) => {
    return <Fragment>
        <tr>
            <td>{employee_name}</td>
            <td>{employee_salary}</td>
            <td>{employee_age}</td>
        </tr>
    </Fragment>

};

export default EmplRow;