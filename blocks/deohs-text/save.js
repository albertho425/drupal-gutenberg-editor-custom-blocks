import { RichText } from "@wordpress/block-editor";


function Save({ attributes }) {

  const { content, size, textColor } = attributes;

  return (
    <RichText.Content
      tagName="p"
      value={content}
      style={{ color: textColor }}
      className={size}
    />
  );

}

export default Save;
