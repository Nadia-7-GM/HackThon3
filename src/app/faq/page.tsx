'use client'

import { useState } from 'react'

export default function FAQSection() {
  const faqs = [
    {
      question: "What types of chairs do you offer?",
      answer: "We offer a comprehensive range of chairs including ergonomic office chairs, luxury dining chairs, comfortable recliners, and stylish accent chairs. Each category features multiple designs and price points to suit different needs and preferences."
    },
    {
      question: "How can we get in touch with you?",
      answer: "You can contact us through multiple channels: call us at (800) 123-4567, email us at support@chairs.com, or use the contact form on our website. Our customer service team is available Monday through Friday, 9 AM to 6 PM EST."
    },
    {
      question: "Do your chairs come with a warranty?",
      answer: "Yes, all our chairs come with a comprehensive warranty. Standard chairs include a 2-year warranty covering manufacturing defects, while premium models come with an extended 5-year warranty. We also offer additional warranty options for extra protection."
    },
    {
      question: "What will be delivered? And When?",
      answer: "Your delivery will include your selected chair(s), all necessary assembly components, and detailed assembly instructions. Standard delivery takes 3-5 business days, while express shipping options are available for faster delivery within 1-2 business days."
    },
    {
      question: "Can I try a chair before purchasing?",
      answer: "Yes, we offer a 30-day trial period for all our chairs. You can test the chair in your home or office, and if you're not completely satisfied, we'll arrange a free return pickup. Some restrictions apply to customized orders."
    },
    {
      question: "How do I clean and maintain my Comforty chair?",
      answer: "Regular maintenance includes dusting with a soft cloth, vacuuming fabric surfaces, and checking all fasteners periodically. For deeper cleaning, use appropriate cleaners based on your chair's material. We provide detailed care instructions with each purchase."
    }
  ]

  return (
    <div className='bg-white'>
    <div className="w-full max-w-6xl mx-auto px-8 py-12">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-semibold text-[#333333] mb-4">Questions Looks Here</h2>
        <p className="text-[#4F4F4F] max-w-4xl mx-auto">
          Find answers to common questions about our premium chair collection, delivery services, and customer support.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 ">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#F7F7F7] rounded-md overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className=" font-bold text-gray-900">{question}</span>
        <span className="ml-4 flex-shrink-0 text-gray-400">
          {isOpen ? (
            <MinusIcon className="h-5 w-5" />
          ) : (
            <PlusIcon className="h-5 w-5" />
          )}
        </span>
      </button>
      <div className={`px-6 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  )
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  )
}

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 12H4"
      />
    </svg>
  )
}

