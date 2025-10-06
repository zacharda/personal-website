import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10 mt-14 md:mt-0">
        <section id="about">
          <h2 className="text-3xl font-semibold mb-4">Hey, I'm Dávid Zachar</h2>
          <p className="text-gray-700 mb-8">
            I am currently a third-year student at the Faculty of Informatics
            and Information Technologies STU in Bratislava. My studies have been
            extended by an additional year to successfully complete my
            bachelor's thesis. I am interested in gaining practical experience
            that will allow me to continue growing and developing.
          </p>
        </section>

        {/* Resume Section */}
        <section id="resume">
          <h3 className="text-2xl font-semibold mb-2">Resume</h3>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-2">Education</h4>
            <div className="rounded-xl p-6 bg-gray-100">
              <h4 className="text-base font-medium">
                Slovak University of Technology in Bratislava
              </h4>
              <p className="text-sm text-gray-600">
                Faculty of Informatics and Information Technologies
              </p>
              <p className="text-sm text-gray-500">September 2022 - Present</p>
            </div>
            <div className="rounded-xl p-6 bg-gray-100 mb-4">
              <h4 className="text-base font-medium">
                Gymnázium Javorová 16, Spišská Nová Ves
              </h4>
              <p className="text-sm text-gray-600">8-year program</p>
              <p className="text-sm text-gray-500">2014 - 2022</p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-4 mt-6">
            <h4 className="text-lg font-semibold mb-2">Skills</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 bg-gray-100">
                <h5 className="text-lg font-medium mb-4">Languages</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Python</li>
                  <li>HTML, CSS, JavaScript</li>
                  <li>C</li>
                </ul>
              </div>

              <div className="rounded-xl p-6 bg-gray-100">
                <h5 className="text-lg font-medium mb-4">Tools</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Git, GitHub</li>
                  <li>UML Modeling</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
