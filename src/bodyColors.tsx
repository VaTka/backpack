type ItemStyleProps = {
    color: string;
    bodyColor: string;
    setBodyColor: (color: string) => void;
};


export const BodyColors: React.FC<ItemStyleProps> = ({ color, bodyColor, setBodyColor }) => {
    let materialColor = "#a3a2a2"
    if (color == "Brown") {
        materialColor = "#db8b51"
    }
    else if (color == "Blue") {
        materialColor = "#79b5fc"
    }
    return <button
        className={`w-10 h-10 outline-offset-2 outline-1 rounded-full ${bodyColor === color ? "outline-blue-500" : "outline-transparent"}`}
        style={{ backgroundColor: color.toLowerCase() }}
        onClick={() => setBodyColor(materialColor)}
    />
}