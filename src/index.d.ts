import React from "react";

export interface Options {
  width?: number;
  height?: number;
  renderer?: "canvas" | "img" | "svg";
  format?:
    | "CODE39"
    | "CODE128"
    | "CODE128A"
    | "CODE128B"
    | "CODE128C"
    | "EAN13"
    | "EAN8"
    | "EAN5"
    | "EAN2"
    | "UPC"
    | "UPCE"
    | "ITF14"
    | "ITF"
    | "MSI"
    | "MSI10"
    | "MSI11"
    | "MSI1010"
    | "MSI1110"
    | "pharmacode"
    | "codabar"
    | "GenericBarcode";
  displayValue?: boolean;
  text?: string;
  fontOptions?: string;
  font?: string;
  textAlign?: string;
  textPosition?: string;
  textMargin?: number;
  fontSize?: number;
  background?: string;
  lineColor?: string;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  id?: string;
  className?: string;
  ean128?: boolean;
}

export interface BarcodeProps extends Options {
  value: string;
}

export default class Barcode extends React.Component<BarcodeProps> {
  renderElementRef: React.RefObject<HTMLCanvasElement | SVGElement | HTMLImageElement>;
}

