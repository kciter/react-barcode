type Options = {
  width?: number;
  height?: number;
  format?:
    | "CODE39"
    | "CODE128"
    | "EAN13"
    | "ITF14"
    | "MSI"
    | "pharmacode"
    | "codabar";
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
};

type Props = Options & {
  value: string;
};

declare const ReactBarcode: React.FunctionComponent<Props>;

export default ReactBarcode;
