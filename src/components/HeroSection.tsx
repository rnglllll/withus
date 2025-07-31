import React from "react";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
}) => {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className="text-center flex flex-col gap-4">
        <span className="text-white text-[40px] font-light">{title}</span>
        <span className="text-white text-[24px] font-semibold leading-[1.2]">
          {subtitle}
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
