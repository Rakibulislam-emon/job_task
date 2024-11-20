import { FaCirclePlay } from "react-icons/fa6";
import { BsCopy } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { BsShare } from "react-icons/bs";
import { LuBadgeInfo } from "react-icons/lu";

export default function DuaActions() {
    return (
        <div className="flex justify-between">
            <FaCirclePlay size={40} className=" text-green-500 cursor-pointer" />
            <span className="flex gap-x-10">
                <BsCopy size={24} className="bg-white cursor-pointer" />
                <CiBookmark size={24} className=" cursor-pointer"/>
                <PiLightbulbFilamentLight size={24} className=" cursor-pointer"/>
                <BsShare size={24} className=" cursor-pointer"/>
                <LuBadgeInfo size={24} className=" cursor-pointer"/>
            </span>
        </div>
    )
}
