import LeftButtons from "./LeftButtons";

const Left = ({ name }) => {
    return (
        <div className="flex items-center w-[30%] overflow-hidden">
            <div className="h-14 w-14">
                <img src="https://i.scdn.co/image/ab67616d0000485178f71c0d2fe34592a3c18f80" alt="spotify" />
            </div>
            <div className="mx-3">
                <div className="leading-4 hover:underline">
                    <a href="/" className="text-sm font-normal no-underline">Sweather Weather</a>
                </div>
                <div className="text-link leading-4 hover:underline hover:text-white">
                    <a href="/" className="text-xs font-normal no-underline">The Neighbourhood</a>
                </div>
            </div>
            <LeftButtons name="saveToLibrary" />
            <LeftButtons name="showMusicImg" />
        </div>
    );
};

export default Left;