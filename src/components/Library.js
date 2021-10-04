import Navbar from "components/Navbar";
import LibraryItems from "ui/Library/LibraryItems";
import { useEffect, useState } from "react";
import FooterIcons from "images/FooterIcons";
import libraryitems from "api/LibraryDatas/LibraryItems";

const Library = ({scrollPosition}) => {

    const bgColor = "linear-gradient(149deg, rgba(69,10,245,1), rgba(142,142,229,1) 99.16%)";

    const [isPlaying, setIsPlaying] = useState(false);
    const [libraryDatas, setLibraryDatas] = useState([]);

    useEffect(() => {
        setLibraryDatas(libraryitems);
    }, []);

    const column = "repeat(auto-fill,minmax(190px ,1fr))";

    return (
        <div>
            {
                scrollPosition > 60 ? <Navbar bg="#070707"/> : <Navbar/>
            }
            <div className="text-white mt-6 flex flex-col px-10">
                <h3 className="text-2xl font-bold mb-4">Çalma Listeleri</h3>
                <div className="grid gap-6" style={{gridTemplateColumns : column}}>
                    <div className="col-span-2 text-white flex flex-col h-72 px-5 justify-end py-3 group rounded" style={{ background: bgColor }}>
                        <div className="relative">
                            <div className="text-3xl font-bold">Beğenilen Şarkılar</div>
                            <div className="text-base">0 beğenilen şarkılar</div>
                            <div className="absolute group-hover:bottom-2 -bottom-1 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in shadow-2xl">
                                <a href="#/" className="cursor-default ml-2 rounded-full flex justify-center items-center text-white bg-shuffle-color w-10 h-10 transition-transform duration-100 ease-in hover:scale-110 active:scale-100" onClick={() => { setIsPlaying(!isPlaying) }}>
                                    {
                                        !isPlaying ? <FooterIcons name="play" />
                                            : <FooterIcons name="pause" />
                                    }
                                </a>
                            </div>
                        </div>
                    </div>
                    <LibraryItems libraryDatas={libraryDatas}/>
                </div>
            </div>

        </div>
    );
};

export default Library;