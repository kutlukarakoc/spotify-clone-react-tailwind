const Back = () => {
    return (
        <svg focusable="false" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polyline points="16 4 7 12 16 20" fill="none" stroke="#fff"></polyline>
        </svg>
    );
};

const Forward = () => {
    return (
        <svg focusable="false" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polyline points="8 4 17 12 8 20" fill="none" stroke="#fff"></polyline>
        </svg>
    );
};

const DropDown = () => {
    return (
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path fill="currentColor" d="M3 6l5 5.794L13 6z"></path>
        </svg>
    );
};

const search = () => {
    return (
        <svg height="24" width="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"></path>
        </svg>
    );
};

const NavbarIcons = ({ name }) => {
    const icons = {
        Back: Back,
        Forward: Forward,
        DropDown: DropDown,
        search: search

    };

    const Component = icons[name];

    return <Component />
};

export default NavbarIcons;