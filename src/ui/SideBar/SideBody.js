import SideBarIcons from "images/SideBarIcons";

const SideBody = () => {
    return (
        <>
            <li className="h-10">
                <button className="text-white opacity-70 flex items-center transition-opacity duration-200 ease-linear hover:opacity-100">
                    <div className="bg-white flex items-center justify-center mr-4 w-6 h-6 rounded-sm"><SideBarIcons name="createPlayList" /></div>
                    <span className="text-sm font-bold">Çalma Listesi Oluştur</span>
                </button>
            </li>
            <li className="h-10">
                <button className="text-white opacity-70 flex items-center transition-opacity duration-200 ease-linear hover:opacity-100">
                    <div className="text-white bg-gradient-to-br from-likedSongsIcon-gradientFrom to-likedSongsIcon-gradientTo flex items-center justify-center mr-4 w-6 h-6 rounded-sm"><SideBarIcons name="likedSongs" /></div>
                    <span className="text-sm font-bold">Beğenilen Şarkılar</span>
                </button>
            </li>
        </>
    );
};

export default SideBody;