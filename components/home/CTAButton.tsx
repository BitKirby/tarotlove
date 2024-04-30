import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PiShootingStar } from "react-icons/pi";

const CTAButton = ({ locale }: { locale: any }) => {
  const buttonStyle = {
    backgroundColor: "#3B82F6", // 设置背景颜色为蓝色
    color: "white", // 设置文字颜色为白色
    display: "flex", // 设置为 flex 布局
    alignItems: "center", // 垂直居中
    gap: "0.5rem", // 设置元素之间的间距为 0.5rem
    padding: "0.5rem 1rem", // 设置内边距
    borderRadius: "0.25rem", // 设置圆角
    cursor: "pointer", // 设置鼠标样式为手型
    transition: "background-color 0.2s", // 添加过渡效果
  };

  return (
    <Link
      //TODO
      href="#"
      target="_blank"
      className="flex justify-center mt-16"
      rel="noopener noreferrer nofollow"
    >
      <Button
        variant="default"
        style={buttonStyle} // 使用内联样式
        aria-label="Get Boilerplate"
      >
        <PiShootingStar />
        {locale.title}
      </Button>
    </Link>
  );
};

export default CTAButton;
