import { BriefcaseIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Project data for mapping
const projects = [
  {
    title: "Habit Tracker App",
    description:
      "A fully designed and implemented mobile application to help users track their habits and daily routines.",
    features: [
      "Daily and weekly habit tracking",
      "Progress visualization",
      "Minimal and intuitive user interface",
    ],
  },
  {
    title: "Psychology App Design",
    description:
      "A design concept for a mobile application focused on mental health and psychology.",
    features: [
      "Main screens including home, session booking, and tips designed",
      "Emphasis on user comfort and calm visual tone",
    ],
  },
  {
    title: "Landing Page Designs",
    description:
      "Multiple landing page design experiences for various web-based services and products.",
    features: [
      "Responsive and modern layouts",
      "Focused on UX writing and call-to-action optimization",
      "Clean visual hierarchy and consistent design system",
    ],
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[363px] mx-auto my-8 relative">
      <Card className="border-0 shadow-none">
        <CardContent className="p-0">
          <div className="relative">
            {/* Timeline element */}
            <div className="absolute left-0 top-0 h-full flex items-center">
              <div className="relative h-full">
                <img
                  className="h-[430px] w-[5px]"
                  alt="Timeline"
                  src="/group-19-5.png"
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15px] h-[15px] rounded-[7.5px] border-4 border-solid border-[#b7c9f2]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <img
                    className="w-[46px] h-[19px]"
                    alt="Vector"
                    src="/vector-16.svg"
                  />
                  <div className="mt-1 mx-auto w-[15px] h-[15px] bg-[#b7c9f2] rounded-[7.5px] border-[1.5px] border-solid" />
                </div>
              </div>
            </div>

            {/* Section header */}
            <div className="flex items-center mb-6 ml-8">
              <BriefcaseIcon className="w-6 h-6 mr-2" />
              <h2 className="font-semibold text-[#3d3e43] text-sm">Projects</h2>
            </div>

            {/* Projects list */}
            <div className="ml-12 text-xs text-[#3d3e43] leading-[23px]">
              {projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <span className="font-bold">{project.title}</span>
                  <span className="font-normal">
                    {"  "}
                    {project.description}
                  </span>
                  <ul className="list-none">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        {"  • "}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
