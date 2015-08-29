/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

/**
 * Consolidate duplicate visitors from a collection of plugins. Idea is to
 * transform these duplicate visitors into a single visitor key on an object
 * that has an array of handlers that represent the functions called by the
 * duplicate visitors.
 *
 * @param  {Array<Plugin>} plugins
 * @return {object}
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
