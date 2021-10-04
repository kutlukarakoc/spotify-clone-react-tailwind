import FooterIcons from "images/FooterIcons";
import { useEffect, useState } from "react";
import items from "api/HomeDatas/HeaderItems.json";

const Header = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [data, setData] = useState([])

    useEffect(() => {
        setData(items);
    }, []);

    return (
        <>
            {
                data.map((e) => {
                    return (
                        <div key={e.id} className="flex bg-header-items-bground hover:bg-[#ffffff33] h-20 rounded-md transition-all duration-300 ease-in cursor-pointer group" >
                            <div className="h-20 w-20 min-w-[80px] min-h-[80px] rounded-md after:shadow-xl">
                                <img src={e.picURL} alt="spotify" className="rounded-tl rounded-bl" />
                            </div>
                            <div className="flex justify-between items-center p-4 text-white w-full">
                                <div>
                                    <a href="#/" className="no-underline text-base font-bold leading-6 overflow-hidden break-words">{e.name}</a>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in shadow-2xl">
                                    <a href="#/" className="cursor-default ml-2 rounded-full flex justify-center items-center text-white bg-shuffle-color w-10 h-10 transition-transform duration-100 ease-in hover:scale-110 active:scale-100" onClick={() => { setIsPlaying(!isPlaying) }}>
                                        {
                                            !isPlaying ? <FooterIcons name="play" />
                                                : <FooterIcons name="pause" />
                                        }
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    );
};

export default Header;