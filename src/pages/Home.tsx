import { useEffect, useState } from 'react';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import VisitButton from '../components/VisitButton';
import { useAppSelector } from '../redux/app/hooks';
import { PlaceState } from '../redux/reducers/appSlice';

export default function Home() {
  const navigate = useNavigate();
  const { highlights } = useAppSelector((state) => state.app);
  const [selectedPlace, setSelectedPlace] = useState<PlaceState | null>(null);

  useEffect(() => {
    if (highlights.length > 0) setSelectedPlace(highlights[0]);
  }, [highlights]);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div id="hero" className="relative w-full h-[60vh]">
        <img
          src={`assets/${selectedPlace?.image}`}
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="flex justify-between absolute inset-0 max-w-5xl mx-auto py-5 pr-5">
          <div className="flex flex-col justify-center gap-y-3 ">
            <h1 className="text-white text-7xl max-w-1 font-bold tracking-wide">
              Historical Places
            </h1>
            <p className="text-white text-xl">That you might've liked!</p>
            <button
              className="bg-white w-fit transform -skew-x-[15deg] mt-3"
              onClick={() => navigate('/places')}
            >
              <div className="hover:animate-bounce-x px-7 py-2 flex items-center gap-x-2">
                <span>See more</span>
                <HiOutlineChevronDoubleRight />
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-y-5">
            {highlights?.slice(0, 4)?.map((place) => (
              <button
                key={place.id}
                className="relative p-1.5 bg-white bg-opacity-50 inline-block hover:bg-opacity-80 duration-300"
                onClick={() => setSelectedPlace(place)}
              >
                <img
                  src={`assets/${place.image}`}
                  alt={place.name}
                  className="w-[200px] h-[120px] object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Place Info */}
      <div id="info" className="max-w-5xl mx-auto mt-10 pl-5 pb-5">
        <div className="font-bold text-3xl">{selectedPlace?.name}</div>
        <div className="font-semibold text-xl">{selectedPlace?.location}</div>
        <div className="max-w-96 mt-1 mb-5">{selectedPlace?.description}</div>
        <VisitButton id={selectedPlace?.id} />
      </div>
    </div>
  );
}
