import Navbar from "components/Navbar";
import Header from "ui/Home/Header";
import HomeBody from "ui/Home/HomeBody";
import { useState, useEffect } from "react";
import compilation from "api/HomeDatas/compilation.json";
import suggestion from "api/HomeDatas/suggestion.json";
import popular from "api/HomeDatas/populars.json";

const Home = () => {

    const [compilations, setCompilations] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [populars, setPopulars] = useState([]);

    useEffect(() => {
        setCompilations(compilation);
        setSuggestions(suggestion);
        setPopulars(popular);
    }, [])

    const columns = "repeat(auto-fill,minmax(270px ,1fr))";

    return (
        <div className="flex flex-col w-full scroll">
            <Navbar bg="#460a0c" />
            <div className="flex flex-col mb-4 -mt-14 w-full bg-gradient-to-b from-[#460a0c] via-[#460a0c] to-[#121212]">
                <div className="w-full px-10 mt-10">
                    <div className="mb-4 flex flex-col mt-8">
                        <h2 className="text-white overflow-hidden text-3xl font-bold tracking-tighter leading-9 mb-5">İyi akşamlar</h2>
                        <div className="grid grid-rows-2 grid-flow-col md:grid-flow-col-dense overflow-hidden gap-6" style={{ gridTemplateColumns: columns }}>
                            <Header />
                        </div>
                    </div>
                </div>
            </div>
            <HomeBody datas={compilations} title="kutlukrkc İçin Derlendi" subtitle="Daha çok dinledikçe daha iyi tavsiyeler al." />
            <HomeBody datas={suggestions} title="Bugün için tavsiye" subtitle="Yakın geçmişteki aktivitelerinden ilham alındı." />
            <HomeBody datas={populars} title="Popüler albümler" subtitle="Bu aralar en çok dinlenen albümler." />
        </div>


    );
};

export default Home;