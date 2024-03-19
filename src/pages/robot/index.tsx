import { ProCard } from "@ant-design/pro-components";
import { useState } from "react";

export default function IndexPage() {
  const [tab, setTab] = useState("tab1");

  return (
    <ProCard
      tabs={{
        activeKey: tab,
        items: [
          {
            label: `产品一`,
            key: "tab1",
            children: `内容一`,
          },
          {
            label: `产品二`,
            key: "tab2",
            children: `内容二`,
          },
          {
            label: `产品三`,
            key: "tab3",
            children: `内容三`,
          },
        ],
        onChange: (key) => {
          setTab(key);
        },
      }}
    />
  );
}
