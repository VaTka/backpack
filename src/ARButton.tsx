import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const ARButton = () => {
  const [showQR, setShowQR] = useState(false);
  const arUrl = window.location.origin + "/ar"

  const handleClick = () => {
    console.log(isMobile)
    if (isMobile()) {
      window.location.href = arUrl
    } else {
      setShowQR(true)
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        View in AR
      </button>
      {showQR && (
        <div className="absolute top-14 left-0 bg-white p-4 shadow-xl rounded-lg z-50">
          <p className="text-sm mb-2 text-center">Scan with your phone:</p>
          <QRCodeSVG value={arUrl} size={150} />
          <button
            onClick={() => setShowQR(false)}
            className="mt-2 text-sm text-blue-600 underline block mx-auto"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ARButton;
