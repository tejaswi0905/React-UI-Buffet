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
    <div className="w-1/2 gap-y-2 bg-gray-200 rounded-lg mt-1 p-2">
      <div className="flex justify-between cursor-pointer" onClick={onClick}>
        <div>{title}</div>
        <div>+</div>
      </div>
      {isOpen && (
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-800 text-sm ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[1fr] opacity-0"
          }`}
        >
          {content}
        </div>
      )}
    </div>
  );
};
