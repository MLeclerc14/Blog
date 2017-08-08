import { isFunction } from 'lodash';
import { vuex as Users } from './users';
import { vuex as Dashboard } from './dashboard';

// start extraction data from vuex modules
const vuex = { Users, Dashboard };
const keys = Object.keys(vuex);
// process and extract data (modules and plugins)
const modules = keys.reduce((acc, key) => ({ ...acc, [key]: vuex[key].module }), {});
const plugins = keys.reduce((acc, key) => [...acc, vuex[key].plugin], []).filter(isFunction);


export default { modules, plugins }
