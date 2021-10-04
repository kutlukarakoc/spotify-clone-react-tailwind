import NavbarLeftSide from "ui/NavbarLeftSide";
import NavbarIcons from "images/NavbarIcons";
import { useLocation } from "react-router";

const Navbar = ({bg}) => {

    const location = useLocation();
    const route = location.pathname;
    return (
        <div className="sticky top-0 z-[99] h-14 w-full px-10 transition duration-200 ease-in" style={{background: bg}}>
            <div className="flex items-center justify-between py-3 bg-transparent w-full">
                <div className="flex">
                    <NavbarLeftSide name="Back" />
                    <NavbarLeftSide name="Forward" />
                    {
                        route === "/search" && 
                        <div className="relative w-80">
                            <input type="text" className="w-full h-10 border-0 outline-none rounded-3xl text-black py-1 px-12 text-sm font-normal placeholder-black::placeholder" placeholder="Sanatçılar, şarkılar veya podcast'ler"/>
                            <span className="absolute left-2 top-1/2 -translate-y-2/4">
                                <NavbarIcons name="search"/>
                            </span>
                        </div>
                    }
                    {
                        route === "/library" &&
                        <div className="flex items-center ml-5">
                            <ul className="list-none flex gap-x-2 text-white">
                                <li className="bg-[#333333] py-2 px-4 rounded-md">
                                    <a href="#/" className="text-sm font-bold transform-none whitespace-nowrap">Çalma Listeleri</a>
                                </li>
                                <li className="py-2 px-4">
                                    <a href="#/" className="text-sm font-bold transform-none">Podcast'ler</a>
                                </li>
                                <li className="py-2 px-4">
                                    <a href="#/" className="text-sm font-bold transform-none">Sanatçılar</a>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
                <div className="bg-navbar-btn-bground hover:bg-[#303030] text-white h-8 w-32 pr-1 rounded-3xl flex items-center justify-between gap-2 cursor-pointer">
                    <div className="h-7 w-7 rounded-full border border-black">
                        <img src="https://i.scdn.co/image/ab6775700000ee85180fcd10f8e4d7431478f47c" alt="" className="h-full w-full object-cover object-center rounded-full" />
                    </div>
                    <span className="text-sm font-bold max-w[110px] overflow-hidden text-white">kutlukrkc</span>
                    <NavbarIcons name="DropDown" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;