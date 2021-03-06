/**
 * Created by cosine on 2016/9/9.
 */
import {
  UPDATE_CHART_ITEMS,
  CREATE_CHART,
  DELETE_CHART,
  UPDATE_CHART_TYPE,
  UPDATE_SERIES_NAME,
  UPDATE_RAW_DATA,
  UPDATE_OPTION,
} from '../mutation-types';
import chartBusiness from '../chartBusiness';

const appState = {
  chartItems: [{
    name: 'bar',
    src: require('../../assets/img/gallery/bar-mark.png'), // eslint-disable-line
  }],
  chartType: '',
  graphOption: {
    title: {
      text: '当前没有图表数据渲染',
    },
    xAxis: [
      {
        type: 'category',
        data: [],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [],
  },
  dataSeries: ['当前没有导入数据'],
  rawData: [],
};
/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [UPDATE_CHART_ITEMS](state, data) {
    state.chartItems = data;
  },
  [CREATE_CHART](state, data) {
    state.chartItems.push(data);
  },
  [DELETE_CHART](state, index) {
    state.appLists.splice(index, 1);
  },
  [UPDATE_CHART_TYPE](state, data) {
    state.chartType = data;
  },
  [UPDATE_SERIES_NAME](state, data) {
    state.dataSeries = data;
  },
  [UPDATE_RAW_DATA](state, data) {
    state.rawData = data;
  },
  [UPDATE_OPTION](state, data) {
    state.graphOption = data;
  },
};
const actions = {
  fetchItemsSuccess({ state, commit }, data) {
    commit(UPDATE_CHART_ITEMS, data);
  },
  updateSeriesName({ state, commit }, namelist) {
    commit(UPDATE_SERIES_NAME, namelist);
  },
  updateRaw({ state, commit }, data) {
    commit(UPDATE_RAW_DATA, data);
  },
  updateChartName({ state, commit }, name) {
    commit(UPDATE_CHART_TYPE, name);
  },
  updateOption({ state, commit }, data) {
    commit(UPDATE_OPTION, data);
  },
  comfirmCreate({ state, commit }, comfirm) {
    const option = comfirm.getOption(comfirm.setting, state.rawData, chartBusiness.machiningRaw);
    commit(UPDATE_OPTION, option);
  },
  comfirmCreatebak({ state, commit }, setting) {
    const option = chartBusiness.getOption(setting, state.rawData);
    commit(UPDATE_OPTION, option);
  },
};
const appGetters = {
  currentId: state => state.currentId,
  chartsItems: state => state.chartItems,
  dataSeries: state => state.dataSeries,
  option: state => state.graphOption,
  chartType: state => state.chartType,
  rawData: state => state.rawData,
};

export default {
  state: appState,
  mutations,
  actions,
  getters: appGetters,
};
