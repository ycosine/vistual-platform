/**
 * Created by cosine on 2016/9/9.
 */
import {
  GET_APPLIST,
  ADD_APP,
  DELETE_APP,
  UPDATE_CURRENTAPP,
  UPDATE_ORIGINSETTING,
} from '../mutation-types';
const appState = {
  appList: [{
    index: 0,
    appName: '我的第一个项目',
    graphId: 'echartInstance0001', // 可以是数组形式
  }],
  currentApp: {
    index: 0,
    appName: '我的第一个项目',
    graphId: 'echartInstance0001', // 可以是数组形式
  },
  synchronization: {
    app: false,
    origin: false,
  },
  originSetting: {},
};
const mutations = {
  [GET_APPLIST](state, data) {
    const innerState = state;
    innerState.appList = data;
  },
  [ADD_APP](state, data) {
    const innerState = state;
    const add = data;
    add.index = innerState.appList.length;
    innerState.appList.push(add);
  },
  [DELETE_APP](state, index) {
    const innerState = state;
    innerState.appLists = innerState.appLists.splice(index, 1);
  },
  [UPDATE_CURRENTAPP](state, index) {
    const innerState = state;
    innerState.currentApp = innerState.appList[index];
  },
  [UPDATE_ORIGINSETTING](state, data) {
    const innerState = state;
    innerState.originSetting = data;
  },
};

export default {
  state: appState,
  mutations,
};
