import { HTMLAttributes, ReactNode } from "react";

import { type VariantProps } from "tailwind-variants";

import { alertVariants } from "@styles/layouts/alert";

const { rootVariants, titleVariants, descriptionVariants, actionVariants } =
  alertVariants();

type AlertProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants> & {
    children: ReactNode;
  };

export function Alert({ variant, className, ...props }: AlertProps) {
  const rootClasses = rootVariants({ variant, className });

  return <div data-slot="alert" role="alert" className={rootClasses} {...props} />;
}

type AlertTitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children: string;
};

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  const titleClasses = titleVariants({ className });

  return <h5 data-slot="alert-title" className={titleClasses} {...props} />;
}

type AlertDescriptionProps = HTMLAttributes<HTMLParagraphElement> & {
  children: string;
};

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  const descriptionClasses = descriptionVariants({ className });

  return <p data-slot="alert-description" className={descriptionClasses} {...props} />;
}

type AlertActionProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function AlertAction({ className, ...props }: AlertActionProps) {
  return (
    <div data-slot="alert-action" className={actionVariants({ className })} {...props} />
  );
}
