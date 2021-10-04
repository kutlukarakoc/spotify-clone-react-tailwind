import HomeBodyContent from "./HomeBodyContent";

const HomeBody = ({ datas, title, subtitle }) => {
    return (
        <div className="flex flex-col px-10 box-border mt-3">
            <div className="flex justify-between items-center">
                <div className="text-white whitespace-nowrap">
                    <h2 className="text-2xl font-bold hover:underline mb-2">{title}</h2>
                    <p className="text-link text-sm font-normal">{subtitle}</p>
                </div>
                <a href="#/" className="bg-transparent text-link no-underline text-xs font-bold leading-4 tracking-widest hover:underline ">HEPSİNİ GÖR</a>
            </div>
            <div className="flex justify-between items-center gap-x-2 mt-4 overflow-hidden">
                <HomeBodyContent datas={datas}/>
            </div>
        </div>
    );
};

export default HomeBody;