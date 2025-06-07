import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Card, CardContent } from "../../components/ui/card";
import { ContactSection } from "./sections/ContactSection";
import { DesignProcessSection } from "./sections/DesignProcessSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectShowcaseSection } from "./sections/ProjectShowcaseSection/ProjectShowcaseSection";
import { SkillsSection } from "./sections/SkillsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const IphoneProMax = (): JSX.Element => {
  // Project data for mapping
  const projects = [
    {
      id: 1,
      name: "Psychology project",
      images: [
        {
          src: "/put-your-image-here-2.png",
          alt: "Put your image here",
          className: "w-[99px] h-[215px]",
        },
        {
          src: "/put-your-image-here-1.png",
          alt: "Put your image here",
          className: "w-[99px] h-[215px]",
        },
        {
          src: "/rectangle.png",
          alt: "Rectangle",
          className: "w-[169px] h-[301px]",
        },
      ],
    },
    {
      id: 2,
      name: "Habit tracker project",
      images: [
        {
          src: "/put-your-image-here-3-1-1-7.svg",
          alt: "Put your image here",
          className: "w-[151px] h-[171px]",
        },
        {
          src: "/put-your-image-here-3-1-1.png",
          alt: "Put your image here",
          className: "w-[151px] h-[190px]",
        },
        {
          src: "/put-your-image-here-3-1-1-1.png",
          alt: "Put your image here",
          className: "w-[92px] h-[193px]",
        },
        {
          src: "/put-your-image-here-3-1-1-2.png",
          alt: "Put your image here",
          className: "w-[121px] h-[165px]",
        },
        {
          src: "/put-your-image-here-3-1-1-4.png",
          alt: "Put your image here",
          className: "w-[151px] h-[86px]",
        },
        {
          src: "/put-your-image-here-3-1-1-7.svg",
          alt: "Put your image here",
          className: "w-[151px] h-[97px]",
        },
        {
          src: "/put-your-image-here-3-1-1-4.png",
          alt: "Put your image here",
          className: "w-[104px] h-[185px]",
        },
        {
          src: "/put-your-image-here-3-1-1-5.png",
          alt: "Put your image here",
          className: "w-[69px] h-[184px]",
        },
        {
          src: "/put-your-image-here-3-1-1-6.png",
          alt: "Put your image here",
          className: "w-[151px] h-[193px]",
        },
      ],
    },
    {
      id: 3,
      name: "Rona leather project",
      images: [
        {
          src: "/rectangle-2.png",
          alt: "Rectangle",
          className: "w-full h-[268px]",
        },
        {
          src: "/rectangle-3.png",
          alt: "Rectangle",
          className: "w-[204px] h-[331px]",
        },
      ],
    },
  ];

  return (
    <main className="bg-[#f2f4ce] flex flex-row justify-center w-full">
      <div className="bg-[#f2f4ce] w-full max-w-[430px] relative">
        {/* Profile Section */}
        <section className="flex flex-col items-center mt-14 mb-8">
          <div className="flex flex-col w-[175px] items-center gap-4">
            <Avatar className="w-[129px] h-[129px]">
              <AvatarImage
                src="/sticker-1.png"
                alt="Nazanin Homayoun"
                className="object-cover"
              />
              <AvatarFallback>NH</AvatarFallback>
            </Avatar>

            <h1 className="relative w-[185px] [text-shadow:1px_1px_1px_#000000] [-webkit-text-stroke:1px_#000000] [font-family:'Nunito',Helvetica] font-bold text-[#a5dd9b] text-xl text-center tracking-[2.80px] leading-[normal]">
              Nazanin Homayoun
            </h1>
          </div>
        </section>

        {/* Bio Section */}
        <section className="px-10 mb-8">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0">
              <p className="[font-family:'Inter',Helvetica] font-semibold text-[#3d3e43] text-xs text-center tracking-[0] leading-5">
                I&apos;m a UI/UX designer with over a year of experience,
                working on websites and mobile apps. I use Figma to create
                wireframes, prototypes, and clean, responsive designs with a
                good eye for layout, color balance, and small details. I enjoy
                working closely with developers and product teams to make sure
                the final result works well for users and meets business needs.
                <br /> I always aim to keep clients happy and design stuff that
                front-end developers can actually build without a headache.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Hero Section */}
        <section className="mb-8">
          <HeroSection />
        </section>

        {/* Project Showcase Section */}
        <section className="mb-8 px-9 relative">
          <ProjectShowcaseSection />
          <DesignProcessSection />
          <div className="relative w-[179px] h-[302px] ml-auto rotate-180">
            <div className="relative w-[181px] h-[302px]">
              <img
                className="w-[175px] h-72 -rotate-180"
                alt="Group"
                src="/group-19-1.png"
              />
              <div className="absolute top-0 left-0 w-[15px] h-[15px] rounded-[7.5px] border-4 border-solid border-[#b7c9f2]" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <SkillsSection />
        </section>

        {/* Contact and Footer Section */}
        <section className="mb-8 px-6">
          <ContactSection />
          <FooterSection />
        </section>

        {/* Testimonials Section */}
        <section className="mb-8">
          <TestimonialsSection />
        </section>

        {/* Project Sections */}
        {projects.map((project) => (
          <section key={project.id} className="mb-8 px-5">
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="p-0">
                <div className="flex flex-col items-center gap-8">
                  <div className="relative w-full h-[17px]">
                    <div className="absolute w-[246px] h-[15px] top-0 right-0">
                      <div className="relative h-[15px]">
                        <img
                          className="absolute w-[233px] h-[5px] top-1.5 left-0"
                          alt="Vector"
                          src="/vector-15.svg"
                        />
                        <div className="absolute top-0 right-0 -rotate-90 w-[15px] h-[15px] bg-[#b7c9f2] rounded-[7.5px] border-[1.5px] border-solid" />
                      </div>
                    </div>
                    <h3 className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-[#3d3e43] text-sm tracking-[0] leading-[normal]">
                      {project.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2 relative w-full">
                    {project.images.map((image, index) => (
                      <img
                        key={index}
                        className={image.className}
                        alt={image.alt}
                        src={image.src}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        ))}
      </div>
    </main>
  );
};
