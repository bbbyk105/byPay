import { XCircle } from "lucide-react";
import { ReactElement } from "react";

interface Problems {
  title: string;
  description: string;
  icon: ReactElement;
}

export const problems: Problems[] = [
  {
    title: "現金決済で売上管理が大変...",
    description:
      "手作業での現金管理は時間がかかり、ミスのリスクも高くなりがち。確認作業に追われて接客に集中できない。",
    icon: <XCircle className="w-12 h-12" />,
  },
  {
    title: "レジを導入するほどの予算がない",
    description:
      "高額な初期費用と月額料金が必要なレジシステム。イベント出店では採算が合わない。",
    icon: <XCircle className="w-12 h-12" />,
  },
  {
    title: "決済手段が限られている",
    description:
      "現金しか受け付けられず、お客様の支払い手段が限定的。売上機会を逃してしまうことも。",
    icon: <XCircle className="w-12 h-12" />,
  },
];
