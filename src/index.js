import VueGoogleHeatmap from './VueGoogleHeatmap.vue';

VueGoogleHeatmap.install = function(Vue, options = {}) {
  Vue.component(VueGoogleHeatmap.name, VueGoogleHeatmap);
};

export default VueGoogleHeatmap;
