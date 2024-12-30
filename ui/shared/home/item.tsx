import Card from "@/ui/components/card/card";
import React from "react";

export default function HeroItem(props: {
    title: string,
    value: string
}) {
  return (
    <Card className="w-full">
      <h2 className="text-white/50 text-sm">{ props.title }</h2>
      <p className="font-semibold text-lg">{ props.value }</p>
    </Card>
  );
}
