'use strict';

/**
 * typer router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::typer.typer');
