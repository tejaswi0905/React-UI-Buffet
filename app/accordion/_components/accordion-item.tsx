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
    <div className="w-1/2 gap-y-2 bg-gray-200 rounded-lg mt-1 p-2 flex flex-col">
      <div
        className="flex justify-between cursor-pointer flex-grow-0"
        onClick={onClick}
      >
        <div>{title}</div>
        <div>{isOpen ? "-" : "+"}</div>
      </div>

      <div
        className={`transition-all overflow-hidden duration-800 ease-in-out text-slate-800 text-sm ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="relative p-2 bg-gray-200">{content}</div>
      </div>
    </div>
  );
};
