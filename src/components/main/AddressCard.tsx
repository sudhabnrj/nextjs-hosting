import React from "react";

interface AddressCardProps {
  icon?: React.ReactNode;
  content?: string;
  moreContent?: string;
}

export default function AddressCard({
  icon,
  content,
  moreContent,
}: AddressCardProps) {
  return (
    <div className="rounded-xl border border-[#085BDF]/20 bg-white px-8 py-9">
      {icon}
      <p className="mt-6 flex w-full flex-col font-dmSans text-xl font-medium text-secondary">
        <span>{content}</span>
        <span>{moreContent}</span>
      </p>
    </div>
  );
}
