import { Accordion } from "./_components/accordion";

const AccordionPage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-400 to-blue-400 flex items-center">
      <div className="p-4 w-full">
        <Accordion />
      </div>
    </div>
  );
};

export default AccordionPage;
