// components
import Question from "./Question";

const qa = [
  {
    question: "What tours are available at Sagrada Família?",
    answer:
      "At Sagrada Família, we offer a variety of different tours. We have both audio guided tours and tours that utilise an expert tour guide. Our tours are available in a variety of different languages. For people who are looking to explore the towers at Sagrada Família, we have a series of special tours. Please note, the towers are occasionally closed when construction is being undertaken or when the weather is bad. Our tours are available in a number of different languages. If your language is not covered at this moment in time, then you can book a basic tour and bring your own accredited tour guide with you.",
  },
  {
    question: "What do tickets cost?",
    answer:
      "Ticket prices vary depending on the tour that you choose. You can see a full breakdown of all of our ticket prices by clicking here.",
  },
  {
    question: "Are there any discounts at Sagrada Família?",
    answer:
      "Of course! We like to offer discounts to ensure that everyone gets the opportunity to meet us. Our current discounts can be found by clicking here.",
  },
  {
    question: "How can I purchase tickets?",
    answer:
      "On the Sagrada Família website, you can find all of our tickets and prices. Some of our tickets can be bought online. If you are coming as part of a group for a guided tour, you may need to contact us before purchasing your tickets. If you do book through another site, then we cannot be held responsible for any additional fees that you are charged.",
  },
  {
    question: "How do I use the tickets that I purchase on the website?",
    answer:
      "You can use the tickets on the website by printing them out or showing us them on your smartphone or tablet. We would always recommend printing them, just in case your device dies before your arrival.",
  },
  {
    question: "Can I cancel my tickets?",
    answer:
      "You can only cancel tickets that are purchased directly from us or our official ticket supplier. If you would like to cancel your ticket, you will need to provide us with a valid reason as to why. If you would like to see our refund policy, click here.",
  },
  {
    question: "Can I come on a different date?",
    answer:
      "If you would like to change the date on your ticket, you will have to contact us directly by emailing customer@sagradafamilia.org. We will only be able to change the date on tickets that have been purchased directly from us or our official supplier.",
  },
  {
    question: "When can I purchase my tickets?",
    answer:
      "We would always advise booking your tickets early to avoid disappointment. You can usually book tickets around two months before your visit.",
  },
  {
    question: "Can I buy tickets at the ticket office?",
    answer:
      "You can purchase tickets at the ticket office, but only for the day that you are visiting on. You will not be able to purchase an advance ticket at the ticket office. If you would like to purchase a ticket online, we would recommend using our website or the website of our official partner. If you do come on the day, then there is a chance that tickets for the day will have sold out and they will be subject to availability.",
  },
  {
    question: "Can I change my ticket?",
    answer:
      "If you have purchased a basic ticket, then you may be able to upgrade your ticket when you arrive at Sagrada Família. Please be advised that all of our audio guides and guided tours are subject to availability.",
  },
];

const Faq = () => {
  return (
    <div className="w-full my-10 p-2 sm:px-20 lg:px-32 ">
      {qa.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </div>
  );
};

export default Faq;
