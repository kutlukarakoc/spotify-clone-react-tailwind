import SideBarIcons from "images/SideBarIcons";
import { NavLink } from "react-router-dom";

const SideHeader = () => {
    return (
        <>
            <li className="px-2">
                <NavLink exact={true} to="/" className="h-10 text-link flex items-center gap-4 px-4 rounded-[4px] transition-colors duration-200 ease-linear hover:text-white"
                    activeClassName="selected" activeStyle={{ backgroundColor: "#282828" }}>
                    <SideBarIcons name="home" />
                    <span className="text-sm font-bold">Ana Sayfa</span>
                </NavLink>
            </li>
            <li className="px-2">
                <NavLink to="/search" className="h-10 text-link flex items-center gap-4 px-4 rounded-[4px] transition-colors duration-200 ease-linear hover:text-white"
                    activeClassName="selected" activeStyle={{ backgroundColor: "#282828" }}>
                    <SideBarIcons name="search" />
                    <span className="text-sm font-bold">Ara</span>
                </NavLink>
            </li>
            <li className="px-2">
                <NavLink to="/library" className="h-10 text-link flex items-center gap-4 px-4 rounded-[4px] transition-colors duration-200 ease-linear hover:text-white"
                    activeClassName="selected" activeStyle={{ backgroundColor: "#282828" }}>
                    <SideBarIcons name="collection" />
                    <span className="text-sm font-bold">Kitaplığın</span>
                </NavLink>
            </li>
        </>

    );
};

export default SideHeader;