'use client';

import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { Safari } from '@/components/magicui/safari';
import { Ripple } from '@/components/magicui/ripple';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  BuildingIcon,
  CodeIcon,
  CreditCardIcon,
  PaletteIcon,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from '../layout/container';
import { HeaderSection } from '../layout/header-section';

const features = [
  {
    icon: <PaletteIcon className="size-6 text-amber-500" />,
    title: 'Ready-to-Use UI Components',
    description:
      'UI development becomes as simple as building with blocks, including Shadcn/ui, Magic UI components, and Tailark marketing blocks.',
    className: 'hover:bg-amber-500/10 transition-all duration-500 ease-out',
    content: ({ theme }: { theme: string | undefined }) => (
      <>
        <Safari
          imageSrc={`/images/home/solution/blocks${theme === 'dark' ? '-dark' : ''}.png`}
          url="https://mksaas.com"
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    icon: <CreditCardIcon className="size-6 text-green-500" />,
    title: 'Out-of-the-Box Payment System',
    description:
      'Built-in Stripe integration with subscriptions and one-time payments, all you need to do is configure your pricing table.',
    className:
      'order-3 xl:order-none hover:bg-green-500/10 transition-all duration-500 ease-out',
    content: ({ theme }: { theme: string | undefined }) => (
      <Safari
        imageSrc={`/images/home/solution/pricing${theme === 'dark' ? '-dark' : ''}.png`}
        url="https://mksaas.com"
        className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
      />
    ),
  },
  {
    icon: <BuildingIcon className="size-6 text-blue-500" />,
    title: 'Complete SaaS Features',
    description:
      'Built-in auth, i18n, blog, docs, newsletter, theming, and SEO optimization, saving you months of development time.',
    className:
      'md:row-span-2 hover:bg-blue-500/10 transition-all duration-500 ease-out',
    content: ({ theme }: { theme: string | undefined }) => (
      <>
        <FlickeringGrid
          className="z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
          squareSize={4}
          gridGap={6}
          color="#000"
          maxOpacity={0.1}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <Safari
          imageSrc={`/images/home/solution/docs${theme === 'dark' ? '-dark' : ''}.png`}
          url="https://mksaas.com"
          className="-mb-48 ml-0 mt-8 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    icon: <CodeIcon className="size-6 text-violet-500" />,
    title: 'Extensible Codebase',
    description:
      'Built with industry best practices for maintainability and scalability, and fully customizable implementations for payment, storage, newsletter, and email services.',
    className:
      'flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-violet-500/10 transition-all duration-500 ease-out',
    content: ({ theme }: { theme: string | undefined }) => (
      <>
        <Ripple className="absolute -bottom-full" />
        <Safari
          imageSrc={`/images/home/solution/dashboard${theme === 'dark' ? '-dark' : ''}.png`}
          url="https://mksaas.com"
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
];

export default function HomeSolutionSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="solution" className="px-4 py-16">
      <Container className="mx-auto">
        <HeaderSection
          title="Solution"
          subtitle="Speed up your SaaS development"
          description="MkSaaS solves all the common problems of SaaS development"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 text-gray-500 md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:auto-rows-fr xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={cn(
                'group relative items-start overflow-hidden p-6 rounded-2xl bg-background hover:bg-accent dark:hover:bg-accent',
                feature.className
              )}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
                damping: 30,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-2">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-primary">
                    {feature.title}
                  </h3>
                </div>
                <div className="mt-4 text-muted-foreground">
                  <p
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                </div>
              </div>
              {typeof feature.content === 'function'
                ? feature.content({ theme })
                : feature.content}
              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
