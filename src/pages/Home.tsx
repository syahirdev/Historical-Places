import { HiOutlineChevronDoubleRight } from 'react-icons/hi2';
import Navbar from '../components/Navbar';
import VisitButton from '../components/VisitButton';

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div id="hero" className="relative w-full h-[60vh]">
        <img
          src="assets/colosseum.png"
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
            <button className="bg-white w-fit transform -skew-x-[15deg] mt-3">
              <div className="hover:animate-bounce-x px-7 py-2 flex items-center gap-x-2">
                <span>See more</span>
                <HiOutlineChevronDoubleRight />
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-y-5">
            {[...Array(4)].map(() => (
              <div className="relative p-1.5 bg-white bg-opacity-50 inline-block hover:bg-opacity-80 duration-300">
                <img
                  src="assets/taj-mahal.png"
                  alt="taj-mahal"
                  className="w-[200px] h-[120px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div id="info" className="max-w-5xl mx-auto mt-10">
        <div className="font-bold text-3xl">Colosseum</div>
        <div className="font-semibold text-xl">Rome, Italy</div>
        <div className="max-w-96 mt-1 mb-5">
          The Colosseum is an ancient amphitheater in Rome, famous for
          gladiatorial contests and public spectacles.
        </div>
        <VisitButton />
      </div>
    </div>
  );
}
