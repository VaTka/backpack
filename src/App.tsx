import { useState } from 'react';
import './App.css'
import { ItemStyle } from './itemStyle'
import { ProductConfigurator } from './ProductConfigurator';
import type { materialMetalTypes, materialTypes } from './config';
import { QRCodeSVG } from 'qrcode.react';

const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const bodyColors = ["Brown", "Black", "Blue"];
const metalColors = ["Silver", "Gold", "Black"];
const materials = ["leather", "fabric", "denim"];

function App() {
  const [showQR, setShowQR] = useState(false);
  const arUrl = window.location.origin + "/ar";

  const handleClick = () => {
    console.log(isMobile)
    if (isMobile()) {
      window.location.href = arUrl
    } else {
      setShowQR(!showQR)
    }
  };
  const [bodyColor, setBodyColor] = useState("#db8b51");
  const [metalColor, setMetalColor] = useState<materialMetalTypes>("Silver");
  const [material, setMaterial] = useState<materialTypes>(`leather`);

  return (
    <div className='flex justify-center'>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 w-4xl">
        <button className="mb-6 bg-[#4169E1] text-white px-5 py-2 rounded-full" onClick={() => handleClick()}>
          See In Real Life
        </button>
        {showQR ? (
          <div className='w-80 text-center text-[#4169E1] border-1 rounded-2xl p-4'>
            <button className='flex justify-self-end'>X</button>
            <div className='p-4 flex flex-col gap-2 justify-center items-center'>
              <div className='text-2xl'>
                <p>Scan the QR code with your phone. Within 1-3 seconds the AR function opens on your phone.</p>
              </div>
              <hr className='w-full' />
              <div className='p-7 mt-10 border-1 rounded-2xl w-fit'>
                <QRCodeSVG fgColor='#4169E1' value={arUrl} size={150} className='justify-self-center' />
              </div>
            </div>
          </div>
        ) : (<>
          <ProductConfigurator color={bodyColor} materialDetail={metalColor} matrial={material} />
          <div className="flex justify-between align-top w-full flex-col gap-7 md:flex-row">
            <ItemStyle itemArray={bodyColors} materialColor={bodyColor} seter={setBodyColor} titleText={'BODY COLOR'} material={false} />
            <ItemStyle itemArray={metalColors} materialColor={metalColor} seter={setMetalColor} titleText={'METAL COLOR'} material={true} />
            <div className="md:text-start text-center">
              <h3 className="mb-t-2 font-medium">MATERIAL</h3>
              <hr className='mt-1 mb-3 w-full' />
              <div className="flex gap-3 justify-center">
                {materials.map((mat: any) => (
                  <button
                    key={mat}
                    className={`px-4 py-1 rounded-full border ${material === mat
                      ? "border-blue-500 text-blue-500"
                      : "border-gray-300"
                      }`}
                    onClick={() => setMaterial(mat)}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
        )}
      </div>
    </div>
  )
}

export default App
