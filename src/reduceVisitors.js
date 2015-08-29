/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

export default function reduceVisitors(plugins) {
  return plugins.reduce((acc, plugin) => {
    const visitorNames = Object.keys(plugin['visitors']);

    const consolidatedVisitorFunctions = visitorNames
      .reduce((prev, visitor) => {
        const handler = plugin['visitors'][visitor];

        return acc[visitor]
          ? (acc[visitor].push(handler), prev)
          : { ...prev, [visitor]: [handler] };
      }, {});

    return { ...acc, ...consolidatedVisitorFunctions };
  }, {});
}
