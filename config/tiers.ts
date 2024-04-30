import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/pricing";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Basic Features",
    price: "Limited Time Free!",
    href: siteConfig.openSourceURL || "#",
    description: "Unlock basic features like card draws.",
    features: ["Free", "Daily Tarot", "Tarot Spreads", "Card Interpretation"],
    buttonText: "Get Started",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Customization Features",
    href: siteConfig.authors[0].twitter || "#",
    description: "Consult with a tarot master.",
    price: "$10+",
    features: [
      "Tarot Consultation",
      "1-on-1 Service",
      "More Detailed Card Interpretation",
      "Unlock More Cards",
      "Unlock More Spreads",
      "More Features Coming Soon",
    ],
    buttonText: "Contact us",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "基本功能",
    price: "限时免费!",
    href: siteConfig.openSourceURL || "#",
    description: "解锁每日抽卡等基本功能。",
    features: ["免费", "每日塔罗", "塔罗牌阵", "牌意解析"],
    buttonText: "开始",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "定制功能",
    href: siteConfig.authors[0].twitter || "#",
    description: "寻找一对一的塔罗师",
    price: "CN¥ 68+",
    features: [
      "塔罗咨询",
      "一对一服务",
      "更详细的牌意解析",
      "解锁更多牌面",
      "解锁更多牌阵",
      "后续更多功能",
    ],
    buttonText: "联系我们",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_JA: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "基本機能",
    price: "期間限定無料!",
    href: siteConfig.openSourceURL || "#",
    description: "カードくじなどの基本機能をアンロック。",
    features: [
      "無料",
      "デイリータロット",
      "タロットスプレッド",
      "カードの解説",
    ],
    buttonText: "開始",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "カスタマイズ機能",
    href: siteConfig.authors[0].twitter || "#",
    description: "タロットマスターと相談する",
    price: "JP¥ 1500+",
    features: [
      "タロット相談",
      "1対1のサービス",
      "より詳細なカード解説",
      "より多くのカードをアンロック",
      "より多くのスプレッドをアンロック",
      "今後のもっと機能を追加する予定",
    ],
    buttonText: "お問い合わせ",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
  TIERS_JA,
};
