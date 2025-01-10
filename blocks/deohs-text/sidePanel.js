import {
  PanelBody,
  TextareaControl,
  SelectControl,
  ColorPalette
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
import { t } from "drupal";

function TextSidePanel({
  content = "",
  size = "fs-2",
  textColor = "#000000", // Default color
  onChangeText,
  onChangeSize,
  onChangeTextColor,
}) {
  // Array of colors for ColorPalette
  const colors = [
    { name: 'Black', color: '#000000' },
    { name: 'Purple', color: '#32006E' },
    { name: 'Grey', color: '#404040' },
    { name: 'White', color: '#FFF' }
  ];

  // Options for SelectControl
  const sizeOptions = [
    { label: t("Largest"), value: "fs-1" },
    { label: t("Larger"), value: "fs-2" },
    { label: t("Medium"), value: "fs-3" },
    { label: t("Small"), value: "fs-4" },
    { label: t("Smaller"), value: "fs-5" },
    { label: t("Smallest"), value: "fs-6" }
  ];

  const characterCount = content ? content.length : 0;

  return (
    <InspectorControls>
      <PanelBody title={t("Text Settings")} initialOpen>

        <label className="form-label">{t("Text Color")}</label>

        <ColorPalette
          colors={colors}
          value={textColor}
          onChange={onChangeTextColor}
        />

        <SelectControl
          label={t("Text Size")}
          value={size}
          options={sizeOptions}
          onChange={onChangeSize}
          className="full-width-select"
        />

        <TextareaControl
          label={t("Text content")}
          value={content}
          onChange={onChangeText}
          className="full-width-select"
        />
        <p class="small">{t("Character count")}: {characterCount}</p><br></br>




      </PanelBody>
    </InspectorControls>
  );
}

export default TextSidePanel;
