import { useState } from 'react';
import { PiFlagBannerFold, PiFlagBannerFoldFill } from 'react-icons/pi';

export default function VisitButton() {
  const [visited, setVisited] = useState(false);

  return (
    <button
      onClick={() => setVisited(!visited)}
      className="flex items-center gap-x-3"
    >
      <span>{visited ? 'Visited' : 'Not yet visited'}</span>
      {visited ? <PiFlagBannerFoldFill /> : <PiFlagBannerFold />}
    </button>
  );
}
