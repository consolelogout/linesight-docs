import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { XEmbedClient } from "./content/components/XEmbedClient";
import Note from './content/components/Note';
import Warning from "./content/components/Warning";
import Tip from "./content/components/Tips"


export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    XEmbed: XEmbedClient,
    ...components,
    Note,
    Warning,
    Tip,
  };
}