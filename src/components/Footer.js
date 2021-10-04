import Left from "ui/Footer/Left";
import Center from "ui/Footer/Center";
import Right from "ui/Footer/Right";

const Footer = () => {


    return (
        <div className="h-24 bg-footer-background text-white z-20 w-full">
            <div className="border-t border-footer-border-color min-w-[620px] h-full flex items-center justify-between px-4">
                <Left />
                <Center/>
                <Right/>
            </div>
        </div>
    );
};

export default Footer;