import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
    const [car, setCar] = useState({
        number: "",
        mark: "",
        color: "",
        yearRelease: "",
        bodyType: "",
        gearboxType: "",
        maxSpeed: "",
        driveUnit: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadCar()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadCar = async () => {
        const result = await axios.get(`http://localhost:8080/car/${id}`)
        setCar(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Подробнее об автомобиле</h2>

                    <div className="card">
                        <div className="card-header">
                            Автомобиль с id: {car.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Гос номер: </b>
                                    {car.number}
                                </li>

                                <li className="list-group-item">
                                    <b>Марка: </b>
                                    {car.mark}
                                </li>

                                <li className="list-group-item">
                                    <b>Цвет: </b>
                                    {car.color}
                                </li>

                                <li className="list-group-item">
                                    <b>Год выпуска: </b>
                                    {car.yearRelease}
                                </li>

                                <li className="list-group-item">
                                    <b>Тип кузова: </b>
                                    {car.bodyType}
                                </li>

                                <li className="list-group-item">
                                    <b>Коробка передач: </b>
                                    {car.gearboxType}
                                </li>

                                <li className="list-group-item">
                                    <b>Максимальная скорость: </b>
                                    {car.maxSpeed}
                                </li>

                                <li className="list-group-item">
                                    <b>Привод: </b>
                                    {car.driveUnit}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link className="btn btn-primary my-2" to={"/"}>
                        Вернуться назад
                    </Link>
                </div>
            </div>
        </div>
    );
}