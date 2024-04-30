"use client";
import { LineText } from "@/components/LineText";
import CTAButton from "@/components/home/CTAButton";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

const Hero = ({
  locale,
  CTALocale,
  SocialLocale,
}: {
  locale: any;
  CTALocale: any;
  SocialLocale: any;
}) => {
  const { theme } = useTheme();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: "tween", // tween spring
            // damping: 10, // if spring
            // stiffness: 50, // if spring
            // restDelta: 0.001, // if spring
          },
        }}
      >
        {/* TODO */}
        <section className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-24 text-center">
          {/* 图片内容 */}
          <div>
            <div className="w-72 h-96 relative" style={{ maxWidth: "75%" }}>
              {/* 根据当前主题决定图片显示顺序 */}
              {theme === "light" ? (
                <>
                  {/* 第一张牌 - Moon */}
                  <Image
                    className="transform -rotate-12 absolute right-4"
                    style={{ maxWidth: "100%" }}
                    height={180}
                    width={300}
                    src="/images/CardMoon.png"
                    alt="Tarot Card 2"
                  />
                  {/* 第二张牌 - Sun */}
                  <Image
                    className="transform absolute left-12"
                    style={{ maxWidth: "100%" }}
                    height={180}
                    width={300}
                    src="/images/CardSun.png"
                    alt="Tarot Card 1"
                  />
                </>
              ) : (
                <>
                  {/* 第一张牌 - Sun */}
                  <Image
                    className="transform -rotate-12 absolute right-4"
                    style={{ maxWidth: "100%" }}
                    height={180}
                    width={300}
                    src="/images/CardSun.png"
                    alt="Tarot Card 1"
                  />
                  {/* 第二张牌 - Moon */}
                  <Image
                    className="transform absolute left-12"
                    style={{ maxWidth: "100%" }}
                    height={180}
                    width={300}
                    src="/images/CardMoon.png"
                    alt="Tarot Card 2"
                  />
                </>
              )}
            </div>
          </div>

          {/* 文本内容 */}
          <div className="max-w-2xl text-center flex-grow items-center justify-center">
            <h1>
              {locale.title1} <LineText>{locale.title2}</LineText>{" "}
              {locale.title3}
            </h1>
            <p className="mt-6 text-2xl tracking-tight text-slate-700 dark:text-slate-400">
              {/* {siteConfig.description} */}
              {locale.description}
            </p>
            <CTAButton locale={CTALocale}></CTAButton>
          </div>
        </section>

        {/* TODO */}
        <style jsx>{`
          @media (max-width: 499px) {
            /* 当屏幕宽度小于500px时，图片和文本垂直排列 */
            .flex {
              flex-direction: column;
              align-items: center;
            }
          }
        `}</style>
      </motion.div>
    </>
  );
};

export default Hero;
