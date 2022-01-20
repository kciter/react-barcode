export interface Options {
  width?: number;
  height?: number;
  format?:
    | "CODE39"
    | "CODE128"
    | "EAN13"
    | "ITF14"
    | "MSI"
    | "pharmacode"
    | "codabar"
    | "upc";
  displayValue?: boolean;
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
}

export interface BarcodeProps extends Options {
  value: string;
}

export default class Barcode extends React.Component<BarcodeProps> {}

