"use client";
export type AccordionItemProps = {
  title: String;
  content: React.ReactNode;
  isOpen: Boolean;
  onClick: () => void;
};

export const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  return (
    <div>
      <div onClick={onClick}>{title}</div>
      {isOpen && <div>{content}</div>}
    </div>
  );
};
