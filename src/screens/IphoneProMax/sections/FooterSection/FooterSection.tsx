import { SmartphoneIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FooterSection = (): JSX.Element => {
  const designTools = [
    {
      name: "Figma",
      image: "/rectangle-1.png",
    },
    {
      name: "Adobe XD",
      image: "/image-1.png",
    },
    {
      name: "Sketch",
      image: "/image-2.png",
    },
  ];

  return (
    <div className="relative w-full py-4">
      <div className="relative flex justify-center">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute w-[171px] h-24 -left-[38px] top-[38px] -rotate-90">
            <img
              className="absolute w-[77px] h-[152px] -top-8 left-[42px] rotate-90"
              alt="Group"
              src="/group-19-3.png"
            />
            <div className="top-0 left-[156px] border-4 border-solid border-[#b7c9f2] absolute w-[15px] h-[15px] rounded-[7.5px]" />
            <div className="absolute w-[15px] h-[15px] top-[81px] left-0 bg-[#b7c9f2] rounded-[7.5px]" />
          </div>

          {/* Content Card */}
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col w-[108px] items-start gap-4 ml-5 mt-2">
                {/* Technology Header */}
                <div className="flex items-center gap-1 relative self-stretch w-full">
                  {/* Using Lucide icon instead of the SVG */}
                  <SmartphoneIcon className="w-6 h-6" />
                  <div className="font-semibold text-[#3d3e43] text-sm">
                    Technology
                  </div>
                </div>

                {/* Design Tools List */}
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                  {designTools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 relative self-stretch w-full"
                    >
                      <div className="relative self-stretch w-[59px] font-normal text-[#3d3e43] text-xs">
                        {tool.name}
                      </div>
                      <img
                        className="relative w-7 h-7 object-cover"
                        alt={tool.name}
                        src={tool.image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
