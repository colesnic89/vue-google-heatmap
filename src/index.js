import VueGoogleHeatmap from './VueGoogleHeatmap.vue';
import Loader from './loader.js';

VueGoogleHeatmap.install = function(Vue, options = {}) {
  Vue.component(VueGoogleHeatmap.name, VueGoogleHeatmap);

  if (typeof options.apiKey !== 'undefined') {
    Loader.load(options.apiKey);
  }
};

export default VueGoogleHeatmap;
