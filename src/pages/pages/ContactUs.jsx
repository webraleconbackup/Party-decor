import React from 'react'
import ServiceBanner from '../../components/ServiceBanner'
import BookingSection from '../../components/BookingSection'
import Packages from '../../components/Packages'

const ContactUs = () => {
  return (
    <div>
      <ServiceBanner
        title='Contact Us'
        subtitle='Have questions or want to book our services? Get in touch with us!'
      />
      <BookingSection />
      <Packages />
    </div>
  )
}

export default ContactUs
