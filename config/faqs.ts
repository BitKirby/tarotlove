export const FAQS_EN = [
  {
    title: "What is a Tarot of Love?",
    content: "An online platform for tarot reading.",
  },
  {
    title: "Is Tarot of Love free?",
    content: "The basic features such as Daily Tarot is free",
  },
  {
    title: "What should I do if I encounter problems?",
    content:
      "If you encounter any issues, please send mail to TarotLove1024@outlook.com.",
  },
];

export const FAQS_ZH = [
  {
    title: "塔罗之恋是什么？",
    content: "塔罗之恋是一个包含塔罗星座等元素的在线占卜平台。",
  },
  {
    title: "塔罗之恋是免费的吗？",
    content: "每日塔罗等基础功能免费，咨询等进阶功能需要付费解锁",
  },
  {
    title: "如果我在使用时遇到问题该怎么办？",
    content:
      "如果您在使用中遇到任何问题或者有好的提议，请通过发送邮件到TarotLove1024@outlook.com。",
  },
];

export const FAQS_JA = [
  {
    title: "タロットの恋とは何ですか？",
    content: "タロットでオンライン占いプラットフォーム",
  },
  {
    title: "タロットの恋が無料で利用できますか？",
    content: "基礎機能が無料でコンサルなど有料の機能もあります",
  },
  {
    title: "使用中に問題に遭遇した場合、どうすればよいですか？",
    content:
      "問題が発生した場合は、TarotLove1024@outlook.comでお問い合わせください。",
  },
];

interface FAQSCollection {
  [key: `FAQS_${string}`]: {
    title: string;
    content: string;
  }[];
}
export const ALL_FAQS: FAQSCollection = {
  FAQS_EN,
  FAQS_ZH,
  FAQS_JA,
};
