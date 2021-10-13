import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortData } from '../redux/action';

function SortBy() {
    const dispatch = useDispatch();
    const sortBy = useSelector(state => state.reducer.sortBy);
    const handleClickSort = (sort) => {
        dispatch(sortData(sort));
    };

    return (
        <div className="dropdown ">
            <button
                className="btn btn-secondary dropdown-toggle m-2"
                type="button"
                id="dropdownMenuButtonSort"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Sorteer op
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSort">
                <li onClick={() => handleClickSort("a-z-o")}
                    className="dropdown-item form-check">
                    <input
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        className="m-2"
                        checked={sortBy.includes("a-z-o")}
                        readOnly="readOnly"
                    >
                    </input>
                    <label htmlFor="flexRadioDefault1">Sorteer bij opdracht a-z</label>
                </li>
                <li onClick={() => handleClickSort("z-a-o")}
                    className="dropdown-item form-check">
                    <input
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        className="m-2"
                        checked={sortBy.includes("z-a-o")}
                        readOnly="readOnly"
                    >
                    </input>
                    <label htmlFor="flexRadioDefault2">Sorteer bij opdracht z-a</label>
                </li>
                <li onClick={() => handleClickSort("a-z-s")}
                    className="dropdown-item form-check">
                    <input
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                        className="m-2"
                        checked={sortBy.includes("a-z-s")}
                        readOnly="readOnly"
                    >
                    </input>
                    <label htmlFor="flexRadioDefault3">Sorteer bij student a-z</label>
                </li>
                <li onClick={() => handleClickSort("z-a-s")}
                    className="dropdown-item form-check">
                    <input
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                        className="m-2"
                        checked={sortBy.includes("z-a-s")}
                        readOnly="readOnly"
                    >
                    </input>
                    <label htmlFor="flexRadioDefault4">Sorteer bij student z-a</label>
                </li>
                <li onClick={() => handleClickSort("1-5-m")}
                    className="dropdown-item form-check">
                    <input
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault5"
                        className="m-2"
                        checked={sortBy.includes("1-5-m")}
                        readOnly="readOnly"
                    >
                    </input>
                    <label htmlFor="flexRadioDefault5">Sorteer op makelijkste opdracht</label>
                </li>
                <li onClick={() => handleClickSort("5-1-m")}
                    className="dropdown-item form-check">
                    <input
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault6"
                        className="m-2"
                        checked={sortBy.includes("5-1-m")}
                        readOnly="readOnly"
                    >
                    </input>
                    <label htmlFor="flexRadioDefault6">Sorteer op moeilijkste opdracht</label>
                </li>
                <li onClick={() => handleClickSort("1-5-l")}
                    className="dropdown-item form-check">
                    <input
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault7"
                        className="m-2"
                        checked={sortBy.includes("1-5-l")}
                        readOnly="readOnly"
                    >
                    </input>
                    <label htmlFor="flexRadioDefault7">Sorteer minst leuke opdracht</label>
                </li>
                <li onClick={() => handleClickSort("5-1-l")}
                    className="dropdown-item form-check">
                    <input
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault8"
                        className="m-2"
                        checked={sortBy.includes("5-1-l")}
                        readOnly="readOnly"
                    >
                    </input>
                    <label htmlFor="flexRadioDefault8">Sorteer op leukste opdracht</label>
                </li>
            </ul>
        </div>
    );
};

export default SortBy;
