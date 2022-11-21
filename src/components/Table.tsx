import React from "react";
import { CurrencyLabel } from "@skbkontur/react-ui";
import { Vehicle, vehicleTypeTitles } from "../data/vehicles/contracts";

interface VehicleInfo {
    vehicle: Vehicle,
    number: number
}

const TableItem: React.FC<VehicleInfo> = (props) => {
    return (
        <tr>
            <td>{props.number}</td>
            <td>{props.vehicle.title}</td>
            <td>
                <CurrencyLabel value={props.vehicle.price} fractionDigits={2} />
            </td>
            <td>{vehicleTypeTitles[props.vehicle.type]}</td>
        </tr>
    );
};

interface VehiclesList {
    vehicles: Vehicle[];
}

export const Table: React.FC<VehiclesList> = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Цена, ₽</th>
                    <th>Тип ТС</th>
                </tr>
            </thead>
            <tbody>
                {props.vehicles.map((x, i) => (
                    <TableItem key={x.id} number={i + 1} vehicle={x} />
                ))}
            </tbody>
        </table>
    );
};
