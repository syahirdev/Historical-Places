import { PlaceState } from '../redux/reducers/appSlice';
import VisitButton from './VisitButton';

type Props = {
  place: PlaceState;
  openModal: () => void;
};

export default function Card({ place, openModal }: Props) {
  return (
    <button
      className="flex-grow md:basis-[calc(50%-0.75rem)] xl:basis-[calc(33%-0.75rem)] border-2 border-black relative group"
      onClick={openModal}
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 duration-300" />
      <img
        src={`assets/${place.image}`}
        alt={place.name}
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
      />
      <div className="absolute top-5 left-5 right-5 text-white opacity-0 group-hover:opacity-100 duration-300">
        {place.description}
      </div>
      <div className="absolute bottom-3 left-5 right-5 bg-white flex justify-between px-8 py-3 transform skew-x-[-15deg]">
        <div className="skew-x-[15deg] flex flex-col items-start">
          <div className="font-bold">{place.name}</div>
          <div className="text-sm font-semibold">{place.location}</div>
        </div>
        <div className="skew-x-[15deg] flex">
          <VisitButton id={place.id} />
        </div>
      </div>
    </button>
  );
}
