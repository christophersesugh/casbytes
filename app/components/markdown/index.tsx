import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
// import remarkHeadingId from "remark-heading-id";
import remarkMath from "remark-math";
// import codeTitle from "remark-code-title";
import rehypeRaw from "rehype-raw";
import {
  B,
  BlockQuote,
  CodeBlock,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Img,
  MdLink,
  OL,
  P,
  Strong,
  UL,
} from "./markdown-components";

export function Markdown({ source }: { source: string }) {
  return (
    <div className="markdown">
      <ReactMarkdown
        children={source}
        remarkPlugins={[remarkGfm, remarkEmoji, remarkMath]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          h5: H5,
          h6: H6,
          p: P,
          ul: UL,
          ol: OL,
          b: B,
          strong: Strong,
          a: MdLink,
          img: Img,
          code: CodeBlock,
          blockquote: BlockQuote,
        }}
      />
    </div>
  );
}
