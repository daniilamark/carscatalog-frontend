import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
    const [cars, setCars] = useState([]);

    // eslint-disable-next-line
    const { id } = useParams();

    useEffect(() => {
        loadCars();
    }, []);

    const loadCars = async () => {
        const result = await axios.get("http://localhost:8080/cars");
        setCars(result.data);
    };

    const deleteCar = async (id) => {
        await axios.delete(`http://localhost:8080/car/${id}`);
        loadCars();
    };

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Гос Номер</th>
                            <th scope="col">Марка</th>
                            <th scope="col">Цвет</th>
                            <th scope="col">Год выпуска</th>
                            <th scope="col">Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car, index) => (
                            <tr>
                                <th scope="row" key={index}>
                                    {index + 1}
                                </th>
                                <td>{car.number}</td>
                                <td>{car.mark}</td>
                                <td>{car.color}</td>
                                <td>{car.yearRelease}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2"
                                        to={`/viewcar/${car.id}`}
                                    >Подробнее</Link>
                                    <Link
                                        className="btn btn-outline-primary mx-2"
                                        to={`/editcar/${car.id}`}
                                    >
                                        Изменить
                                    </Link>

                                    <button className="btn btn-danger mx-2"
                                        onClick={() => deleteCar(car.id)}
                                    >Удалить</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}