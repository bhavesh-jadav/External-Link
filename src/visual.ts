/*
*  Power BI Visual CLI
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
import powerbi from "powerbi-visuals-api";
import { select, Selection, BaseType } from 'd3-selection';
import { stringExtensions as StringExtensions } from 'powerbi-visuals-utils-formattingutils';
import "d3-transition";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import DataView = powerbi.DataView;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;

import { ExternalLinkVisualSettings } from "./settings";
export class ExternalLinkVisual implements IVisual {
    private target: HTMLElement;
    private host: IVisualHost;
    private linkVisualSettings: ExternalLinkVisualSettings;

    private rootElement: Selection<BaseType, any, any, any>;
    private topContentElement: Selection<BaseType, any, any, any>;
    private middleContentElement: Selection<BaseType, any, any, any>;
    private bottomContentElement: Selection<BaseType, any, any, any>;

    constructor(options: VisualConstructorOptions) {
        this.target = options.element;
        this.host = options.host;
    }

    public update(options: VisualUpdateOptions) {
        this.linkVisualSettings = ExternalLinkVisual.parseSettings(options && options.dataViews && options.dataViews[0]);

        let linkGeneralSettings = this.linkVisualSettings.linkGeneralSettings;
        let linkImageSettings = this.linkVisualSettings.linkImageSettings;
        let linkTitleSettings = this.linkVisualSettings.linkTitleSettings;
        let linkContentSettings = this.linkVisualSettings.linkContentSettings;
        let linkBottomSettings = this.linkVisualSettings.linkBottomSettings;
        let linkHoverTitle = "";

        try {
            if (this.rootElement) {
                this.rootElement.remove();
            }

            if (StringExtensions.isNullOrUndefinedOrWhiteSpaceString(linkTitleSettings.linkHoverTitle)) {
                if (StringExtensions.isNullOrUndefinedOrWhiteSpaceString(linkTitleSettings.link)) {
                    linkHoverTitle = "Click here to go to nowhere";
                } else {
                    linkHoverTitle = "Click here to go to " + linkTitleSettings.link;
                }
            } else {
                linkHoverTitle = linkTitleSettings.linkHoverTitle;
            }

            this.rootElement = select(this.target).append("div")
                .classed("rootElement", true)
                .attr("title", linkHoverTitle)
                .style("height", "100%")
                .style("width", "100%")
                .style("border", linkGeneralSettings.borderColor)
                .style("border-style", "solid")
                .style("border-width", "3px")
                .style("box-sizing", "border-box")
                .style("background-color", linkGeneralSettings.backgroundColor);

            if (linkImageSettings.show) {
                this.topContentElement = this.rootElement.append("img")
                    .attr("src", linkImageSettings.imageURL)
                    .style("width", "100%");
            }

            this.middleContentElement = this.rootElement.append("div")
                .style("padding", "20px")
                .style("margin", 0)
                .style("max-width", "100%")
                .style("left", "0px");

            this.middleContentElement.append("h2")
                .attr("id", "linkTitle")
                .style("color", linkTitleSettings.linkTitleColor)
                .style("text-align", linkTitleSettings.linkTitleAlignment)
                .style("margin", 0)
                .text(linkTitleSettings.linkTitle);

            if (linkContentSettings.show) {
                this.middleContentElement.append("p")
                    .style("text-align", linkContentSettings.linkContentAlignment)
                    .text(linkContentSettings.linkContent);
            }

            if (linkBottomSettings.show) {
                this.bottomContentElement = this.rootElement.append("div")
                    .classed("bottomLink", true)
                    .style("position", "absolute")
                    .style("bottom", "0")
                    .style("left", "0")
                    .style("width", "100%")
                    .style("max-width", "100%");

                this.bottomContentElement.append("p")
                    .attr("id", "bottomText")
                    .style("border-top", linkGeneralSettings.borderColor)
                    .style("border-top-style", "solid")
                    .style("border-top-width", "3px")
                    .style("padding-left", "20px")
                    .style("padding-top", "10px")
                    .text(linkBottomSettings.linkBottomText)
                    .append("span")
                    .style("margin-left", "5px")
                    .text("🡭");
            }

            this.rootElement.on("mouseover", (data, i, elements) => {

                let ele = select(elements[i]);

                ele.style("border", linkGeneralSettings.borderHoverColor)
                    .style("border-style", "solid")
                    .style("border-width", "3px");

                ele.select("#linkTitle")
                    .style("color", linkTitleSettings.linkTitleHoverColor);

                this.bottomContentElement
                    .select("#bottomText")
                    .style("border-top", linkGeneralSettings.borderHoverColor)
                    .style("border-top-style", "solid")
                    .style("border-top-width", "3px");

            })
            .on("mouseout", (data, i, elements) => {

                let ele = select(elements[i]);

                ele.style("border", linkGeneralSettings.borderColor)
                    .style("border-style", "solid")
                    .style("border-width", "3px");

                ele.select("#linkTitle")
                    .style("color", linkTitleSettings.linkTitleColor);

                this.bottomContentElement
                    .select("#bottomText")
                    .style("border-top", linkGeneralSettings.borderColor)
                    .style("border-top-style", "solid")
                    .style("border-top-width", "3px");
            })
            .on("click", () => {
                if (!StringExtensions.isNullOrUndefinedOrWhiteSpaceString(linkTitleSettings.link)) {
                    this.host.launchUrl(linkTitleSettings.link);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    private static parseSettings(dataView: DataView): ExternalLinkVisualSettings {
        return ExternalLinkVisualSettings.parse(dataView) as ExternalLinkVisualSettings;
    }

    /**
     * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the
     * objects and properties you want to expose to the users in the property pane.
     *
     */
    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        return ExternalLinkVisualSettings.enumerateObjectInstances(this.linkVisualSettings || ExternalLinkVisualSettings.getDefault(), options);
    }
}