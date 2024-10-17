import VisitButton from './VisitButton';

export default function Card() {
  return (
    <div className="relative w-[500px] h-[300px] group">
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 duration-300" />
      <img
        src="assets/colosseum.png"
        alt="colosseum"
        className="w-[500px] h-[300px] object-cover"
      />
      <div className="absolute top-5 left-5 right-5 text-white opacity-0 group-hover:opacity-100 duration-300">
        The Colosseum is an ancient amphitheater in Rome, famous for
        gladiatorial contests and public spectacles.
      </div>
      <div className="absolute bottom-3 left-5 right-5 bg-white flex justify-between px-8 py-3 transform skew-x-[-15deg]">
        <div className="skew-x-[15deg] flex flex-col">
          <div className="text-xl font-bold">Colosseum</div>
          <div className="font-semibold">Rome, Italy</div>
        </div>
        <div className="skew-x-[15deg] flex">
          <VisitButton />
        </div>
      </div>
    </div>
  );
}
