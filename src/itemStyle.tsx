import { BodyColors } from "./bodyColors";
import { MetalColors } from "./metalColors";

type ItemStyleProps = {
    itemArray: string[];
    materialColor: string;
    seter: (color: any) => void;
    titleText: string
    material: boolean
};

export const ItemStyle: React.FC<ItemStyleProps> = ({ itemArray, materialColor, seter, titleText, material }) => {
    return <div className="text-center flex flex-col justify-center md:text-start md:justify-start">
        <h3 className="mb-t-2 font-medium">{titleText}</h3>
        <hr className='mt-1 mb-3 w-[100%] md:w-[130%]' />
        <div className="flex gap-4 justify-center">
            {itemArray.map((color, index) => (
                <div key={color} className='text-center mx-1'>
                    {!material
                        ? <BodyColors color={color} bodyColor={materialColor} setBodyColor={seter} />
                        : <MetalColors color={color} metalColor={materialColor} setMetalColor={seter} />
                    }
                    <span className={`mt-1 block ${materialColor == color ? "text-[#4169E1]" : "text-black"}`}>{itemArray[index]}</span>
                </div>
            ))}
        </div>
    </div>
}