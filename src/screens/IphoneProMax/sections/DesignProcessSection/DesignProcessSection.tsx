import {
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DesignProcessSection = (): JSX.Element => {
  const contactInfo = [
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      text: "(+98)9381415201",
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      text: "Shiraz, Fars, Iran",
    },
    {
      icon: <MailIcon className="h-6 w-6" />,
      text: "nazaninhomayoun2002@gmail.com",
    },
    {
      icon: <LinkedinIcon className="h-6 w-6" />,
      text: "LinkedIn",
    },
  ];

  return (
    <Card className="border-none shadow-none w-full max-w-[235px]">
      <CardContent className="flex flex-col items-start gap-2 p-0">
        <div className="relative w-[177.52px] h-[135.5px]">
          <div className="relative w-[180px] h-[136px]">
            <img
              className="w-[175px] h-[123px] object-contain ml-[5px]"
              alt="Profile"
              src="/group-19.png"
            />
            <div className="absolute bottom-0 left-0 border-4 border-solid border-[#b7c9f2] w-[15px] h-[15px] rounded-[7.5px]" />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <UserIcon className="h-6 w-[25px]" />
          <span className="font-semibold text-[#3d3e43] text-sm font-['Inter',Helvetica]">
            Information
          </span>
        </div>

        <div className="flex flex-col items-start gap-1 w-full">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-0.5 w-full">
              {item.icon}
              <span className="font-['Inter',Helvetica] text-[#3d3e43] text-xs w-[204px]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
