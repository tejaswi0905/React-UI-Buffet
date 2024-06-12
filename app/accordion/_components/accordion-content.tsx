interface AccordionContentProps {
  subHeading: String;
  textContent: String;
}

export const AccordionContent = ({
  subHeading,
  textContent,
}: AccordionContentProps) => {
  return (
    <div className="flex  flex-col justify-center gap-y-1 p-4 border">
      <h4>{subHeading}</h4>
      <p>{textContent}</p>
    </div>
  );
};
