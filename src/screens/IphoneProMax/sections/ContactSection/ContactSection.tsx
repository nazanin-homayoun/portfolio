import { LampIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = (): JSX.Element => {
  // Skills data for mapping
  const skills = [
    "User interface",
    "User experience",
    "Interaction design",
    "Wireframing (low to high fidelity)",
    "Rapid prototyping",
    "Layout, color psychology",
    "Typography principles",
    "Design style",
    "Design system (material)",
    "Accessibility",
    "Usability testing",
    "User research",
    "Persona",
    "Mind map and user flow",
    "UX writing",
    "User journey map",
    "Design thinking",
    "Responsive design",
  ];

  return (
    <section className="relative w-full py-8">
      <Card className="relative w-full max-w-[476px] mx-auto">
        <CardContent className="p-4">
          <div className="flex">
            {/* Left side with icon and title */}
            <div className="flex flex-col items-center gap-1 mr-4">
              <LampIcon className="w-6 h-6" />
              <h3 className="font-semibold text-[#3d3e43] text-sm">Skills</h3>
            </div>

            {/* Divider line */}
            <div className="relative flex-1">
              <img className="h-full" alt="Divider" src="/group-19-4.png" />

              {/* Skills list */}
              <div className="font-['Inter',Helvetica] text-[#3d3e43] text-xs">
                <ul className="space-y-0">
                  {skills.map((skill, index) => (
                    <li key={index} className="leading-[23px]">
                      {skill === "Design style" ? (
                        <>
                          {skill}
                          <span className="font-extralight">
                            {" "}
                            (minimal, flat, semi-flat, morphism (neo, glass))
                          </span>
                        </>
                      ) : (
                        skill
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right side decorative elements */}
            <div className="ml-2 relative">
              <img className="w-12 h-4" alt="Vector" src="/vector-16.svg" />
              <div className="mt-5 w-[15px] h-[15px] bg-[#b7c9f2] rounded-[7.5px] border-[1.5px] border-solid" />
            </div>
          </div>

          {/* Decorative circle element */}
          <div className="absolute top-0 left-0 w-[15px] h-[15px] rounded-[7.5px] border-4 border-solid border-[#b7c9f2]" />
        </CardContent>
      </Card>
    </section>
  );
};
