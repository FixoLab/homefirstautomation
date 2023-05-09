import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="faq-item">
      <div
        className={`faq-item-question ${isExpanded && "faq-active"}`}
        onClick={toggleExpansion}
      >
        {question}
      </div>
      {isExpanded && (
        <div
          className="faq-item-answer"
          dangerouslySetInnerHTML={{
            __html: answer,
          }}
        />
      )}
    </div>
  );
};

const Faq = ({ faqs }) => {
  return (
    <div className="faq">
      {faqs.map((faq) => (
        <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Faq;
