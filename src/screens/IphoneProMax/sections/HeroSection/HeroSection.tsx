import { GlobeIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Language data for mapping
  const languages = [
    {
      name: "English",
      level: "Intermediate",
      bgColor: "bg-[#9195f6]",
      width: "w-[280px]",
      borderStyle:
        "border border-solid border-black shadow-[2px_0px_0px_#000000]",
    },
    {
      name: "Persian",
      level: "Native",
      bgColor: "bg-[#ff7ed4]",
      width: "w-full",
      borderStyle:
        "border-[0.5px] border-solid border-black shadow-[1px_1px_0px_#000000]",
    },
  ];

  return (
    <div className="flex flex-col w-full items-end gap-4">
      <div className="flex items-center justify-end gap-1">
        <GlobeIcon className="w-6 h-6" />
        <div className="font-semibold text-[#3d3e43] text-sm">Language</div>
      </div>

      {languages.map((language, index) => (
        <Card
          key={index}
          className="flex flex-col h-9 items-start justify-around gap-2.5 p-1 w-full bg-[#e6eaf3] rounded-[1000px] border-2 border-solid border-[#292d32]"
        >
          <CardContent className="p-0 relative w-full">
            <div
              className={`flex items-center gap-4 p-4 relative flex-1 ${language.width} grow ${language.bgColor} rounded-[103px] ${language.borderStyle}`}
            >
              <div className="mt-[-15.00px] mb-[-13.00px] font-medium text-[#343434] text-xs leading-6 whitespace-nowrap">
                {language.name}
              </div>
            </div>
            <div
              className={`absolute top-1 ${index === 0 ? "left-[291px]" : "left-[326px]"} font-medium text-[#343434] text-xs leading-6 whitespace-nowrap`}
            >
              {language.level}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
