import EmberRouter from '@ember/routing/router';
import config from 'empty-3-28-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
