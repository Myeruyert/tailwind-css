export default function Home() {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-end gap-4">
        <h1 className="font-bold">Brainwave.io</h1>
        <ul className="flex gap-2 text-xs">
          <li>Demos</li>
          <li>Pages</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
      </div>
      <button className="bg-indigo-600 text-white py-2 px-3 rounded-md">
        Get started a project
      </button>
    </header>
  );
}
