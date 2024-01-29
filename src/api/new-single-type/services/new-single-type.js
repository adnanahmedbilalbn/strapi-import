'use strict';

/**
 * new-single-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-single-type.new-single-type');
