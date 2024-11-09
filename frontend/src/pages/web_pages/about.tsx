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
  AboutUsDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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
      name: 'Smart Task Management',
      description:
        'Organize your tasks by difficulty and urgency. ${projectName} helps you prioritize effectively, ensuring you focus on what matters most.',
      icon: 'mdiClipboardList',
    },
    {
      name: 'Personalized Reward System',
      description:
        'Stay motivated with a customizable reward system. Earn points for completing tasks and redeem them for rewards you set for yourself.',
      icon: 'mdiTrophy',
    },
    {
      name: 'Insightful Progress Tracking',
      description:
        'Track your progress with detailed statistics. See how your productivity improves over time and adjust your strategies accordingly.',
      icon: 'mdiChartBar',
    },
  ];

  const testimonials = [
    {
      text: 'Using ${projectName} has transformed the way I manage my tasks. The reward system keeps me motivated and on track. Highly recommend it!',
      company: 'Future Innovators Inc.',
      user_name: 'Alex Johnson, Project Manager',
    },
    {
      text: '${projectName} is a game-changer for students like me. It helps me stay organized and focused, reducing my procrastination significantly.',
      company: 'Bright Minds Co.',
      user_name: 'Emily Carter, Student',
    },
    {
      text: 'The progress tracking feature in ${projectName} is fantastic. It gives me insights into my productivity trends and helps me improve continuously.',
      company: 'Tech Pioneers Ltd.',
      user_name: 'Michael Lee, Data Analyst',
    },
    {
      text: "I love how ${projectName} makes task management fun with its reward system. It's a great tool for anyone looking to boost their productivity.",
      company: 'Creative Solutions Group',
      user_name: 'Sarah Kim, Creative Director',
    },
    {
      text: '${projectName} has been instrumental in helping me balance my workload. The task organization features are intuitive and easy to use.',
      company: 'Efficient Enterprises',
      user_name: 'David Brown, Operations Manager',
    },
    {
      text: 'As someone who struggles with procrastination, ${projectName} has been a lifesaver. The personalized rewards keep me motivated to complete my tasks.',
      company: 'Innovative Learning Hub',
      user_name: 'Jessica White, Educator',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Just Start It - Our Mission and Vision`}</title>
        <meta
          name='description'
          content={`Learn more about Just Start It, our mission to help students overcome procrastination, and the innovative features that make our platform unique.`}
        />
      </Head>
      <WebSiteHeader projectName={'Just Start It'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'Just Start It'}
          image={['Team brainstorming innovative ideas']}
          mainText={`Discover the Vision Behind ${projectName}`}
          subTitle={`At ${projectName}, we are committed to empowering students to overcome procrastination and achieve their academic goals. Learn more about our mission and the innovative solutions we offer.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Our Story`}
        />

        <AboutUsSection
          projectName={'Just Start It'}
          image={['Team working towards shared goals']}
          mainText={`Our Mission at ${projectName}`}
          subTitle={`${projectName} is dedicated to helping students overcome procrastination and executive dysfunction. Our team is passionate about creating tools that inspire productivity and personal growth.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Meet the Team`}
        />

        <FeaturesSection
          projectName={'Just Start It'}
          image={['Student using productivity app']}
          withBg={0}
          features={features_points}
          mainText={`Innovative Features of ${projectName}`}
          subTitle={`Explore the key features that make ${projectName} a powerful tool for students to manage tasks and boost productivity.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'Just Start It'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`What Users Say About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'Just Start It'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
