import { FaCircleUser } from "react-icons/fa6";

const AvatarDropDown = () => {
    return (
        <div className="flex">
            <FaCircleUser color="rgba(0, 142, 239, 1)" className="w-16 h-7" />
            <select name="select" className="flex-shrink"> {/* Added flex-shrink to control width */}
                <option value="value 1">Nnwachukwu</option>
                <option value="value 2">Samuel</option>
                <option value="value 3">Billion</option>
                <option value="value 4">Monday</option>
            </select>
        </div>
    );
};

export default AvatarDropDown;
