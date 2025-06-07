import React from "react";

export const ProjectShowcaseSection = (): JSX.Element => {
  return (
    <div className="flex items-center gap-4">
      <h2 className="[text-shadow:2px_2px_0px_#000000] [font-family:'Inter',Helvetica] font-semibold text-[#9195f6] text-[32px]">
        UX
      </h2>

      <img
        className="w-[54px] h-[114px]"
        alt="Decorative vector"
        src="/vector-13.svg"
      />

      <img
        className="w-[54px] h-[114px]"
        alt="Decorative vector"
        src="/vector-14.svg"
      />

      <h2 className="[text-shadow:2px_2px_0px_#000000] [font-family:'Inter',Helvetica] font-semibold text-[#ff7ed4] text-[32px]">
        UI
      </h2>
    </div>
  );
};
