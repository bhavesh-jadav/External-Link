import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
export declare class ExternalLinkVisualSettings extends DataViewObjectsParser {
    linkGeneralSettings: LinkGeneralSettings;
    linkImageSettings: LinkImageSettings;
    linkTitleSettings: LinkTitleSettings;
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
export declare class LinkTitleSettings {
    link: string;
    linkTitle: string;
    linkTitleColor: string;
    linkTitleHoverColor: string;
    linkHoverTitle: string;
}
export declare class LinkContentSettings {
    show: boolean;
    linkContent: string;
    linkContentColor: string;
}
export declare class LinkBottomSettings {
    show: boolean;
    linkBottomText: string;
}
