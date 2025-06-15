import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { XEmbedClient } from "./content/components/XEmbedClient";
import Note from './content/components/Note';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    XEmbed: XEmbedClient,
    ...components,
    Note,
  };
}