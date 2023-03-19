import React from "react";
import { useState } from "react";
import Button from "../../components/ui/Button";
import InputSearch from "../../components/ui/InputSearch";
import imageGirl from "../../assets/girl-hero-2-2.png";
import Icon from "../../components/ui/Icon";

const Landing = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const getOffreByKeyWord = () => {
    // e.preventDefault();
  };
  type Props = {
    placeholder: string;
    inputIcon: string;
  };
  const onInputChangeHnd = (e: InputEvent) => {
    const { target } = e;
    if (target) setKeyword((target as HTMLInputElement).value);
  };
  return (
    <>
      <div className="md:px-20 py-20 w-screen bg-gray-200 md:flex items-center justify-center md:justify-between gap-10">
        <div className="text-xl text-gray-600 p-4 pt-10">
          <div className="pl-1">
            <h1 className="text-3xl md:text-6xl text-black max-w-[500px] font-bold pb-8">
              Got Talent ? Meet Opportunity
            </h1>
            <p className="pb-8">Company reviews. Salaries. Interviews. Jobs.</p>
          </div>
          <div className="p-4 md:py-0 md:flex items-center bg-[#fff] rounded-xl md:rounded-r-full md:rounded-l-full overflow-hidden">
            <div className=" px-2">
              <InputSearch
                data={{
                  placeholder: "Jobs title or keywords",
                  inputIcon: "",
                  type: "search",
                  iconColor: "#E1E1E1",
                  iconName: "search",
                }}
              />
            </div>
            <div className="md:flex items-center ml-1 pl-2 pr-5 md:border-l-2">
              <InputSearch
                data={{
                  placeholder: "All Locations",
                  inputIcon: "",
                  type: "search",
                  iconColor: "#E1E1E1",
                  iconName: "location",
                }}
              />
              <div className="pl-2">
                <Button size="medium" text="lg" type="primary">
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-6 pl-1">
            <p className="">
              Popular Searches: BackEnd Developer Mobile Engineer
            </p>
            <div className="pt-20">
              <p className="">Trusted by leading brands and startups</p>
              <div className="flex font-bold gap-10 py-6">
                <div className="flex  gap-2">
                  <Icon color="#999" iconName="square" />
                  <span className="">Square</span>
                </div>
                <div className="flex gap-2">
                  <Icon color="#999" iconName="square" />
                  <span className="">Notion</span>
                </div>
                <div className="flex gap-2">
                  <Icon color="#999" iconName="coffee" />
                  <span className="">Github</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img className="" src={imageGirl} alt="" />
        </div>
      </div>
    </>
  );
};

export default Landing;
