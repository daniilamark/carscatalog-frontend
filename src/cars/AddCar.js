import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddCar() {
    let navigate = useNavigate();

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

    const { number, mark, color, yearRelease, bodyType, gearboxType, maxSpeed, driveUnit } = car;

    const onInputChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/car", car);
        navigate("/");
        console.log("Добавлено")
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Добавление автомобиля</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Введите гос номер"
                                name="number"
                                value={number}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Введите марку"
                                name="mark"
                                value={mark}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Введите цвет"
                                name="color"
                                value={color}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Введите год выпуска"
                                name="yearRelease"
                                value={yearRelease}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Введите тип кузова"
                                name="bodyType"
                                value={bodyType}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Введите коробку передач"
                                name="gearboxType"
                                value={gearboxType}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Введите максимальную скорость"
                                name="maxSpeed"
                                value={maxSpeed}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Введите привод"
                                name="driveUnit"
                                value={driveUnit}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-primary">
                            Сохранить
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Отменить
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}