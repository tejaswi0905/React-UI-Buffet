"use client";

import { useRecoilState, useRecoilValue } from "recoil";

import { AccordionItem } from "./accordion-item";
import { AccordionContent } from "./accordion-content";
import {
  openIndexState,
  accordionItemsArray,
} from "../_store/atoms/accordion-atom";

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useRecoilState(openIndexState);
  const items = useRecoilValue(accordionItemsArray);

  const handleClick = (index: number) => {
    setOpenIndex((openIndex) => {
      return openIndex === index ? null : index;
    });
  };

  return (
    <div className="p-4">
      {items.map((item, index) => {
        const content = (
          <AccordionContent
            subHeading={item.content.subheading}
            textContent={item.content.textContent}
          />
        );
        return (
          <div key={index} className="flex justify-center">
            <AccordionItem
              title={item.title}
              content={content}
              isOpen={openIndex === index}
              onClick={() => {
                handleClick(index);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
