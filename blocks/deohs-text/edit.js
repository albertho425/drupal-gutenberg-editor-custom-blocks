import { useBlockProps, BlockControls, RichText } from "@wordpress/block-editor";
import { ToolbarGroup, Button as WPButton } from "@wordpress/components";
import { createBlock } from '@wordpress/blocks';
import { useCallback } from '@wordpress/element';
import { __ } from "@wordpress/i18n"; // Use WordPress i18n for localization


import TextSidePanel from "./sidePanel";
import { t } from "drupal";

const Edit = ({ attributes, setAttributes, onReplace, mergeBlocks }) => {
  const { content, size, textColor } = attributes;


  const onChangeText = useCallback((value) => {
    const sanitizedText = value;
    setAttributes({ content: sanitizedText });
  }, [setAttributes]);


  const onChangeTextColor = (color) => setAttributes({ textColor: color });
  const onChangeSize = (newSize) => setAttributes({ size: newSize });


  return (
    <div {...useBlockProps()}>
      <BlockControls>
        <ToolbarGroup>
          <WPButton
            label={t("Text Settings")}
            icon="text"
            disabled
          />
        </ToolbarGroup>
      </BlockControls>

      <RichText
        tagName="p"
        value={content}
        placeholder={__("Text block placeholder text")}
        onChange={onChangeText}
        onSplit={(before, after) => {
          console.log("onSplit triggered");
          console.log("Raw Before Content:", before);
          console.log("Raw After Content:", after);

          if (onReplace) {
            console.log("onReplace is available");

            const newBlock = createBlock('deohs-gutenberg-blocks/deohs-text',
              { content: after,
                size: attributes.size,
                textColor: attributes.textColor,
               });
            console.log("Creating new block with content:", after);

            setAttributes({ content: before });
            console.log("Updating current block with content:", before);

            onReplace([
              createBlock('deohs-gutenberg-blocks/deohs-text',
                { content: before,
                  size: attributes.size,
                  textColor: attributes.textColor,
                 }),
              newBlock,
            ]);
            console.log("Blocks replaced with:");
            console.log("Block 1 Content:", before);
            console.log("Block 2 Content:", after);
          }
          else {
            console.warn("onReplace is not available");

          }
        }}
        onMerge={mergeBlocks}
        onReplace={onReplace}
        style={{ color: textColor }}
        className={size}
      />



      <TextSidePanel
        content={content}
        size={size}
        textColor={textColor}
        onChangeText={onChangeText}
        onChangeTextColor={onChangeTextColor}
        onChangeSize={onChangeSize}

      />
    </div>
  );
}

export default Edit;
