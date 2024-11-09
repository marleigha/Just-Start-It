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
  FaqDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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
      question: 'What is the main purpose of ${projectName}?',
      answer:
        '${projectName} is designed to help students manage tasks, overcome procrastination, and improve productivity through a rewarding system and insightful progress tracking.',
    },
    {
      question: 'How do I earn rewards in ${projectName}?',
      answer:
        'You earn points by completing tasks. These points can be redeemed for personal rewards that you set, motivating you to stay productive.',
    },
    {
      question: 'Can I use ${projectName} on multiple devices?',
      answer:
        'Yes, ${projectName} is accessible from any device with an internet connection. Simply log in to your account to access your tasks and progress.',
    },
    {
      question: 'Is there a cost associated with using ${projectName}?',
      answer:
        'Currently, ${projectName} is free for students. We aim to provide a valuable tool without any cost to help you manage tasks effectively.',
    },
    {
      question: 'How secure is my data on ${projectName}?',
      answer:
        'Your data is private and secure. Each user has their own account, and information is not shared with others, ensuring your privacy.',
    },
    {
      question: 'Can I track my productivity over time?',
      answer:
        'Yes, ${projectName} offers detailed statistics to help you track your productivity trends and see how your habits improve over time.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our features, account setup, and how to get the most out of our platform.`}
        />
      </Head>
      <WebSiteHeader projectName={'Just Start It'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'Just Start It'}
          image={['Person reading FAQ document']}
          mainText={`Your Questions Answered at ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. Get the information you need to maximize your experience.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'Just Start It'}
          design={FaqDesigns.TWO_COLUMN || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Just Start It'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person writing an email']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Have more questions or need assistance? Contact us anytime, and our team will respond promptly to help you with your inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'Just Start It'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
