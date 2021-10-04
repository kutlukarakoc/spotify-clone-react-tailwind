import SideBarIcons from "images/SideBarIcons";

const SidePlaylist = () => {
    const playLists = [
        { name: 'Chill Musics' },
        { name: 'Turkish Delights' },
        { name: 'For Coding' },
        { name: 'Classics' },
        { name: 'Pop' },
        { name: 'Rap' },
        { name: 'Playlist 7' },
        { name: 'Playlist 8' },
        { name: 'Playlist 9' },
        { name: 'Playlist 10' },
        { name: 'Playlist 11' },
    ]
    return (
        playLists.map((e, id) => {
            if (e.name === "For Coding") {
                return (
                    <li key={id} className="py-1 relative">
                        <a href="/" className="text-link hover:text-white cursor-default">
                            <span className="text-sm font-medium leading-5">{e.name}</span>
                            <span className="absolute right-5 top-2/4 -translate-y-1/2"><SideBarIcons name="listPlaying"/></span>
                        </a>
                    </li>
                )
            }
            else {
                return (
                    <li key={id} className="py-1">
                        <a href="/" className="text-link hover:text-white cursor-default">
                            <span className="text-sm font-medium leading-5">{e.name}</span>
                        </a>
                    </li>
                )
            }

        })
    );
};

export default SidePlaylist;