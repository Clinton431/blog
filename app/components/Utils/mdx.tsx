import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

const CustomLink = (props) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
};

interface MdxProps {
  code: string;
}

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);
  return (
    <article className="prose w-full max-w-screen-md sm:mx-auto lg:prose-base mx-auto prose-quoteless prose-neutral">
      <Component components={{ ...components }} />
    </article>
  );
};

export default Mdx;
