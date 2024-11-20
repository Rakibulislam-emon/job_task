import Image from "next/image";
import DuaActions from "./DuaActions";


export default function DuaCard({ duas }) {
  
    return (
        <div className="overflow-y-auto lg:max-h-[76vh]">
            {
                duas?.map((dua, index) => (
                    <div key={index}>
                        <div className="flex gap-x-2 items-center py-4">
                            
                            {/* image */}
                            <Image src={'/surahIcons/allah.png'} alt="icon" height={40} width={40} />
                            {/* text */}
                            <h1 className="text-[#1fa45b] text-base">{dua.dua_name_en}</h1>
                        </div>
                        <div className="flex flex-col gap-y-8 ">
                            {/* description */}
                            <h4 className="font-semibold text-[18px]">{dua.top_en}</h4>
                            {/* aribic */}
                            <h4 className="font-semibold text-[26px] text-right" dir="rtl">{dua.dua_arabic}</h4>
                            {/* tansliteration */}
                            {dua.transliteration_en && <h4 className=" text-[18px]">
                                <span className="font-medium">Transliteration:</span>
                                <span>{dua.transliteration_en}</span>
                            </h4>}
                            {dua.translation_en && <h4 className="text-[18px]">
                                <span className="font-medium text-[#393939] ">Translation:</span >
                                {dua.translation_en}
                            </h4>}
                            <div>
                                <h6 className="text-[#1fa45b] text-[18px]">Reference:</h6>
                                <h4 className="font-medium text-[18px]">{dua.refference_en}</h4>

                            </div>

                        </div>
                        <div className="py-4">
                            <DuaActions />
                        </div>
                    </div>
                ))
            }

        </div>
    );
}
