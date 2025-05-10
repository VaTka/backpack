import { materialMetalConfig } from "./config";

type ItemStyleProps = {
    color: string;
    metalColor: string;
    setMetalColor: (color: string) => void;
};


export const MetalColors: React.FC<ItemStyleProps> = ({ color, metalColor, setMetalColor }) => {
    const materialColor = materialMetalConfig.get(color)![0]
    const gradientColor = materialMetalConfig.get(color)![1]
    return <button
        key={color}
        className={`w-10 h-10 outline-offset-2 outline-1 rounded-full ${metalColor === color ? "outline-blue-500" : "outline-transparent"}`}
        style={{
            background: `linear-gradient(0.35turn, ${materialColor} 30%, ${gradientColor}, ${materialColor}) `
        }}
        onClick={() => setMetalColor(color)}
    />
}