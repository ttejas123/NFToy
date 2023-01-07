import { ReactNode } from 'react';

import { Section } from '../layout/Section';

interface VerticalFeaturesProps {
  title: string;
  children: ReactNode;
  description: string;
}

const VerticalFeatures = (props: VerticalFeaturesProps) => (
  <Section title={props.title} description={props.description}>
    {props.children}
  </Section>
);

export { VerticalFeatures };
