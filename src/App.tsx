import React, { useEffect, useState } from "react";
import { Vehicle, VehicleFilter, VehicleType } from "./data/vehicles/contracts";
import { VehicleApi } from "./data/vehicles/api";
import { Filter } from "./components/Filter";
import { Table } from "./components/Table";

const initialFilter: VehicleFilter = {
    title: "",
    type: null
};

export default function App() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    const [title, setTitle] = useState('')
    const [vehicleType, setVehicleType] = useState<VehicleType | null>(null)

    useEffect(() => {
        initialFilter.title = title
        initialFilter.type = vehicleType
        const data = VehicleApi.search(initialFilter);
        setVehicles(data);
    }, [title, vehicleType]);

    let titleChange : React.ChangeEventHandler<HTMLInputElement> = (e : any) => setTitle(e.target.value)
    let onTypeChange : any = (e : VehicleType | null) => setVehicleType(e)
    return (
        <>
            <Filter titleChangeHandler={titleChange} typeChangeHandler={onTypeChange} type = {vehicleType} />
            <Table vehicles={vehicles} />
        </>
    );
}
