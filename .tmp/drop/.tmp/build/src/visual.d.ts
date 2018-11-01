import powerbi from "powerbi-visuals-api";
import "d3-transition";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
export declare class ExternalLinkVisual implements IVisual {
    private target;
    private host;
    private linkVisualSettings;
    private rootElement;
    private topContentElement;
    private middleContentElement;
    private bottomContentElement;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    private static parseSettings;
    /**
     * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the
     * objects and properties you want to expose to the users in the property pane.
     *
     */
    enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject;
}
