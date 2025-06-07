import { GraduationCapIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SkillsSection = (): JSX.Element => {
  const educationData = {
    degree: "Bachelor of Computer Engineering",
    institution: "Persian Gulf University, Bushehr, Iran",
    period: "2020 – 2025",
  };

  return (
    <div className="relative w-full py-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-1 mb-4 justify-center">
          <GraduationCapIcon className="w-6 h-6" />
          <h3 className="font-semibold text-sm text-[#3d3e43]">Education</h3>
        </div>

        <Card className="border-0 shadow-none">
          <CardContent className="p-0 relative">
            <div className="relative">
              {/* Timeline graphics */}
              <div className="relative">
                <img
                  className="w-[233px] h-[81px] mx-auto"
                  alt="Education timeline"
                  src="/group-19-2.png"
                />

                <div className="absolute bottom-0 left-0 bg-[#b7c9f2] border-[1.5px] border-solid w-[15px] h-[15px] rounded-[7.5px]" />

                <div className="absolute right-0 top-0">
                  <img
                    className="w-3.5 h-[50px]"
                    alt="Timeline connector"
                    src="/vector-16-2.svg"
                  />
                  <div className="absolute bottom-3 right-0 w-[15px] h-[15px] rounded-[7.5px] border-4 border-solid border-[#b7c9f2]" />
                </div>
              </div>

              {/* Education details */}
              <div className="absolute top-4 left-5">
                <h4 className="font-bold text-[13px] text-[#3d3e43] mb-2">
                  {educationData.degree}
                </h4>
                <p className="font-light text-xs text-[#3d3e43]">
                  {educationData.institution}
                  <br />
                  {educationData.period}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
