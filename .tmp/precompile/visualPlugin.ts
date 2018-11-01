import { ExternalLinkVisual } from "../../src/visual";
declare var powerbi;
powerbi.visuals = powerbi.visuals || {};
powerbi.visuals.plugins = powerbi.visuals.plugins || {};
powerbi.visuals.plugins["externalLinkC315CFE8D1E9496582BCD9F3B9E20D91"] = {
    name: 'externalLinkC315CFE8D1E9496582BCD9F3B9E20D91',
    displayName: 'External Link',
    class: 'ExternalLinkVisual',
    version: '1.0.0',
    apiVersion: '2.1.0',
    create: (options) => {
        if (ExternalLinkVisual) {
            return new ExternalLinkVisual(options);
        }

        console.error('Visual instance not found');
    },
    custom: true
};

export default powerbi;