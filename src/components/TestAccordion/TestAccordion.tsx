"use client";
import {
  Accordion,
  AccordionItem,
  AccordionItemProps,
} from "@nextui-org/accordion";

type TestItemProps = AccordionItemProps & {
  content: string;
};

const TestItem = ({ content }: TestItemProps) => {
  return <AccordionItem title="Title">{content}</AccordionItem>;
};

const TestAccordion = () => {
  const items = [
    { id: "1", content: "Content 1" },
    { id: "2", content: "Content 2" },
    { id: "3", content: "Content 3" },
  ];

  return (
    <Accordion>
      <TestItem content="Content 1" />
    </Accordion>
  );
};

export { TestAccordion };
