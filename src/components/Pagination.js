import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

const Pagination = () =>{
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(1); // State to track active button

    const handleButtonClick = (pageNumber) => {
        navigate(`/page/${pageNumber}`);
        setActiveButton(pageNumber); // Set active button state

    };

    return (
        <nav className="d-flex justify-content-center gap-3 m-1 mb-4">
            <div className={activeButton === 1 ? 'active pagination-button' : 'pagination-button'} onClick={() => handleButtonClick(1)}>1</div>
            <div className={activeButton === 2 ?  'active pagination-button' : 'pagination-button'} onClick={() => handleButtonClick(2)}>2</div>
            <div className={activeButton === 3 ?  'active pagination-button' : 'pagination-button'} onClick={() => handleButtonClick(3)}>3</div>
            <div  className={activeButton === 4 ?  'active pagination-button' : 'pagination-button'} onClick={() => handleButtonClick(4)}>4</div>

        </nav>
    )
}

export default Pagination