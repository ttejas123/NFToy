import { ReactNode } from 'react';

import { Section } from '../layout/Section';

interface VerticalFeaturesProps {
  title: string;
  fullWidth?: boolean;
  children: ReactNode;
  description: string;
  className?: string;
  id?: string;
}

const VerticalFeatures = (props: VerticalFeaturesProps) => (
  <Section
    title={props.title}
    description={props.description}
    fullWidth={props.fullWidth}
    id={props.id}
    className={props.className}
  >
    {props.children}
  </Section>
);

export { VerticalFeatures };
