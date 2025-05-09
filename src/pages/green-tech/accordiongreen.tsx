import { useState, FC } from "react";
import "./accordion.css"; // le fichier CSS garde le même nom

type AccordionItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem: FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div className="green-accordion-item">
      <div className="green-accordion-header" onClick={onClick}>
        <span>{title}</span>
        <span className={`green-chevron ${isOpen ? "green-rotated" : ""}`}>
          ▼
        </span>
      </div>
      <div className={`green-accordion-content ${isOpen ? "green-open" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

type AccordionGroupProps = {
  items: {
    title: string;
    content: string;
  }[];
};

const AccordionGroup: FC<AccordionGroupProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="green-accordion-group">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;
