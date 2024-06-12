import { atom } from "recoil";

export type AccordionMain = {
  title: String;
  content: {
    subheading: String;
    textContent: String;
  };
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
      content: {
        subheading: "Subheading",
        textContent: "Some content in section 1.",
      },
    },
    {
      title: "Section 2",
      content: {
        subheading: "Subheading",
        textContent: "Some content in section 2.",
      },
    },
    {
      title: "Section 3",
      content: {
        subheading: "Subheading",
        textContent: "Some content in section 3.",
      },
    },
  ],
});
