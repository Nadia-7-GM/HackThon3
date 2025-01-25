'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    const whatsappNumber = '923060484798' // Pakistan country code (92) + your number
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`

    window.open(whatsappUrl, '_blank')
    setIsSubmitting(false)
  }

  return (
    <div className='bg-white'>
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 md:px-8 lg:px-[180px]">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Get In Touch With Us</h2>
          <p className="mt-4 text-base sm:text-lg text-[#9F9F9F]">
            For More Information About Our Products & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8 lg:px-40">
          {/* Contact Information */}
          <div className="space-y-8">
            <ContactInfoItem
              icon="/icon1.png"
              title="Address"
              content="236 5th SE Avenue, New York NY10000, United States"
            />
            <ContactInfoItem
              icon="/icon2.png"
              title="Phone"
              content={<>Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</>}
            />
            <ContactInfoItem
              icon="/icon3.png"
              title="Working Time"
              content={<>Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</>}
            />
          </div>

          {/* Contact Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <FormField label="Your name" name="name" placeholder="Abc" />
            <FormField label="Email Address" name="email" type="email" placeholder="Abc@def.com" />
            <FormField label="Subject" name="subject" placeholder="This is an optional" />
            <FormField label="Message" name="message" isTextarea placeholder="Hi! I'd like to ask about" />
            <div>
              <button
                type="submit"
                className="w-full sm:w-[170px] px-2 py-3 text-white bg-[#029FAE] rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 bg-[#F4F4F4] p-6 sm:p-8 md:p-12 lg:p-[100px] rounded-lg">
          <FeatureItem
            icon="/icon4.png"
            title="High Quality"
            description="Crafted from top materials"
          />
          <FeatureItem
            icon="/icon5.png"
            title="Warranty Protection"
            description="Over 2 years"
          />
          <FeatureItem
            icon="/icon6.png"
            title="24 / 7 Support"
            description="Dedicated support"
          />
        </div>
      </div>
    </div>
  )
}

function ContactInfoItem({ icon, title, content }: { icon: string; title: string; content: React.ReactNode }) {
  return (
    <div className="flex items-start space-x-6">
      <div className="mt-1">
        <Image src={icon} alt={`${title} Icon`} width={24} height={24} className="w-6 h-6 text-gray-600" />
      </div>
      <div>
        <h3 className="text-xl font-medium text-black">{title}</h3>
        <p className="mt-2 font-light text-base text-black">{content}</p>
      </div>
    </div>
  )
}

function FormField({ label, name, type = "text", placeholder, isTextarea = false }: { label: string; name: string; type?: string; placeholder: string; isTextarea?: boolean }) {
  return (
    <div>
      <div className='text-black text-sm font-semibold mb-4'>{label}</div>
      {isTextarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          rows={4}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      )}
    </div>
  )
}

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <Image src={icon} alt={`${title} Icon`} width={48} height={48} className="w-12 h-12 text-black" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}

