import React from "react";
import { VehicleTypeSelect } from "./VehicleTypeSelect";
import { VehicleType } from "../data/vehicles/contracts";

export const Filter: React.FC<{titleChangeHandler: React.ChangeEventHandler<HTMLInputElement>, typeChangeHandler: any, type: VehicleType | null}> = (props) => {
    return (<div>
        <input type='text' onChange={props.titleChangeHandler}></input>
        <VehicleTypeSelect value={props.type} onChange={props.typeChangeHandler} />
    </div>)
}