import { IconType } from "react-icons";
import { FiMoreHorizontal } from "react-icons/fi";
import { TbCrystalBall } from "react-icons/tb";

export const FEATURES_EN = [
  {
    title: "Daily Tarot",
    content: "Draw a tarot card to determine today's fortune.",
    icon: TbCrystalBall,
  },
  {
    title: "Tarot Spreads",
    content: "Perform targeted divination using different spreads.",
    icon: TbCrystalBall,
  },
  {
    title: "Card Interpretation",
    content: "Learn the meanings of the cards.",
    icon: TbCrystalBall,
  },
  {
    title: "Tarot Consultation",
    content: "Encountering difficulties? We're here to help!",
    icon: TbCrystalBall,
  },
  {
    title: "More Features",
    content: "Stay tuned for additional functionalities.",
    icon: FiMoreHorizontal,
  },
];

export const FEATURES_ZH = [
  {
    title: "每日塔罗",
    content: "抽取一张塔罗牌，判断今日运势",
    icon: TbCrystalBall,
  },
  {
    title: "塔罗牌阵",
    content: "通过不同牌阵，进行定向占卜",
    icon: TbCrystalBall,
  },
  {
    title: "牌意解析",
    content: "学习牌意，从此占卜不求人",
    icon: TbCrystalBall,
  },
  {
    title: "塔罗咨询",
    content: "遇到难题？我们帮您！",
    icon: TbCrystalBall,
  },
  {
    title: "更多功能",
    content: "其他功能，尽情期待",
    icon: FiMoreHorizontal,
  },
];

export const FEATURES_JA = [
  {
    title: "デイリータロット",
    content: "今日の運勢を占い、タロットくじ。",
    icon: TbCrystalBall,
  },
  {
    title: "タロットスプレッド",
    content: "異なるスプレッドを使用して、占いを行います。",
    icon: TbCrystalBall,
  },
  {
    title: "カードの解説",
    content: "カードの意味を学び、占いのスキルを習得します。",
    icon: TbCrystalBall,
  },
  {
    title: "タロット相談",
    content: "相談したいことがありますか？お手伝いします！",
    icon: TbCrystalBall,
  },
  {
    title: "その他の機能",
    content: "追加機能をお楽しみに。",
    icon: FiMoreHorizontal,
  },
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    content: string;
    icon: IconType;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
  FEATURES_ZH,
  FEATURES_JA,
};
