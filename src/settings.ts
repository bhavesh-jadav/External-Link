/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
import powerbi from "powerbi-visuals-api";

export class ExternalLinkVisualSettings extends DataViewObjectsParser {
    public linkGeneralSettings: LinkGeneralSettings = new LinkGeneralSettings();
    public linkImageSettings: LinkImageSettings = new LinkImageSettings();
    public linkTitleSettings: LinkTitleSettings = new LinkTitleSettings();
    public linkContentSettings: LinkContentSettings = new LinkContentSettings();
    public linkBottomSettings: LinkBottomSettings = new LinkBottomSettings();
}

export class LinkGeneralSettings {
    public borderColor: string = "#F2F2F2";
    public borderHoverColor: string = "black";
    public backgroundColor: string = null;
    // public enableAnimation: boolean = false;
    // public animationDuration: number = 100;
}

export class LinkImageSettings {
    public show: boolean = false;
    public imageURL: string = "https://www.w3schools.com/w3css/img_lights.jpg";
}

export class LinkTitleSettings {
    public link: string = "";
    public linkTitle: string = "";
    public linkTitleColor: string = "black";
    public linkTitleHoverColor: string = "blue";
    public linkHoverTitle: string = "";
}

export class LinkContentSettings {
    public show: boolean = false;
    public linkContent: string = "";
    public linkContentColor: string = "black";
}

export class LinkBottomSettings {
    public show: boolean = true;
    public linkBottomText = "Go to Report";
}

