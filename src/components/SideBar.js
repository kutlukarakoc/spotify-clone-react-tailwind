import brandlogo from "images/brand-logo.svg";
import SideHeader from "ui/SideBar/SideHeader";
import SideBody from "ui/SideBar/SideBody";
import SidePlaylist from "ui/SideBar/SidePlaylist";
import SideBarIcons from "images/SideBarIcons";

const SideBar = () => {
    return (
        <div className="w-72 min-w-[250px] flex flex-col bg-black">
            <div className="pt-6 px-6">
                <a href="/" className="w-32 h-10">
                    <img src={brandlogo} alt="spotify" className="w-32 h-10" />
                </a>
            </div>
            <div className="mt-7">
                <ul className="list-none">
                    <SideHeader />
                </ul>
            </div>
            <div className="pl-6 pr-2 pt-2 mt-6 h-full w-full">
                <div>
                    <ul className="list-none">
                        <SideBody />
                    </ul>
                </div>
                <div className="w-11/12 border-t border-link">
                </div>
                <div className="h-72 pt-1 overflow-y-auto scroll relative">
                    <ul className="list-none h-full ">
                        <SidePlaylist />
                    </ul>
                </div>
            </div >
            <div className="bg-black z-20">
                <div className="px-2 h-10 flex items-center">
                    <a href="/" className="gap-4 flex items-center pr-5 text-link hover:text-white transition-colors duration-200 ease-linear">
                        <SideBarIcons name="downloadApp" />
                        <span className="pl-1 text-sm font-bold">Uygulamayı Yükle</span>
                    </a>
                </div>
            </div>

        </div >
    );
};

export default SideBar;