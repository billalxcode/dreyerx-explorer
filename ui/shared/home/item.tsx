import Card from "@/ui/components/card/card";
import SkeletonText from "@/ui/components/skeleton/text";
import React from "react";

export default function HeroItem(props: {
    title: string,
    value: string,
    isLoading?: boolean
}) {
  return (
    <Card className="w-full">
      <h2 className="text-white/50 text-sm">{ props.title }</h2>
      {
        props.isLoading? (
          <SkeletonText />
        ) : (
          <p className="font-semibold text-lg">{ props.value }</p>
        )
      }
    </Card>
  );
}
