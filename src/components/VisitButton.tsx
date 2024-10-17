import { useState } from 'react';
import { PiFlagBannerFold, PiFlagBannerFoldFill } from 'react-icons/pi';

export default function VisitButton() {
  const [visited, setVisited] = useState(false);

  return (
    <button
      onClick={() => setVisited(!visited)}
      className="flex items-center gap-x-3"
    >
      {visited ? <PiFlagBannerFoldFill /> : <PiFlagBannerFold />}
      <span>{visited ? 'Visited' : 'Not yet visited'}</span>
    </button>
  );
}
