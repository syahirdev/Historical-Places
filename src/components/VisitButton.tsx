import { PiFlagBannerFold, PiFlagBannerFoldFill } from 'react-icons/pi';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import {
  appendVisitedPlace,
  removeVisitedPlace
} from '../redux/reducers/appSlice';

type Props = {
  id?: number;
};

export default function VisitButton({ id }: Props) {
  const dispatch = useAppDispatch();
  const { visited } = useAppSelector((state) => state.app);
  const isVisited = visited.some((value) => value === id);

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (id) {
      isVisited
        ? dispatch(removeVisitedPlace(id))
        : dispatch(appendVisitedPlace(id));
    }
  };

  return (
    <button onClick={onClick} className="flex items-center gap-x-1.5">
      <span className="text-sm">{isVisited ? 'Visited' : 'Not visited'}</span>
      {isVisited ? <PiFlagBannerFoldFill /> : <PiFlagBannerFold />}
    </button>
  );
}
