export default function Navbar() {
  return (
    <header className="my-5 mx-auto max-w-5xl flex justify-between items-center">
      <img src="logo.svg" alt="logo" />
      <nav className="">
        <ul className="flex gap-x-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/places">Places</a>
          </li>
          <li>
            <a href="/visited-places">Visited</a>
          </li>
          <li>
            <button>Random</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
