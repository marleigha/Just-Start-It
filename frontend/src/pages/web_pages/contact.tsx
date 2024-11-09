import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'Just Start It';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const faqs = [
    {
      question: 'How do I create an account?',
      answer:
        "To create an account, click on the 'Sign Up' button on the homepage. Fill in your details and follow the instructions to set up your profile.",
    },
    {
      question: 'Can I customize my task categories?',
      answer:
        'Yes, you can customize task categories by difficulty and urgency. This helps you prioritize tasks effectively and manage your workload better.',
    },
    {
      question: 'What if I forget my password?',
      answer:
        "If you forget your password, click on 'Forgot Password' on the login page. Follow the instructions to reset your password via email.",
    },
    {
      question: 'Is there a mobile app for ${projectName}?',
      answer:
        'Currently, ${projectName} is available as a web application. We are working on a mobile app to enhance accessibility and convenience.',
    },
    {
      question: 'How can I provide feedback?',
      answer:
        'We value your feedback! You can use the contact form on this page to send us your thoughts, suggestions, or any issues you encounter.',
    },
    {
      question: 'Are there any tutorials available?',
      answer:
        'Yes, we offer tutorials and guides to help you get started with ${projectName}. Visit our Help Center for more information.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Us - Get in Touch with Just Start It`}</title>
        <meta
          name='description'
          content={`Reach out to the Just Start It team for any inquiries, support, or feedback. We're here to help you make the most of our platform.`}
        />
      </Head>
      <WebSiteHeader projectName={'Just Start It'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'Just Start It'}
          image={['Customer support team assisting']}
          mainText={`Connect with the ${projectName} Team`}
          subTitle={`Have questions or need assistance? The ${projectName} team is here to help. Reach out to us for support, feedback, or any inquiries you may have.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Contact Us`}
        />

        <FaqSection
          projectName={'Just Start It'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Just Start It'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on laptop']}
          mainText={`Reach Out to ${projectName} `}
          subTitle={`We're here to assist you with any questions or feedback. Fill out the form below, and our team will respond promptly.`}
        />
      </main>
      <WebSiteFooter projectName={'Just Start It'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
