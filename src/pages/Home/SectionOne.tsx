import React from "react";
import Card from "../../components/ui/Card";

const SectionOne = () => {
  return (
    <div className="container p-12 mx-auto">
      <div className="md:flex md:gap-10 md:justify-center">
        <div className="pb-5">
          <Card
            data={{
              title: "For Employers",
              description:
                "Find professionals from around the world and across all skills.",
              btnTitle: "Post jobs for Free",
              cardImgSrc: "svgexport-1.png",
              cardBg: "bg-red-100",
            }}
          />
        </div>
        <div>
          <Card
            data={{
              title: "For Candidate",
              description:
                "Build your professional profile, find new job opportunities.",
              btnTitle: "Upload your CV",
              cardImgSrc: "svgexport-2.png",
              cardBg: "bg-red-100",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
