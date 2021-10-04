import {useState} from "react";
import FooterIcons from "images/FooterIcons";

const HomeBodyContent = ({ datas }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    return (
        datas.map((e, index) => {
            return (
                <div key={index} className="bg-body-content rounded w-56 h-72 transition-colors duration-300 flex flex-col justify-center items-center cursor-pointer mb-6 group hover:bg-[#303030]">
                    <div className="w-48 h-48 rounded box-border relative">
                        <img src={e.picURL} alt="getir" className="w-full h-full rounded" />
                        <div className="absolute group-hover:bottom-2 -bottom-1 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in shadow-2xl">
                            <a href="#/" className="cursor-default ml-2 rounded-full flex justify-center items-center text-white bg-shuffle-color w-10 h-10 transition-transform duration-100 ease-in hover:scale-110 active:scale-100" onClick={() => { setIsPlaying(!isPlaying) }}>
                                {
                                    !isPlaying ? <FooterIcons name="play" />
                                        : <FooterIcons name="pause" />
                                }
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-5 w-48">
                        <div className="text-white text-base font-bold overflow-hidden">{e.text}</div>
                        <div className="text-link mt-1 overflow-hidden text-xs font-bold">{e.author}</div>
                    </div>
                </div>
            )
        })
    );
};

export default HomeBodyContent;