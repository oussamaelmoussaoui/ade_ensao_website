import React, { useState, useEffect } from "react";

export default function ClubsDrawer({ clubs }) {
  const [selectedClub, setSelectedClub] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Runs only in the browser
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 640);

    checkScreenSize(); // run once on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const openDrawer = (club) => setSelectedClub(club);
  const closeDrawer = () => setSelectedClub(null);

  useEffect(() => {
    if (selectedClub) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`; // prevent jump
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [selectedClub]);



  return (
    <div className="py-6">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
        {clubs.map((club, index) => (
          <div
            key={index}
            className="relative border rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between bg-white cursor-pointer filter grayscale-0 hover:grayscale duration-300"
            onClick={() => openDrawer(club)}
          >
            <img
              src={club.src}
              alt={club.name}
              className="w-full px-4 h-60 object-contain"
            />
            <div className="rounded-lg absolute bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent w-full">
              <h3 className="text-xl font-semibold text-white">{club.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay */}
      {selectedClub && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed rounded-t-xl md:rounded-none bg-white shadow-xl z-50 transition-transform lg:w-[35vw] duration-300 ease-in-out 
          ${selectedClub
            ? "translate-x-0 bottom-0"
            : "translate-x-full sm:translate-y-full"
          }
          sm:bottom-auto sm:top-0 sm:right-0 sm:w-96
          w-full h-[80%] sm:h-full`}
        style={{
          transform: selectedClub
            ? "translateX(0)"
            : isLargeScreen
            ? "translateX(100%)"
            : "translateY(100%)"
        }}
      >
        {selectedClub && (
          <div className="p-6 flex flex-col h-full">
            <img
              src={selectedClub.src}
              alt={selectedClub.name}
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedClub.name}</h2>
            <p className="text-gray-700 mb-4">{selectedClub.desc}</p>
            <p className="text-sm text-gray-500 mb-6">
              Instagram:{" "}
              <a
                href={selectedClub.insta}
                target="_blank"
                rel="noopener noreferrer"
                className="text-adeBlue-700"
              >
                {selectedClub.name}
              </a>
            </p>
            <button
              onClick={closeDrawer}
              className="mt-auto px-4 py-2 bg-black text-white rounded-lg hover:bg-adeBlue-700 transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
