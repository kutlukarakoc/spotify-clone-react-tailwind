import FooterIcons from "images/FooterIcons";

const LeftButtons = ({name}) => {
    return (
        <div className="w-8 h-8 flex items-center justify-center">
            <button className="text-link hover:text-white">
                <FooterIcons name={name} />
            </button>
        </div>
    );
};

export default LeftButtons;