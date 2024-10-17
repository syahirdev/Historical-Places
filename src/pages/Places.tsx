import Card from '../components/Card';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';

export default function Places() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="max-w-5xl mx-auto flex flex-wrap gap-3">
        {[...Array(4)].map(() => (
          <Card />
        ))}
      </div>

      <Modal />
    </div>
  );
}
