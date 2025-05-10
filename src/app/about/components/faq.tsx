import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
  faq: { question: string; answer: string }[];
}

function FAQ({ faq }: FAQProps) {
  return (
    <div className="my-20 mx-4">
      <h3 className="text-4xl font-semibold mb-4">Common Questions</h3>
      <Accordion type="single" collapsible className="">
        {faq.map((item, index) => {
          return (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-xl">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default FAQ;
