import { BlurFade } from '@/components/magicui/blur-fade';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { BuildingIcon, CreditCardIcon, PaletteIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Container from '../layout/container';
import { HeaderSection } from '../layout/header-section';



export default function HomeProblemSection() {

  const t = useTranslations('HomePage.home-problem');

  const problems = [
    {
      title: t('items.item-1.title'),
      description: t('items.item-1.description'),
      icon: PaletteIcon,
      iconClassName: 'text-amber-500',
      cardClassName: 'hover:bg-amber-500/10 dark:hover:bg-accent',
    },
    {
      title: t('items.item-2.title'),
      description: t('items.item-2.description'),
      icon: CreditCardIcon,
      iconClassName: 'text-green-500',
      cardClassName: 'hover:bg-green-500/10 dark:hover:bg-accent',
    },
    {
      title: t('items.item-3.title'),
      description: t('items.item-3.description'),
      icon: BuildingIcon,
      iconClassName: 'text-blue-500',
      cardClassName: 'hover:bg-blue-500/10 dark:hover:bg-accent',
    },
  ];

  return (
    <section id="problem" className="px-4 py-16">
      <Container className="mx-auto">
        <HeaderSection
          title={t('title')}
          subtitle={t('description')}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-500">
          {problems.map((problem, index) => (
            <BlurFade key={problem.title} delay={0.2 + index * 0.2} inView>
              <Card
                className={cn(
                  'bg-background hover:bg-accent dark:hover:bg-accent border-none shadow-none transition-colors duration-300',
                  problem.cardClassName
                )}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <problem.icon
                        className={`w-6 h-6 ${problem.iconClassName}`}
                      />
                    </div>
                    <h3 className="font-semibold text-primary">
                      {problem.title}
                    </h3>
                  </div>
                  <p className="mt-6 text-muted-foreground">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  );
}
