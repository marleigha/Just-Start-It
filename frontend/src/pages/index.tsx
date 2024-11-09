import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../stores/hooks';
import LayoutGuest from '../layouts/Guest';
import WebSiteHeader from '../components/WebPageComponents/Header';
import WebSiteFooter from '../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  AboutUsDesigns,
  FaqDesigns,
} from '../components/WebPageComponents/designs';

import HeroSection from '../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../components/WebPageComponents/AboutUsComponent';

import FaqSection from '../components/WebPageComponents/FaqComponent';

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

  const features_points = [
    {
      name: 'Task Organization',
      description:
        'Easily organize tasks by difficulty and urgency. Assign deadlines and let ${projectName} help you prioritize effectively.',
      icon: 'mdiCalendarCheck',
    },
    {
      name: 'Reward System',
      description:
        'Motivate yourself with a customizable reward system. Earn points for completing tasks and redeem them for personal rewards.',
      icon: 'mdiGift',
    },
    {
      name: 'Progress Tracking',
      description:
        'Track your progress over time with insightful statistics. See how your habits improve and stay motivated.',
      icon: 'mdiChartLine',
    },
  ];

  const faqs = [
    {
      question: 'How does the reward system work?',
      answer:
        'The reward system allows you to earn points for completing tasks. You can set personal rewards and redeem points to achieve them, motivating you to stay productive.',
    },
    {
      question: 'Can I track my progress over time?',
      answer:
        'Yes, ${projectName} provides insightful statistics to help you track your progress. You can see trends in your productivity and how your habits have improved over time.',
    },
    {
      question: 'Is my data private and secure?',
      answer:
        'Absolutely. Your data is siloed to your account, ensuring privacy and security. Only you can access your information, and we do not share it with third parties.',
    },
    {
      question: 'Can I customize task difficulty and urgency?',
      answer:
        'Yes, you can organize tasks by difficulty levels (easy, medium, hard) and assign urgency based on deadlines. This helps prioritize tasks effectively.',
    },
    {
      question: 'Is there a cost to use ${projectName}?',
      answer:
        'Currently, ${projectName} is free to use for students. We aim to provide a valuable tool to help you manage tasks and improve productivity without any cost.',
    },
    {
      question: 'Does ${projectName} support multiple users?',
      answer:
        'Each user has their own private account, and data is not shared between users. This ensures a personalized experience tailored to individual needs.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Just Start It - Empowering Students to Overcome Procrastination`}</title>
        <meta
          name='description'
          content={`Discover Just Start It, the innovative platform designed to help students manage tasks, overcome procrastination, and achieve their goals with a rewarding system.`}
        />
      </Head>
      <WebSiteHeader projectName={'Just Start It'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'Just Start It'}
          image={['Student organizing tasks efficiently']}
          mainText={`Conquer Procrastination with ${projectName}`}
          subTitle={`${projectName} helps students manage tasks, overcome procrastination, and achieve their goals with a rewarding system. Start organizing your assignments today!`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'Just Start It'}
          image={['Student using task manager']}
          withBg={0}
          features={features_points}
          mainText={`Explore ${projectName} Features`}
          subTitle={`Discover how ${projectName} empowers students to manage tasks, earn rewards, and track progress effectively.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'Just Start It'}
          image={['Team collaborating on project']}
          mainText={`Empowering Students with ${projectName}`}
          subTitle={`${projectName} is dedicated to helping students overcome procrastination and executive dysfunction. Our innovative platform combines task management with a rewarding system to boost productivity and motivation.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More`}
        />

        <FaqSection
          projectName={'Just Start It'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions about ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'Just Start It'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
