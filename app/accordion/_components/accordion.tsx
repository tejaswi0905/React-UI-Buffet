"use client";

import { useRecoilState, useRecoilValue } from "recoil";

import { AccordionItem } from "./accordion-item";
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
    <div>
      {items.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => {
              handleClick(index);
            }}
          />
        );
      })}
    </div>
  );
};
