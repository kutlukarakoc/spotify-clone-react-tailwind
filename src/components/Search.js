import Navbar from "components/Navbar";
import Header from "ui/Search/Header";
import Browse from "ui/Search/Browse";
import recentsearches from "api/SearchSection/RecentSearches.json";
import browseitems from "api/SearchSection/BrowseItems";
import { useState, useEffect } from "react";
import Slider from "react-slick";


const Search = ({scrollPosition}) => {

    console.log(scrollPosition);

    const [data, setData] = useState([]);
    const [browseData, setBrowseData] = useState([]);

    const columns = "repeat(auto-fill,minmax(180px ,1fr))";

    useEffect(() => {
        setData(recentsearches);
        setBrowseData(browseitems)
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div className="flex flex-col">
            {
                scrollPosition > 200 ? <Navbar bg="#460a0c"/> : <Navbar/>
            }
            <div className="px-10 mt-6 overflow-hidden">
                <h2 className="text-white max-w-full text-2xl font-bold tracking-tighter">Yakındaki aramalar</h2>
                <div className="flex justify-between items-center gap-x-4 mt-5">
                    <Header data={data} />
                </div>
            </div>
            <div className="text-white px-7 w-full h-72 mt-10 overflow-hidden">
                <h2 className="text-2xl font-bold mb-4 px-3">En çok dinlediğin türler</h2>
                <Slider {...settings}>
                    <div>
                        <div className="bg-[#ba5d07] h-52 rounded-lg mx-4">
                            <div className="w-full h-full relative overflow-hidden">
                                <h3 className="text-4xl p-4 font-bold">Hip Hop</h3>
                                <div className="absolute -bottom-2 -right-4 rotate-[25deg] w-32 h-32">
                                    <img src="https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c" className="w-32 h-32" alt="spotify" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#8d67ab] h-52 rounded-lg mx-4">
                            <div className="w-full h-full relative overflow-hidden">
                                <h3 className="text-4xl p-4 font-bold">Pop</h3>
                                <div className="absolute -bottom-2 -right-4 rotate-[25deg] w-32 h-32">
                                    <img src="https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3" className="w-32 h-32" alt="spotify" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#dc148c] h-52 rounded-lg mx-4">
                            <div className="w-full h-full relative overflow-hidden">
                                <h3 className="text-4xl p-4 font-bold">Dans ve Elektronik</h3>
                                <div className="absolute -bottom-2 -right-4 rotate-[25deg] w-32 h-32">
                                    <img src="https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff" alt="spotify" className="w-32 h-32" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#e61e32] h-52 rounded-lg mx-4">
                            <div className="w-full h-full relative overflow-hidden">
                                <h3 className="text-4xl p-4 font-bold">Rock</h3>
                                <div className="absolute -bottom-2 -right-4 rotate-[25deg] w-32 h-32">
                                    <img src="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730" alt="spotify" className="w-32 h-32" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white px-10">Hepsine göz at</h2>
            <div className="px-10 grid grid-rows-1 overflow-y-hidden gap-6" style={{ gridTemplateColumns: columns }}>

                <Browse browsedatas={browseData} />
            </div>
        </div>
    );
};

export default Search;