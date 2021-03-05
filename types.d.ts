declare module "react-barcode" {
    declare type Options = {
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

    declare type Props = {
      value: string;
    } & ReactBarcode.Options;

  declare const ReactBarcode: React.FunctionComponent<ReactBarcode.Props>;

  export = ReactBarcode;
}
