import { ALL_FEATURES } from "@/config/feature";
import React from "react";
import { RoughNotation } from "react-rough-notation";

const Feature = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const FEATURES = ALL_FEATURES[`FEATURES_${langName.toUpperCase()}`];
  return (
    <section
      id={id}
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 py-6"
    >
      <h2 className="text-center text-white">
        <RoughNotation type="highlight" show={true} color="#2563EB">
          {locale.title}
        </RoughNotation>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 ">
        {FEATURES?.map((feature, index) => (
          <RoughNotation
            type="box"
            show={true}
            color="#FFFFFF"
            key={feature.title}
          >
            <div
              className={`
              flex flex-col items-center text-center px-8 py-6 
            `}
            >
              <div className="p-4 w-16 h-16 dark:text-white rounded-full flex items-center justify-center">
                {feature.icon &&
                  React.createElement(feature.icon, { className: "text-2xl" })}
              </div>

              <h2 className={"text-xl font-semibold mb-2"}>{feature.title}</h2>
              <p className="text-slate-700 dark:text-slate-400">
                {feature.content}
              </p>
            </div>
          </RoughNotation>
        ))}
      </div>
    </section>
  );
};

export default Feature;
