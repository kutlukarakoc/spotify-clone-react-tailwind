import FooterIcons from "images/FooterIcons";

const CenterButtons = ({name}) => {
    return (
        <button className="border-none cursor-default text-link w-8 h-8 flex justify-center items-center min-w-[32px] hover:text-white">
            <FooterIcons name={name} />
        </button>
    );
};

export default CenterButtons;