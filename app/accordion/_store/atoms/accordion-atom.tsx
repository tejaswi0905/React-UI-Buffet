import { atom } from "recoil";

export type AccordionMain = {
  title: String;
  content: React.ReactNode;
};

export const openIndexState = atom<number | null>({
  key: "isOpen",
  default: null,
});

export const accordionItemsArray = atom<AccordionMain[]>({
  key: "accordionItem",
  default: [
    {
      title: "Section 1",
      content: (
        <div>
          <h4>subheading</h4>
          <p>This is a paragraph inside section 1.</p>
        </div>
      ),
    },
    {
      title: "Section 2",
      content: (
        <div>
          <h4>Subheading</h4>
          <p>Some more content in section 2.</p>
        </div>
      ),
    },
    {
      title: "Section 3",
      content: (
        <div>
          <h4>Subheading</h4>
          <p>Some more content in section 3.</p>
        </div>
      ),
    },
  ],
});
