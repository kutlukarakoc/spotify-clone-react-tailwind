import CenterButtons from "./CenterButtons";
import FooterIcons from "images/FooterIcons";
import { useState } from "react";

const Center = ({vol}) => {
    const [background, setBackground] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);

    const mouseMoveHandler = (e) => {
        const value = e.target.value;
        setBackground("linear-gradient(90deg, rgb(29, 185, 84)" + value + "%, rgb(83, 83, 83)" + value + "%)");
        e.target.style.background = background;
    }

    return (
        <div className="w-2/5 max-w-[722px]">
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="flex gap-2">
                        <CenterButtons name="shuffle" />
                        <CenterButtons name="previous" />
                    </div>
                    <button className="border-none cursor-default w-8 h-8 flex justify-center items-center text-black bg-white rounded-[32px] transition-transform hover:scale-105 active:scale-100" onClick={() => {setIsPlaying(!isPlaying);}}>
                        {
                            !isPlaying ? <FooterIcons name="play" />
                                : <FooterIcons name="pause" />
                        }
                    </button>
                    <div className="flex gap-2">
                        <CenterButtons name="next" />
                        <CenterButtons name="repeat" />
                    </div>
                </div>
                <div className="flex gap-2 justify-center items-center w-full">
                    <div className="text-right text-link text-[11px] font-normal min-w-[40px]">0:00</div>
                    <div className="h-3 w-full flex justify-center items-center" id="setMusicTime">
                        <input type="range" min="0" max="100" id="musicRange" onMouseMove={mouseMoveHandler} />
                    </div>
                    <div className="text-link text-[11px] font-normal min-w-[40px]">4:00</div>
                </div>
            </div>
        </div>
    );
};

export default Center;