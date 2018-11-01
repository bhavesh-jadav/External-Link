import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
export declare class ExternalLinkVisualSettings extends DataViewObjectsParser {
    linkGeneralSettings: LinkGeneralSettings;
    linkImageSettings: LinkImageSettings;
    linkContentSettings: LinkContentSettings;
    linkBottomSettings: LinkBottomSettings;
}
export declare class LinkGeneralSettings {
    borderColor: string;
    borderHoverColor: string;
}
export declare class LinkImageSettings {
    show: boolean;
    imageURL: string;
}
export declare class LinkContentSettings {
    link: string;
    linkTitle: string;
    linkHoverTitle: string;
    showLinkContent: boolean;
    linkContent: string;
}
export declare class LinkBottomSettings {
    show: boolean;
    linkBottomText: string;
}
