import NavbarIcons from "images/NavbarIcons";

const NavbarLeftSide = ({name}) => {
    return (
        <button className="cursor-not-allowed mr-4 opacity-60 bg-navbar-btn-bground w-8 h-8 rounded-full flex items-center justify-center">
            <NavbarIcons name={name} />
        </button>
    );
};

export default NavbarLeftSide;