import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";


export default function Projects() {
  return (
    <div className="flex min-h-screen relative">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10 mt-14 md:mt-0">
        <section id="about">
          <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
        </section>
      </main>
    </div>
  );
}