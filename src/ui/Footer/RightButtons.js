import FooterIcons from "images/FooterIcons";

const RightButtons = ({name}) => {
    return (
        <div className="w-8 h-8">
            <button className="text-link w-8 h-8 win-w-[32px] border-0 hover:text-white">
                <FooterIcons name={name} />
            </button>
        </div>
    );
};

export default RightButtons;