import { useState } from "react";
import { RiPlayList2Fill } from "react-icons/ri";
import RightButtons from "./RightButtons";

const Right = () => {

    const [background, setBackground] = useState("");

    const mouseMoveHandler = (e) => {
        const value = e.target.value;
        setBackground("linear-gradient(90deg, rgb(29, 185, 84)" + value + "%, rgb(83, 83, 83)" + value + "%)");
        e.target.style.background = background;
    }

    return (
        <div className="w-[30%] min-w-[180px] flex justify-end items-center">
            <div className="w-8 h-8 flex justify-center items-center">
                <button className="text-link w-8 h-8 min-w-[32px] border-0 hover:text-white">
                    <RiPlayList2Fill />
                </button>
            </div>
            <RightButtons name="connectToDevice" />
            <div className="flex items-center pr-3" id="set-sound">
                <RightButtons name="mute" />
                <div className="h-3 w-24 flex items-center ">
                <input type="range" min="0" max="100" id="soundRange" onMouseMove={mouseMoveHandler}/>
                </div>
            </div>
            <RightButtons name="fullscreen" />
        </div>
    );
};

export default Right;

