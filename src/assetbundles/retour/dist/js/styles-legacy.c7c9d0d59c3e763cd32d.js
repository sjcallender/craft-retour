(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_confetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-confetti */ "./node_modules/vue-confetti/dist/vue-confetti.js");
/* harmony import */ var vue_confetti__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_confetti__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//




vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_confetti__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        var _this = this;

        this.$confetti.start();
        setTimeout(function () {
            _this.$confetti.stop();
        }, 5000);
    },
    methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


//
//
//
//


var chartDataBaseUrl = '/retour/charts/dashboard/';

// Configure the api endpoint
var configureApi = function configureApi(url) {
    return {
        baseURL: url,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    };
};
// Query our API endpoint via an XHR GET
var queryApi = function queryApi(api, uri, callback) {
    api.get(uri).then(function (result) {
        if (callback) {
            callback(result.data);
        }
        console.log(result.data);
    }).catch(function (error) {
        console.log(error);
    });
};

// Our component exports
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'apexcharts': function apexcharts() {
            return __webpack_require__.e(/*! import() | apexcharts */ "vendors~apexcharts").then(__webpack_require__.t.bind(null, /*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js", 7));
        }
    },
    props: {
        title: String,
        subTitle: String,
        range: String
    },
    methods: {
        // Load in our chart data asynchronously
        getSeriesData: function () {
            var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                var _this = this;

                var axios, chartsAPI;
                return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return __webpack_require__.e(/*! import() | axios */ "vendors~axios").then(__webpack_require__.t.bind(null, /*! axios */ "./node_modules/axios/index.js", 7));

                            case 2:
                                axios = _context.sent;
                                chartsAPI = axios.create(configureApi(chartDataBaseUrl));
                                _context.next = 6;
                                return queryApi(chartsAPI, this.range, function (data) {
                                    _this.series = data;
                                });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getSeriesData() {
                return _ref.apply(this, arguments);
            }

            return getSeriesData;
        }()
    },
    mounted: function mounted() {
        this.getSeriesData();
    },

    data: function data() {
        return {
            chartOptions: {
                chart: {
                    id: 'vuechart-example',
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    }

                },
                colors: ['#008FFB', '#DCE6EC'],
                stroke: {
                    curve: 'straight',
                    width: 3
                },
                fill: {
                    opacity: 0.2,
                    gradient: {
                        enabled: true
                    }
                },
                xaxis: {
                    crosshairs: {
                        width: 1
                    }
                },
                yaxis: {
                    min: 0
                },
                title: {
                    text: this.title,
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                        cssClass: 'apexcharts-yaxis-title'
                    }
                },
                subtitle: {
                    text: this.subTitle,
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                        cssClass: 'apexcharts-yaxis-title'
                    }
                }
            },
            series: [{
                name: 'placeholder',
                data: [0]
            }]
        };
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//

// Our component exports
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'vuetable': function vuetable() {
            return Promise.all(/*! import() | vuetable */[__webpack_require__.e("styles"), __webpack_require__.e("vendors~vuetable")]).then(__webpack_require__.bind(null, /*! vuetable-2/src/components/Vuetable.vue */ "./node_modules/vuetable-2/src/components/Vuetable.vue"));
        },
        'vuetable-pagination': function vuetablePagination() {
            return __webpack_require__.e(/*! import() | vuetable-pagination */ "styles").then(__webpack_require__.bind(null, /*! ./VuetablePagination.vue */ "./src/assetbundles/retour/src/vue/VuetablePagination.vue"));
        }
    },
    props: {},
    data: function data() {
        return {
            fields: [{
                name: 'redirectSrcUrl',
                sortField: 'redirectSrcUrl',
                title: '404 File Not Found URL',
                titleClass: 'center',
                dataClass: 'center',
                callback: 'urlFormatter'

            }, {
                name: 'referrerUrl',
                sortField: 'referrerUrl',
                title: 'Last Referrer URL',
                titleClass: 'center',
                dataClass: 'center',
                callback: 'urlFormatter'
            }, {
                name: 'hitCount',
                sortField: 'hitCount',
                title: 'Hits',
                titleClass: 'center',
                dataClass: 'center'
            }, {
                name: 'hitLastTime',
                sortField: 'hitLastTime',
                title: 'Last Hit',
                titleClass: 'center',
                dataClass: 'center'
            }, {
                name: 'handledByRetour',
                sortField: 'hitLastTime',
                title: 'Handled',
                titleClass: 'center',
                dataClass: 'center',
                callback: 'boolFormatter'
            }, {
                name: 'addLink',
                sortField: 'addLink',
                title: '',
                titleClass: 'center',
                dataClass: 'center',
                callback: 'addUrlFormatter'
            }]
        };
    },
    methods: {
        onPaginationData: function onPaginationData(paginationData) {
            this.$refs.pagination.setPaginationData(paginationData);
        },
        onChangePage: function onChangePage(page) {
            this.$refs.vuetable.changePage(page);
        },
        urlFormatter: function urlFormatter(value) {
            if (value === '') {
                return '';
            }
            return '\n            <a class="go" href="' + value + '" title="' + value + '">' + value + '</a>\n            ';
        },
        boolFormatter: function boolFormatter(value) {
            if (value) {
                return '\n            <span style="color: green;">&#x2714;</span>\n            ';
            }
            return '\n            <span style="color: red;">&#x2716;</span>\n            ';
        },
        addUrlFormatter: function addUrlFormatter(value) {
            if (value === '') {
                return '';
            }
            return '\n            <a class="add icon" href="retour/add" title="Add"></a>\n            ';
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuetablePaginationMixin_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuetablePaginationMixin.vue */ "./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_VuetablePaginationMixin_vue__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    css: {
      type: Object,
      default: function _default() {
        return {
          wrapperClass: 'vuetable ui right floated pagination menu',
          activeClass: 'active large',
          disabledClass: 'disabled',
          pageClass: 'item',
          linkClass: 'icon item',
          paginationClass: 'ui bottom attached segment grid',
          paginationInfoClass: 'left floated left aligned six wide column',
          dropdownClass: 'ui search dropdown',
          icons: {
            first: 'angle double left icon',
            prev: 'left chevron icon',
            next: 'right chevron icon',
            last: 'angle double right icon'
          }
        };
      }
    },
    onEachSide: {
      type: Number,
      default: function _default() {
        return 2;
      }
    }
  },
  data: function data() {
    return {
      eventPrefix: 'vuetable-pagination:',
      tablePagination: null
    };
  },
  computed: {
    totalPage: function totalPage() {
      return this.tablePagination === null ? 0 : this.tablePagination.last_page;
    },
    isOnFirstPage: function isOnFirstPage() {
      return this.tablePagination === null ? false : this.tablePagination.current_page === 1;
    },
    isOnLastPage: function isOnLastPage() {
      return this.tablePagination === null ? false : this.tablePagination.current_page === this.tablePagination.last_page;
    },
    notEnoughPages: function notEnoughPages() {
      return this.totalPage < this.onEachSide * 2 + 4;
    },
    windowSize: function windowSize() {
      return this.onEachSide * 2 + 1;
    },
    windowStart: function windowStart() {
      if (!this.tablePagination || this.tablePagination.current_page <= this.onEachSide) {
        return 1;
      } else if (this.tablePagination.current_page >= this.totalPage - this.onEachSide) {
        return this.totalPage - this.onEachSide * 2;
      }

      return this.tablePagination.current_page - this.onEachSide;
    }
  },
  methods: {
    loadPage: function loadPage(page) {
      this.$emit(this.eventPrefix + 'change-page', page);
    },
    isCurrentPage: function isCurrentPage(page) {
      return page === this.tablePagination.current_page;
    },
    setPaginationData: function setPaginationData(tablePagination) {
      this.tablePagination = tablePagination;
    },
    resetData: function resetData() {
      this.tablePagination = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/postcss-loader/lib??ref--2-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/vuetable-2/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    fields: {
      type: Array,
      required: true
    },
    loadOnStart: {
      type: Boolean,
      default: true
    },
    apiUrl: {
        type: String,
        default: ''
    },
    httpMethod: {
        type: String,
        default: 'get',
        validator: (value) => {
          return ['get', 'post'].indexOf(value) > -1
        }
    },
    reactiveApiUrl: {
        type: Boolean,
        default: true
    },
    apiMode: {
      type: Boolean,
      default: true
    },
    data: {
      type: [Array, Object],
      default: null
    },
    dataTotal: {
      type: Number,
      default: 0
    },
    dataManager: {
      type: Function,
      default: null
    },
    dataPath: {
        type: String,
        default: 'data'
    },
    paginationPath: {
        type: [String],
        default: 'links.pagination'
    },
    queryParams: {
      type: [Object, Function],
      default () {
        return {
          sort: 'sort',
          page: 'page',
          perPage: 'per_page'
        }
      }
    },
    appendParams: {
      type: Object,
      default () {
        return {}
      }
    },
    httpOptions: {
      type: Object,
      default () {
        return {}
      }
    },
    httpFetch: {
      type: Function,
      default: null
    },
    perPage: {
        type: Number,
        default: 10
    },
    initialPage: {
      type: Number,
      default: 1
    },
    sortOrder: {
      type: Array,
      default () {
        return []
      }
    },
    multiSort: {
      type: Boolean,
      default () {
        return false
      }
    },
    tableHeight: {
      type: String,
      default: null
    },
    /*
     * physical key that will trigger multi-sort option
     * possible values: 'alt', 'ctrl', 'meta', 'shift'
     * 'ctrl' might not work as expected on Mac
     */
    multiSortKey: {
      type: String,
      default: 'alt'
    },
    /* deprecated */
    rowClassCallback: {
      type: [String, Function],
      default: ''
    },
    rowClass: {
      type: [String, Function],
      default: ''
    },
    detailRowComponent: {
      type: String,
      default: ''
    },
    detailRowTransition: {
      type: String,
      default: ''
    },
    trackBy: {
      type: String,
      default: 'id'
    },
    css: {
      type: Object,
      default () {
        return {
          tableClass: 'ui blue selectable celled stackable attached table',
          loadingClass: 'loading',
          ascendingIcon: 'blue chevron up icon',
          descendingIcon: 'blue chevron down icon',
          ascendingClass: 'sorted-asc',
          descendingClass: 'sorted-desc',
          sortableIcon: '',
          detailRowClass: 'vuetable-detail-row',
          handleIcon: 'grey sidebar icon',
          tableBodyClass: 'vuetable-semantic-no-top vuetable-fixed-layout',
          tableHeaderClass: 'vuetable-fixed-layout'
        }
      }
    },
    minRows: {
      type: Number,
      default: 0
    },
    silent: {
      type: Boolean,
      default: false
    },
    noDataTemplate: {
      type: String,
      default() {
        return 'No Data Available'
      }
    },
    showSortIcons: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      eventPrefix: 'vuetable:',
      tableFields: [],
      tableData: null,
      tablePagination: null,
      currentPage: this.initialPage,
      selectedTo: [],
      visibleDetailRows: [],
      lastScrollPosition: 0,
      scrollBarWidth: '17px', //chrome default
      scrollVisible: false,
    }
  },
  mounted () {
    this.normalizeFields()
    this.normalizeSortOrder()
    if (this.isFixedHeader) {
      this.scrollBarWidth = this.getScrollBarWidth() + 'px';
    }
    this.$nextTick(function() {
      this.fireEvent('initialized', this.tableFields)
    })

    if (this.loadOnStart) {
      this.loadData()
    }
    if (this.isFixedHeader) {
      let elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0];
      if (elem != null) {
        elem.addEventListener('scroll', this.handleScroll);
      }
    }
  },
  destroyed () {
    let elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0];
    if (elem != null) {
      elem.removeEventListener('scroll', this.handleScroll);
    }
  },
  computed: {
    version: () => VERSION,
    useDetailRow () {
      if (this.tableData && this.tableData[0] && this.detailRowComponent !== '' && typeof this.tableData[0][this.trackBy] === 'undefined') {
        this.warn('You need to define unique row identifier in order for detail-row feature to work. Use `track-by` prop to define one!')
        return false
      }

      return this.detailRowComponent !== ''
    },
    countVisibleFields () {
      return this.tableFields.filter(function(field) {
        return field.visible
      }).length
    },
    countTableData () {
      if (this.tableData === null) {
        return 0
      }
      return this.tableData.length
    },
    displayEmptyDataRow () {
      return this.countTableData === 0 && this.noDataTemplate.length > 0
    },
    lessThanMinRows () {
      if (this.tableData === null || this.tableData.length === 0) {
        return true
      }
      return this.tableData.length < this.minRows
    },
    blankRows () {
      if (this.tableData === null || this.tableData.length === 0) {
        return this.minRows
      }
      if (this.tableData.length >= this.minRows) {
        return 0
      }

      return this.minRows - this.tableData.length
    },
    isApiMode () {
      return this.apiMode
    },
    isDataMode () {
      return ! this.apiMode
    },
    isFixedHeader () {
      return this.tableHeight != null
    }
  },
  methods: {
    getScrollBarWidth () {
      const outer = document.createElement('div');
      const inner = document.createElement('div');

      outer.style.visibility = 'hidden';
      outer.style.width = '100px';

      inner.style.width = '100%';


      outer.appendChild(inner);
      document.body.appendChild(outer);


      const widthWithoutScrollbar = outer.offsetWidth;

      outer.style.overflow = 'scroll';

      const widthWithScrollbar = inner.offsetWidth;


      document.body.removeChild(outer);


      return (widthWithoutScrollbar - widthWithScrollbar);
    },
    handleScroll (e) { //make sure that the header and the body are aligned when scrolling horizontally on a table that is wider than the viewport
      let horizontal = e.currentTarget.scrollLeft;
      if (horizontal != this.lastScrollPosition) { //don't modify header scroll if we are scrolling vertically
        let header = this.$el.getElementsByClassName('vuetable-head-wrapper')[0]
        if (header != null) {
          header.scrollLeft = horizontal;
        }
        this.lastScrollPosition = horizontal;
      }

    },
    normalizeFields () {
      if (typeof(this.fields) === 'undefined') {
        this.warn('You need to provide "fields" prop.')
        return
      }

      this.tableFields = []
      let self = this
      let obj
      this.fields.forEach(function(field, i) {
        if (typeof (field) === 'string') {
          obj = {
            name: field,
            title: self.setTitle(field),
            titleClass: '',
            dataClass: '',
            callback: null,
            visible: true,
          }
        } else {
          obj = {
            name: field.name,
            width: field.width,
            title: (field.title === undefined) ? self.setTitle(field.name) : field.title,
            sortField: field.sortField,
            titleClass: (field.titleClass === undefined) ? '' : field.titleClass,
            dataClass: (field.dataClass === undefined) ? '' : field.dataClass,
            callback: (field.callback === undefined) ? '' : field.callback,
            visible: (field.visible === undefined) ? true : field.visible,
          }
        }
        self.tableFields.push(obj)
      })
    },
    setData (data) {
      if (data === null || typeof(data) === 'undefined') return

      this.fireEvent('loading')

      if (Array.isArray(data)) {
        this.tableData = data
        this.fireEvent('loaded')
        return
      }

      this.tableData = this.getObjectValue(data, this.dataPath, null)
      this.tablePagination = this.getObjectValue(data, this.paginationPath, null)

      this.$nextTick(function() {
        this.fixHeader()
        this.fireEvent('pagination-data', this.tablePagination)
        this.fireEvent('loaded')
      })
    },
    setTitle (str) {
      if (this.isSpecialField(str)) {
        return ''
      }

      return this.titleCase(str)
    },
    getTitle (field) {
      if (typeof(field.title) === 'function') return field.title()

      return typeof(field.title) === 'undefined'
        ? field.name.replace('.', ' ')
        : field.title
    },
    renderTitle (field) {
      let title = this.getTitle(field)

      if (title.length > 0 && this.isInCurrentSortGroup(field) || this.hasSortableIcon(field)) {
        let style = `opacity:${this.sortIconOpacity(field)};position:relative;float:right`
        let iconTag = this.showSortIcons ? this.renderIconTag(['sort-icon', this.sortIcon(field)], `style="${style}"`) : ''
        return title + ' ' + iconTag
      }

      return title
    },
    renderSequence (index) {
      return this.tablePagination
        ? this.tablePagination.from + index
        : index
    },
    renderNormalField (field, item) {
      return this.hasCallback(field)
        ? this.callCallback(field, item)
        : this.getObjectValue(item, field.name, '')
    },
    isSpecialField (fieldName) {
      return fieldName.slice(0, 2) === '__'
    },
    titleCase (str) {
      return str.replace(/\w+/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    },
    camelCase (str, delimiter = '_') {
      let self = this
      return str.split(delimiter).map(function(item) {
        return self.titleCase(item)
      }).join('')
    },
    notIn (str, arr) {
      return arr.indexOf(str) === -1
    },
    loadData (success = this.loadSuccess, failed = this.loadFailed) {
      if (this.isDataMode) {
        this.callDataManager()
        return
      }

      this.fireEvent('loading')

      this.httpOptions['params'] = this.getAppendParams( this.getAllQueryParams() )

      return this.fetch(this.apiUrl, this.httpOptions).then(
          success,
          failed
      ).catch(() => failed())
    },
    fetch (apiUrl, httpOptions) {
      return this.httpFetch
          ? this.httpFetch(apiUrl, httpOptions)
          : axios__WEBPACK_IMPORTED_MODULE_0___default.a[this.httpMethod](apiUrl, httpOptions)
    },
    loadSuccess (response) {
      this.fireEvent('load-success', response)

      let body = this.transform(response.data)

      this.tableData = this.getObjectValue(body, this.dataPath, null)
      this.tablePagination = this.getObjectValue(body, this.paginationPath, null)

      if (this.tablePagination === null) {
        this.warn('vuetable: pagination-path "' + this.paginationPath + '" not found. '
          + 'It looks like the data returned from the sever does not have pagination information '
          + "or you may have set it incorrectly.\n"
          + 'You can explicitly suppress this warning by setting pagination-path="".'
        )
      }

      this.$nextTick(function() {
        this.fixHeader()
        this.fireEvent('pagination-data', this.tablePagination)
        this.fireEvent('loaded')
      })
    },
    fixHeader() {
      if (!this.isFixedHeader) {
        return;
      }

      let elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0]
      if (elem != null) {
        if (elem.scrollHeight > elem.clientHeight) {
          this.scrollVisible = true;
        }
        else {
          this.scrollVisible = false;
        }
      }
    },
    loadFailed (response) {
      console.error('load-error', response)
      this.fireEvent('load-error', response)
      this.fireEvent('loaded')
    },
    transform (data) {
      let func = 'transform'

      if (this.parentFunctionExists(func)) {
          return this.$parent[func].call(this.$parent, data)
      }

      return data
    },
    parentFunctionExists (func) {
      return (func !== '' && typeof this.$parent[func] === 'function')
    },
    callParentFunction (func, args, defaultValue = null) {
      if (this.parentFunctionExists(func)) {
        return this.$parent[func].call(this.$parent, args)
      }

      return defaultValue
    },
    fireEvent (eventName, args) {
      this.$emit(this.eventPrefix + eventName, args)
    },
    warn (msg) {
      if (!this.silent) {
        console.warn(msg)
      }
    },
    getAllQueryParams () {
      let params = {}

      if (typeof(this.queryParams) === 'function') {
        params = this.queryParams(this.sortOrder, this.currentPage, this.perPage)
        return typeof(params) !== 'object' ? {} : params
      }

      params[this.queryParams.sort] = this.getSortParam()
      params[this.queryParams.page] = this.currentPage
      params[this.queryParams.perPage] = this.perPage

      return params
    },
    getSortParam () {
      if (!this.sortOrder || this.sortOrder.field == '') {
        return ''
      }

      if (typeof this.$parent['getSortParam'] === 'function') {
        return this.$parent['getSortParam'].call(this.$parent, this.sortOrder)
      }

      return this.getDefaultSortParam()
    },
    getDefaultSortParam () {
      let result = '';

      for (let i = 0; i < this.sortOrder.length; i++) {
        let fieldName = (typeof this.sortOrder[i].sortField === 'undefined')
          ? this.sortOrder[i].field
          : this.sortOrder[i].sortField;

        result += fieldName + '|' + this.sortOrder[i].direction + ((i+1) < this.sortOrder.length ? ',' : '');
      }
      return result;
    },
    getAppendParams (params) {
      for (let x in this.appendParams) {
        params[x] = this.appendParams[x]
      }

      return params
    },
    extractName (string) {
      return string.split(':')[0].trim()
    },
    extractArgs (string) {
      return string.split(':')[1]
    },
    isSortable (field) {
      return !(typeof field.sortField === 'undefined')
    },
    isInCurrentSortGroup (field) {
      return this.currentSortOrderPosition(field) !== false;
    },
    hasSortableIcon (field) {
      return this.isSortable(field) && this.css.sortableIcon != ''
    },
    currentSortOrderPosition (field) {
      if ( ! this.isSortable(field)) {
        return false
      }

      for (let i = 0; i < this.sortOrder.length; i++) {
        if (this.fieldIsInSortOrderPosition(field, i)) {
          return i;
        }
      }

      return false;
    },
    fieldIsInSortOrderPosition (field, i) {
      return this.sortOrder[i].field === field.name && this.sortOrder[i].sortField === field.sortField
    },
    orderBy (field, event) {
      if ( ! this.isSortable(field) ) return

      let key = this.multiSortKey.toLowerCase() + 'Key'

      if (this.multiSort && event[key]) { //adding column to multisort
        this.multiColumnSort(field)
      } else {
        //no multisort, or resetting sort
        this.singleColumnSort(field)
      }

      this.currentPage = 1    // reset page index
      if (this.apiMode || this.dataManager) {
        this.loadData()
      }
    },
    multiColumnSort (field) {
      let i = this.currentSortOrderPosition(field);

      if(i === false) { //this field is not in the sort array yet
        this.sortOrder.push({
          field: field.name,
          sortField: field.sortField,
          direction: 'asc'
        });
      } else { //this field is in the sort array, now we change its state
        if(this.sortOrder[i].direction === 'asc') {
          // switch direction
          this.sortOrder[i].direction = 'desc'
        } else {
          //remove sort condition
          this.sortOrder.splice(i, 1);
        }
      }
    },
    singleColumnSort (field) {
      if (this.sortOrder.length === 0) {
        this.clearSortOrder()
      }

      this.sortOrder.splice(1); //removes additional columns

      if (this.fieldIsInSortOrderPosition(field, 0)) {
        // change sort direction
        this.sortOrder[0].direction = this.sortOrder[0].direction === 'asc' ? 'desc' : 'asc'
      } else {
        // reset sort direction
        this.sortOrder[0].direction = 'asc'
      }
      this.sortOrder[0].field = field.name
      this.sortOrder[0].sortField = field.sortField
    },
    clearSortOrder () {
      this.sortOrder.push({
        field: '',
        sortField: '',
        direction: 'asc'
      });
    },
    sortClass (field) {
      let cls = ''
      let i = this.currentSortOrderPosition(field)

      if (i !== false) {
        cls = (this.sortOrder[i].direction == 'asc') ? this.css.ascendingClass : this.css.descendingClass
      }

      return cls
    },
    sortIcon (field) {
      let cls = this.css.sortableIcon
      let i = this.currentSortOrderPosition(field)

      if (i !== false) {
        cls = (this.sortOrder[i].direction == 'asc') ? this.css.ascendingIcon : this.css.descendingIcon
      }

      return cls;
    },
    sortIconOpacity (field) {
      /*
       * fields with stronger precedence have darker color
       *
       * if there are few fields, we go down by 0.3
       * ex. 2 fields are selected: 1.0, 0.7
       *
       * if there are more we go down evenly on the given spectrum
       * ex. 6 fields are selected: 1.0, 0.86, 0.72, 0.58, 0.44, 0.3
       */
      let max = 1.0,
          min = 0.3,
          step = 0.3

      let count = this.sortOrder.length;
      let current = this.currentSortOrderPosition(field)


      if(max - count * step < min) {
        step = (max - min) / (count-1)
      }

      let opacity = max - current * step

      return opacity
    },
    hasCallback (item) {
      return item.callback ? true : false
    },
    callCallback (field, item) {
      if ( ! this.hasCallback(field)) return

      if(typeof(field.callback) == 'function') {
       return field.callback(this.getObjectValue(item, field.name))
      }

      let args = field.callback.split('|')
      let func = args.shift()

      if (typeof this.$parent[func] === 'function') {
        let value = this.getObjectValue(item, field.name)

        return (args.length > 0)
          ? this.$parent[func].apply(this.$parent, [value].concat(args))
          : this.$parent[func].call(this.$parent, value)
      }

      return null
    },
    getObjectValue (object, path, defaultValue) {
      defaultValue = (typeof defaultValue === 'undefined') ? null : defaultValue

      let obj = object
      if (path.trim() != '') {
        let keys = path.split('.')
        keys.forEach(function(key) {
          if (obj !== null && typeof obj[key] !== 'undefined' && obj[key] !== null) {
            obj = obj[key]
          } else {
            obj = defaultValue
            return
          }
        })
      }
      return obj
    },
    toggleCheckbox (dataItem, fieldName, event) {
      let isChecked = event.target.checked
      let idColumn = this.trackBy

      if (dataItem[idColumn] === undefined) {
        this.warn('__checkbox field: The "'+this.trackBy+'" field does not exist! Make sure the field you specify in "track-by" prop does exist.')
        return
      }

      let key = dataItem[idColumn]
      if (isChecked) {
        this.selectId(key)
      } else {
        this.unselectId(key)
      }
      this.$emit('vuetable:checkbox-toggled', isChecked, dataItem)
    },
    selectId (key) {
      if ( ! this.isSelectedRow(key)) {
        this.selectedTo.push(key)
      }
    },
    unselectId (key) {
      this.selectedTo = this.selectedTo.filter(function(item) {
        return item !== key
      })
    },
    isSelectedRow (key) {
      return this.selectedTo.indexOf(key) >= 0
    },
    rowSelected (dataItem, fieldName){
      let idColumn = this.trackBy
      let key = dataItem[idColumn]

      return this.isSelectedRow(key)
    },
    checkCheckboxesState (fieldName) {
      if (! this.tableData) return

      let self = this
      let idColumn = this.trackBy
      let selector = 'th.vuetable-th-checkbox-' + idColumn + ' input[type=checkbox]'
      let els = document.querySelectorAll(selector)

      //fixed:document.querySelectorAll return the typeof nodeList not array
      if (els.forEach===undefined)
        els.forEach=function(cb){
          [].forEach.call(els, cb);
        }

      // count how many checkbox row in the current page has been checked
      let selected = this.tableData.filter(function(item) {
        return self.selectedTo.indexOf(item[idColumn]) >= 0
      })

      // count == 0, clear the checkbox
      if (selected.length <= 0) {
        els.forEach(function(el) {
          el.indeterminate = false
        })
        return false
      }
      // count > 0 and count < perPage, set checkbox state to 'indeterminate'
      else if (selected.length < this.perPage) {
        els.forEach(function(el) {
          el.indeterminate = true
        })
        return true
      }
      // count == perPage, set checkbox state to 'checked'
      else {
        els.forEach(function(el) {
          el.indeterminate = false
        })
        return true
      }
    },
    toggleAllCheckboxes (fieldName, event) {
      let self = this
      let isChecked = event.target.checked
      let idColumn = this.trackBy

      if (isChecked) {
        this.tableData.forEach(function(dataItem) {
          self.selectId(dataItem[idColumn])
        })
      } else {
        this.tableData.forEach(function(dataItem) {
          self.unselectId(dataItem[idColumn])
        })
      }
      this.$emit('vuetable:checkbox-toggled-all', isChecked)
    },
    gotoPreviousPage () {
      if (this.currentPage > 1) {
        this.currentPage--
        this.loadData()
      }
    },
    gotoNextPage () {
      if (this.currentPage < this.tablePagination.last_page) {
        this.currentPage++
        this.loadData()
      }
    },
    gotoPage (page) {
      if (page != this.currentPage && (page > 0 && page <= this.tablePagination.last_page)) {
        this.currentPage = page
        this.loadData()
      }
    },
    isVisibleDetailRow (rowId) {
      return this.visibleDetailRows.indexOf( rowId ) >= 0
    },
    showDetailRow (rowId) {
      if (!this.isVisibleDetailRow(rowId)) {
        this.visibleDetailRows.push(rowId)
      }
    },
    hideDetailRow (rowId) {
      if (this.isVisibleDetailRow(rowId)) {
        this.visibleDetailRows.splice(
          this.visibleDetailRows.indexOf(rowId),
          1
        )
      }
    },
    toggleDetailRow (rowId) {
      if (this.isVisibleDetailRow(rowId)) {
        this.hideDetailRow(rowId)
      } else {
        this.showDetailRow(rowId)
      }
    },
    showField (index) {
      if (index < 0 || index > this.tableFields.length) return

      this.tableFields[index].visible = true
    },
    hideField (index) {
      if (index < 0 || index > this.tableFields.length) return

      this.tableFields[index].visible = false
    },
    toggleField (index) {
      if (index < 0 || index > this.tableFields.length) return

      this.tableFields[index].visible = ! this.tableFields[index].visible
    },
    renderIconTag (classes, options = '') {
      return typeof(this.css.renderIcon) === 'undefined'
        ? `<i class="${classes.join(' ')}" ${options}></i>`
        : this.css.renderIcon(classes, options)
    },
    makePagination (total = null, perPage = null, currentPage = null) {
      let pagination = {}
      total = total === null ? this.dataTotal : total
      perPage = perPage === null ? this.perPage : perPage
      currentPage = currentPage === null ? this.currentPage : currentPage

      return {
        'total': total,
        'per_page': perPage,
        'current_page': currentPage,
        'last_page': Math.ceil(total / perPage) || 0,
        'next_page_url': '',
        'prev_page_url': '',
        'from': (currentPage -1) * perPage +1,
        'to': Math.min(currentPage * perPage, total)
      }
    },
    normalizeSortOrder () {
      this.sortOrder.forEach(function(item) {
        item.sortField = item.sortField || item.field
      })
    },
    callDataManager () {
      if (this.dataManager === null && this.data === null) return

      if (Array.isArray(this.data)) {
        return this.setData(this.data)
      } 
      
      this.normalizeSortOrder()

      return this.setData(
        this.dataManager
          ? this.dataManager(this.sortOrder, this.makePagination())
          : this.data
      )
    },
    onRowClass (dataItem, index) {
      if (this.rowClassCallback !== '') {
        this.warn('"row-class-callback" prop is deprecated, please use "row-class" prop instead.')
        return
      }

      if (typeof(this.rowClass) === 'function') {
        return this.rowClass(dataItem, index)
      }

      return this.rowClass
    },
    onRowChanged (dataItem) {
      this.fireEvent('row-changed', dataItem)
      return true
    },
    onRowClicked (dataItem, event) {
      this.$emit(this.eventPrefix + 'row-clicked', dataItem, event)
      return true
    },
    onRowDoubleClicked (dataItem, event) {
      this.$emit(this.eventPrefix + 'row-dblclicked', dataItem, event)
    },
    onDetailRowClick (dataItem, event) {
      this.$emit(this.eventPrefix + 'detail-row-clicked', dataItem, event)
    },
    onCellClicked (dataItem, field, event) {
      this.$emit(this.eventPrefix + 'cell-clicked', dataItem, field, event)
    },
    onCellDoubleClicked (dataItem, field, event) {
      this.$emit(this.eventPrefix + 'cell-dblclicked', dataItem, field, event)
    },
    onCellRightClicked (dataItem, field, event) {
      this.$emit(this.eventPrefix + 'cell-rightclicked', dataItem, field, event)
    },
    /*
     * API for externals
     */
    changePage (page) {
      if (page === 'prev') {
        this.gotoPreviousPage()
      } else if (page === 'next') {
        this.gotoNextPage()
      } else {
        this.gotoPage(page)
      }
    },
    reload () {
      return this.loadData()
    },
    refresh () {
      this.currentPage = 1
      return this.loadData()
    },
    resetData () {
      this.tableData = null
      this.tablePagination = null
      this.fireEvent('data-reset')
    }
  }, // end: methods
  watch: {
    'multiSort' (newVal, oldVal) {
      if (newVal === false && this.sortOrder.length > 1) {
        this.sortOrder.splice(1);
        this.loadData();
      }
    },
    'apiUrl'  (newVal, oldVal) {
      if(this.reactiveApiUrl && newVal !== oldVal)
        this.refresh()
    },
    'data' (newVal, oldVal) {
      this.setData(newVal)
    },
    'tableHeight' (newVal, oldVal) {
      this.fixHeader()
    }
  },
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isFixedHeader
    ? _c("div", [
        _c("div", { staticClass: "vuetable-head-wrapper" }, [
          _c(
            "table",
            {
              class: ["vuetable", _vm.css.tableClass, _vm.css.tableHeaderClass]
            },
            [
              _c("thead", [
                _c(
                  "tr",
                  [
                    _vm._l(_vm.tableFields, function(field, fieldIndex) {
                      return [
                        field.visible
                          ? [
                              _vm.isSpecialField(field.name)
                                ? [
                                    _vm.extractName(field.name) == "__checkbox"
                                      ? _c(
                                          "th",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-th-checkbox-" +
                                                _vm.trackBy,
                                              field.titleClass
                                            ],
                                            style: { width: field.width }
                                          },
                                          [
                                            _c("input", {
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                checked: _vm.checkCheckboxesState(
                                                  field.name
                                                )
                                              },
                                              on: {
                                                change: function($event) {
                                                  _vm.toggleAllCheckboxes(
                                                    field.name,
                                                    $event
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__component"
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-component-" +
                                              _vm.trackBy,
                                            field.titleClass,
                                            _vm.sortClass(field),
                                            { sortable: _vm.isSortable(field) }
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.orderBy(field, $event)
                                            }
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__slot"
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-slot-" +
                                              _vm.extractArgs(field.name),
                                            field.titleClass,
                                            _vm.sortClass(field),
                                            { sortable: _vm.isSortable(field) }
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.orderBy(field, $event)
                                            }
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__sequence"
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-sequence",
                                            field.titleClass || ""
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.notIn(_vm.extractName(field.name), [
                                      "__sequence",
                                      "__checkbox",
                                      "__component",
                                      "__slot"
                                    ])
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-" + field.name,
                                            field.titleClass || ""
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
                                          }
                                        })
                                      : _vm._e()
                                  ]
                                : [
                                    _c("th", {
                                      key: fieldIndex,
                                      class: [
                                        "vuetable-th-" + field.name,
                                        field.titleClass,
                                        _vm.sortClass(field),
                                        { sortable: _vm.isSortable(field) }
                                      ],
                                      style: { width: field.width },
                                      attrs: { id: "_" + field.name },
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.renderTitle(field)
                                        )
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.orderBy(field, $event)
                                        }
                                      }
                                    })
                                  ]
                            ]
                          : _vm._e()
                      ]
                    }),
                    _vm._v(" "),
                    _vm.scrollVisible
                      ? _c("th", {
                          staticClass: "vuetable-gutter-col",
                          style: { width: _vm.scrollBarWidth }
                        })
                      : _vm._e()
                  ],
                  2
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "vuetable-body-wrapper",
            style: { height: _vm.tableHeight }
          },
          [
            _c(
              "table",
              {
                class: ["vuetable", _vm.css.tableClass, _vm.css.tableBodyClass]
              },
              [
                _c(
                  "colgroup",
                  [
                    _vm._l(_vm.tableFields, function(field, fieldIndex) {
                      return [
                        field.visible
                          ? [
                              _c("col", {
                                key: fieldIndex,
                                class: [
                                  "vuetable-th-" + field.name,
                                  field.titleClass
                                ],
                                style: { width: field.width },
                                attrs: { id: "_col_" + field.name }
                              })
                            ]
                          : _vm._e()
                      ]
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "tbody",
                  { staticClass: "vuetable-body" },
                  [
                    _vm._l(_vm.tableData, function(item, itemIndex) {
                      return [
                        _c(
                          "tr",
                          {
                            key: itemIndex,
                            class: _vm.onRowClass(item, itemIndex),
                            attrs: {
                              "item-index": itemIndex,
                              render: _vm.onRowChanged(item)
                            },
                            on: {
                              click: function($event) {
                                _vm.onRowClicked(item, $event)
                              },
                              dblclick: function($event) {
                                _vm.onRowDoubleClicked(item, $event)
                              }
                            }
                          },
                          [
                            _vm._l(_vm.tableFields, function(
                              field,
                              fieldIndex
                            ) {
                              return [
                                field.visible
                                  ? [
                                      _vm.isSpecialField(field.name)
                                        ? [
                                            _vm.extractName(field.name) ==
                                            "__sequence"
                                              ? _c("td", {
                                                  key: fieldIndex,
                                                  class: [
                                                    "vuetable-sequence",
                                                    field.dataClass
                                                  ],
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      _vm.renderSequence(
                                                        itemIndex
                                                      )
                                                    )
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.extractName(field.name) ==
                                            "__handle"
                                              ? _c("td", {
                                                  key: fieldIndex,
                                                  class: [
                                                    "vuetable-handle",
                                                    field.dataClass
                                                  ],
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      _vm.renderIconTag([
                                                        "handle-icon",
                                                        _vm.css.handleIcon
                                                      ])
                                                    )
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.extractName(field.name) ==
                                            "__checkbox"
                                              ? _c(
                                                  "td",
                                                  {
                                                    key: fieldIndex,
                                                    class: [
                                                      "vuetable-checkboxes",
                                                      field.dataClass
                                                    ]
                                                  },
                                                  [
                                                    _c("input", {
                                                      attrs: {
                                                        type: "checkbox"
                                                      },
                                                      domProps: {
                                                        checked: _vm.rowSelected(
                                                          item,
                                                          field.name
                                                        )
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          _vm.toggleCheckbox(
                                                            item,
                                                            field.name,
                                                            $event
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.extractName(field.name) ===
                                            "__component"
                                              ? _c(
                                                  "td",
                                                  {
                                                    key: fieldIndex,
                                                    class: [
                                                      "vuetable-component",
                                                      field.dataClass
                                                    ]
                                                  },
                                                  [
                                                    _c(
                                                      _vm.extractArgs(
                                                        field.name
                                                      ),
                                                      {
                                                        tag: "component",
                                                        attrs: {
                                                          "row-data": item,
                                                          "row-index": itemIndex,
                                                          "row-field":
                                                            field.sortField
                                                        }
                                                      }
                                                    )
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.extractName(field.name) ===
                                            "__slot"
                                              ? _c(
                                                  "td",
                                                  {
                                                    key: fieldIndex,
                                                    class: [
                                                      "vuetable-slot",
                                                      field.dataClass
                                                    ]
                                                  },
                                                  [
                                                    _vm._t(
                                                      _vm.extractArgs(
                                                        field.name
                                                      ),
                                                      null,
                                                      {
                                                        rowData: item,
                                                        rowIndex: itemIndex,
                                                        rowField:
                                                          field.sortField
                                                      }
                                                    )
                                                  ],
                                                  2
                                                )
                                              : _vm._e()
                                          ]
                                        : [
                                            _c("td", {
                                              key: fieldIndex,
                                              class: field.dataClass,
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.renderNormalField(
                                                    field,
                                                    item
                                                  )
                                                )
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.onCellClicked(
                                                    item,
                                                    field,
                                                    $event
                                                  )
                                                },
                                                dblclick: function($event) {
                                                  _vm.onCellDoubleClicked(
                                                    item,
                                                    field,
                                                    $event
                                                  )
                                                },
                                                contextmenu: function($event) {
                                                  _vm.onCellRightClicked(
                                                    item,
                                                    field,
                                                    $event
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                    ]
                                  : _vm._e()
                              ]
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.useDetailRow
                          ? [
                              _c(
                                "transition",
                                {
                                  key: itemIndex,
                                  attrs: { name: _vm.detailRowTransition }
                                },
                                [
                                  _vm.isVisibleDetailRow(item[_vm.trackBy])
                                    ? _c(
                                        "tr",
                                        {
                                          class: [_vm.css.detailRowClass],
                                          on: {
                                            click: function($event) {
                                              _vm.onDetailRowClick(item, $event)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "td",
                                            {
                                              attrs: {
                                                colspan: _vm.countVisibleFields
                                              }
                                            },
                                            [
                                              _c(_vm.detailRowComponent, {
                                                tag: "component",
                                                attrs: {
                                                  "row-data": item,
                                                  "row-index": itemIndex
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            ]
                          : _vm._e()
                      ]
                    }),
                    _vm._v(" "),
                    _vm.displayEmptyDataRow
                      ? [
                          _c("tr", [
                            _c("td", {
                              staticClass: "vuetable-empty-result",
                              attrs: { colspan: _vm.countVisibleFields },
                              domProps: {
                                innerHTML: _vm._s(_vm.noDataTemplate)
                              }
                            })
                          ])
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.lessThanMinRows
                      ? _vm._l(_vm.blankRows, function(i) {
                          return _c(
                            "tr",
                            { key: i, staticClass: "blank-row" },
                            [
                              _vm._l(_vm.tableFields, function(
                                field,
                                fieldIndex
                              ) {
                                return [
                                  field.visible
                                    ? _c("td", { key: fieldIndex }, [
                                        _vm._v(" ")
                                      ])
                                    : _vm._e()
                                ]
                              })
                            ],
                            2
                          )
                        })
                      : _vm._e()
                  ],
                  2
                )
              ]
            )
          ]
        )
      ])
    : _c("table", { class: ["vuetable", _vm.css.tableClass] }, [
        _c("thead", [
          _c(
            "tr",
            [
              _vm._l(_vm.tableFields, function(field, fieldIndex) {
                return [
                  field.visible
                    ? [
                        _vm.isSpecialField(field.name)
                          ? [
                              _vm.extractName(field.name) == "__checkbox"
                                ? _c(
                                    "th",
                                    {
                                      key: fieldIndex,
                                      class: [
                                        "vuetable-th-checkbox-" + _vm.trackBy,
                                        field.titleClass
                                      ],
                                      style: { width: field.width }
                                    },
                                    [
                                      _c("input", {
                                        attrs: { type: "checkbox" },
                                        domProps: {
                                          checked: _vm.checkCheckboxesState(
                                            field.name
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.toggleAllCheckboxes(
                                              field.name,
                                              $event
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.extractName(field.name) == "__component"
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-component-" + _vm.trackBy,
                                      field.titleClass,
                                      _vm.sortClass(field),
                                      { sortable: _vm.isSortable(field) }
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field))
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.orderBy(field, $event)
                                      }
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.extractName(field.name) == "__slot"
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-slot-" +
                                        _vm.extractArgs(field.name),
                                      field.titleClass,
                                      _vm.sortClass(field),
                                      { sortable: _vm.isSortable(field) }
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field))
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.orderBy(field, $event)
                                      }
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.extractName(field.name) == "__sequence"
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-sequence",
                                      field.titleClass || "",
                                      _vm.sortClass(field)
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field))
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.notIn(_vm.extractName(field.name), [
                                "__sequence",
                                "__checkbox",
                                "__component",
                                "__slot"
                              ])
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-" + field.name,
                                      field.titleClass || "",
                                      _vm.sortClass(field)
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field))
                                    }
                                  })
                                : _vm._e()
                            ]
                          : [
                              _c("th", {
                                key: fieldIndex,
                                class: [
                                  "vuetable-th-" + field.name,
                                  field.titleClass,
                                  _vm.sortClass(field),
                                  { sortable: _vm.isSortable(field) }
                                ],
                                style: { width: field.width },
                                attrs: { id: "_" + field.name },
                                domProps: {
                                  innerHTML: _vm._s(_vm.renderTitle(field))
                                },
                                on: {
                                  click: function($event) {
                                    _vm.orderBy(field, $event)
                                  }
                                }
                              })
                            ]
                      ]
                    : _vm._e()
                ]
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          { staticClass: "vuetable-body" },
          [
            _vm._l(_vm.tableData, function(item, itemIndex) {
              return [
                _c(
                  "tr",
                  {
                    key: itemIndex,
                    class: _vm.onRowClass(item, itemIndex),
                    attrs: {
                      "item-index": itemIndex,
                      render: _vm.onRowChanged(item)
                    },
                    on: {
                      dblclick: function($event) {
                        _vm.onRowDoubleClicked(item, $event)
                      },
                      click: function($event) {
                        _vm.onRowClicked(item, $event)
                      }
                    }
                  },
                  [
                    _vm._l(_vm.tableFields, function(field, fieldIndex) {
                      return [
                        field.visible
                          ? [
                              _vm.isSpecialField(field.name)
                                ? [
                                    _vm.extractName(field.name) == "__sequence"
                                      ? _c("td", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-sequence",
                                            field.dataClass
                                          ],
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderSequence(itemIndex)
                                            )
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__handle"
                                      ? _c("td", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-handle",
                                            field.dataClass
                                          ],
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderIconTag([
                                                "handle-icon",
                                                _vm.css.handleIcon
                                              ])
                                            )
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__checkbox"
                                      ? _c(
                                          "td",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-checkboxes",
                                              field.dataClass
                                            ]
                                          },
                                          [
                                            _c("input", {
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                checked: _vm.rowSelected(
                                                  item,
                                                  field.name
                                                )
                                              },
                                              on: {
                                                change: function($event) {
                                                  _vm.toggleCheckbox(
                                                    item,
                                                    field.name,
                                                    $event
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) ===
                                    "__component"
                                      ? _c(
                                          "td",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-component",
                                              field.dataClass
                                            ]
                                          },
                                          [
                                            _c(_vm.extractArgs(field.name), {
                                              tag: "component",
                                              attrs: {
                                                "row-data": item,
                                                "row-index": itemIndex,
                                                "row-field": field.sortField
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) === "__slot"
                                      ? _c(
                                          "td",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-slot",
                                              field.dataClass
                                            ]
                                          },
                                          [
                                            _vm._t(
                                              _vm.extractArgs(field.name),
                                              null,
                                              {
                                                rowData: item,
                                                rowIndex: itemIndex,
                                                rowField: field.sortField
                                              }
                                            )
                                          ],
                                          2
                                        )
                                      : _vm._e()
                                  ]
                                : [
                                    _vm.hasCallback(field)
                                      ? _c("td", {
                                          key: fieldIndex,
                                          class: field.dataClass,
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.callCallback(field, item)
                                            )
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.onCellClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            dblclick: function($event) {
                                              _vm.onCellDoubleClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            contextmenu: function($event) {
                                              _vm.onCellRightClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            }
                                          }
                                        })
                                      : _c("td", {
                                          key: fieldIndex,
                                          class: field.dataClass,
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.getObjectValue(
                                                item,
                                                field.name,
                                                ""
                                              )
                                            )
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.onCellClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            dblclick: function($event) {
                                              _vm.onCellDoubleClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            contextmenu: function($event) {
                                              _vm.onCellRightClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            }
                                          }
                                        })
                                  ]
                            ]
                          : _vm._e()
                      ]
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.useDetailRow
                  ? [
                      _c(
                        "transition",
                        {
                          key: itemIndex,
                          attrs: { name: _vm.detailRowTransition }
                        },
                        [
                          _vm.isVisibleDetailRow(item[_vm.trackBy])
                            ? _c(
                                "tr",
                                {
                                  class: [_vm.css.detailRowClass],
                                  on: {
                                    click: function($event) {
                                      _vm.onDetailRowClick(item, $event)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "td",
                                    {
                                      attrs: { colspan: _vm.countVisibleFields }
                                    },
                                    [
                                      _c(_vm.detailRowComponent, {
                                        tag: "component",
                                        attrs: {
                                          "row-data": item,
                                          "row-index": itemIndex
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    ]
                  : _vm._e()
              ]
            }),
            _vm._v(" "),
            _vm.displayEmptyDataRow
              ? [
                  _c("tr", [
                    _c("td", {
                      staticClass: "vuetable-empty-result",
                      attrs: { colspan: _vm.countVisibleFields },
                      domProps: { innerHTML: _vm._s(_vm.noDataTemplate) }
                    })
                  ])
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.lessThanMinRows
              ? _vm._l(_vm.blankRows, function(i) {
                  return _c(
                    "tr",
                    { key: i, staticClass: "blank-row" },
                    [
                      _vm._l(_vm.tableFields, function(field, fieldIndex) {
                        return [
                          field.visible
                            ? _c("td", { key: fieldIndex }, [_vm._v(" ")])
                            : _vm._e()
                        ]
                      })
                    ],
                    2
                  )
                })
              : _vm._e()
          ],
          2
        )
      ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=template&id=772d712a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=template&id=772d712a& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=template&id=f09ad966&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=template&id=f09ad966& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("apexcharts", {
    attrs: {
      width: "100%",
      height: "200px",
      type: "area",
      options: _vm.chartOptions,
      series: _vm.series
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=template&id=9a290186&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=template&id=9a290186& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("vuetable", {
        ref: "vuetable",
        attrs: { "api-url": "/retour/tables/dashboard", fields: _vm.fields },
        on: { "vuetable:pagination-data": _vm.onPaginationData }
      }),
      _vm._v(" "),
      _c("vuetable-pagination", {
        ref: "pagination",
        on: { "vuetable-pagination:change-page": _vm.onChangePage }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=template&id=1b582036&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=template&id=1b582036& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.tablePagination && _vm.tablePagination.last_page > 1,
          expression: "tablePagination && tablePagination.last_page > 1"
        }
      ],
      class: _vm.css.wrapperClass
    },
    [
      _c(
        "a",
        {
          class: [
            "btn-nav",
            _vm.css.linkClass,
            _vm.isOnFirstPage ? _vm.css.disabledClass : ""
          ],
          on: {
            click: function($event) {
              _vm.loadPage(1)
            }
          }
        },
        [
          _vm.css.icons.first != ""
            ? _c("i", { class: [_vm.css.icons.first] })
            : _c("span", [_vm._v("«")])
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          class: [
            "btn-nav",
            _vm.css.linkClass,
            _vm.isOnFirstPage ? _vm.css.disabledClass : ""
          ],
          on: {
            click: function($event) {
              _vm.loadPage("prev")
            }
          }
        },
        [
          _vm.css.icons.next != ""
            ? _c("i", { class: [_vm.css.icons.prev] })
            : _c("span", [_vm._v(" ‹")])
        ]
      ),
      _vm._v(" "),
      _vm.notEnoughPages
        ? [
            _vm._l(_vm.totalPage, function(n) {
              return [
                _c("a", {
                  class: [
                    _vm.css.pageClass,
                    _vm.isCurrentPage(n) ? _vm.css.activeClass : ""
                  ],
                  domProps: { innerHTML: _vm._s(n) },
                  on: {
                    click: function($event) {
                      _vm.loadPage(n)
                    }
                  }
                })
              ]
            })
          ]
        : [
            _vm._l(_vm.windowSize, function(n) {
              return [
                _c("a", {
                  class: [
                    _vm.css.pageClass,
                    _vm.isCurrentPage(_vm.windowStart + n - 1)
                      ? _vm.css.activeClass
                      : ""
                  ],
                  domProps: { innerHTML: _vm._s(_vm.windowStart + n - 1) },
                  on: {
                    click: function($event) {
                      _vm.loadPage(_vm.windowStart + n - 1)
                    }
                  }
                })
              ]
            })
          ],
      _vm._v(" "),
      _c(
        "a",
        {
          class: [
            "btn-nav",
            _vm.css.linkClass,
            _vm.isOnLastPage ? _vm.css.disabledClass : ""
          ],
          on: {
            click: function($event) {
              _vm.loadPage("next")
            }
          }
        },
        [
          _vm.css.icons.next != ""
            ? _c("i", { class: [_vm.css.icons.next] })
            : _c("span", [_vm._v("› ")])
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          class: [
            "btn-nav",
            _vm.css.linkClass,
            _vm.isOnLastPage ? _vm.css.disabledClass : ""
          ],
          on: {
            click: function($event) {
              _vm.loadPage(_vm.totalPage)
            }
          }
        },
        [
          _vm.css.icons.last != ""
            ? _c("i", { class: [_vm.css.icons.last] })
            : _c("span", [_vm._v("»")])
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetable-2/src/components/Vuetable.vue":
/*!*************************************************************!*\
  !*** ./node_modules/vuetable-2/src/components/Vuetable.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vuetable.vue?vue&type=template&id=15965e3b&scoped=true& */ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true&");
/* harmony import */ var _Vuetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vuetable.vue?vue&type=script&lang=js& */ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css& */ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Vuetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "15965e3b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vuetable-2/src/components/Vuetable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib??vue-loader-options!./Vuetable.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_index_js_ref_2_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_postcss_loader_lib_index_js_ref_2_3_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../mini-css-extract-plugin/dist/loader.js!../../../css-loader??ref--2-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../resolve-url-loader!../../../postcss-loader/lib??ref--2-3!../../../vue-loader/lib??vue-loader-options!./Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css&");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_index_js_ref_2_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_postcss_loader_lib_index_js_ref_2_3_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_index_js_ref_2_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_postcss_loader_lib_index_js_ref_2_3_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mini_css_extract_plugin_dist_loader_js_css_loader_index_js_ref_2_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_postcss_loader_lib_index_js_ref_2_3_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mini_css_extract_plugin_dist_loader_js_css_loader_index_js_ref_2_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_postcss_loader_lib_index_js_ref_2_3_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_mini_css_extract_plugin_dist_loader_js_css_loader_index_js_ref_2_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_postcss_loader_lib_index_js_ref_2_3_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib??vue-loader-options!./Vuetable.vue?vue&type=template&id=15965e3b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/assetbundles/retour/src/css/app.pcss":
/*!**************************************************!*\
  !*** ./src/assetbundles/retour/src/css/app.pcss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/Confetti.vue":
/*!******************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/Confetti.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Confetti_vue_vue_type_template_id_772d712a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Confetti.vue?vue&type=template&id=772d712a& */ "./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=template&id=772d712a&");
/* harmony import */ var _Confetti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Confetti.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Confetti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Confetti_vue_vue_type_template_id_772d712a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Confetti_vue_vue_type_template_id_772d712a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/Confetti.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confetti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Confetti.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confetti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=template&id=772d712a&":
/*!*************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=template&id=772d712a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Confetti_vue_vue_type_template_id_772d712a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Confetti.vue?vue&type=template&id=772d712a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=template&id=772d712a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Confetti_vue_vue_type_template_id_772d712a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Confetti_vue_vue_type_template_id_772d712a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/assetbundles/retour/src/vue/DashboardChart.vue":
/*!************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/DashboardChart.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardChart_vue_vue_type_template_id_f09ad966___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardChart.vue?vue&type=template&id=f09ad966& */ "./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=template&id=f09ad966&");
/* harmony import */ var _DashboardChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardChart.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardChart_vue_vue_type_template_id_f09ad966___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardChart_vue_vue_type_template_id_f09ad966___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/DashboardChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=template&id=f09ad966&":
/*!*******************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=template&id=f09ad966& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardChart_vue_vue_type_template_id_f09ad966___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardChart.vue?vue&type=template&id=f09ad966& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=template&id=f09ad966&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardChart_vue_vue_type_template_id_f09ad966___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardChart_vue_vue_type_template_id_f09ad966___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/assetbundles/retour/src/vue/DashboardTable.vue":
/*!************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/DashboardTable.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardTable_vue_vue_type_template_id_9a290186___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardTable.vue?vue&type=template&id=9a290186& */ "./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=template&id=9a290186&");
/* harmony import */ var _DashboardTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardTable.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardTable_vue_vue_type_template_id_9a290186___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardTable_vue_vue_type_template_id_9a290186___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/DashboardTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=template&id=9a290186&":
/*!*******************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=template&id=9a290186& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTable_vue_vue_type_template_id_9a290186___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardTable.vue?vue&type=template&id=9a290186& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=template&id=9a290186&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTable_vue_vue_type_template_id_9a290186___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTable_vue_vue_type_template_id_9a290186___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetablePagination.vue":
/*!****************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePagination.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuetablePagination_vue_vue_type_template_id_1b582036___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuetablePagination.vue?vue&type=template&id=1b582036& */ "./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=template&id=1b582036&");
/* harmony import */ var _VuetablePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VuetablePagination.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VuetablePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VuetablePagination_vue_vue_type_template_id_1b582036___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VuetablePagination_vue_vue_type_template_id_1b582036___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/VuetablePagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VuetablePagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=template&id=1b582036&":
/*!***********************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=template&id=1b582036& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePagination_vue_vue_type_template_id_1b582036___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VuetablePagination.vue?vue&type=template&id=1b582036& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=template&id=1b582036&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePagination_vue_vue_type_template_id_1b582036___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePagination_vue_vue_type_template_id_1b582036___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue":
/*!*********************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuetablePaginationMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuetablePaginationMixin.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _VuetablePaginationMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePaginationMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VuetablePaginationMixin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePaginationMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9Db25mZXR0aS52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkQ2hhcnQudnVlIiwid2VicGFjazovLy9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0Rhc2hib2FyZFRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9WdWV0YWJsZVBhZ2luYXRpb24udnVlIiwid2VicGFjazovLy9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWU/MzUxZCIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZT8yYTk5Iiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvQ29uZmV0dGkudnVlPzY1YmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9EYXNoYm9hcmRDaGFydC52dWU/ODVjYyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0Rhc2hib2FyZFRhYmxlLnZ1ZT9mNTFiIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVQYWdpbmF0aW9uLnZ1ZT9hYjRkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZT81MGRhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZT80NWQyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZT80ZGRlIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy9jc3MvYXBwLnBjc3M/NjBhOCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0NvbmZldHRpLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0NvbmZldHRpLnZ1ZT9jZjIzIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkQ2hhcnQudnVlIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkQ2hhcnQudnVlP2JiNTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9EYXNoYm9hcmRUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9EYXNoYm9hcmRUYWJsZS52dWU/MmY0NiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlUGFnaW5hdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9WdWV0YWJsZVBhZ2luYXRpb24udnVlPzViMjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9WdWV0YWJsZVBhZ2luYXRpb25NaXhpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9WdWV0YWJsZVBhZ2luYXRpb25NaXhpbi52dWU/NGM2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxJQUZBO0FBR0EsS0FOQTtBQU9BO0FBUEEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFNQSxDQVBBO0FBUUE7QUFDQTtBQUNBLGlCQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FOQSxFQU1BLEtBTkEsQ0FNQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLENBVkE7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREEsS0FEQTtBQUlBO0FBQ0EscUJBREE7QUFFQSx3QkFGQTtBQUdBO0FBSEEsS0FKQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQ0Esc0pBREE7O0FBQUE7QUFDQSxxQ0FEQTtBQUVBLHlDQUZBLEdBRUEsNENBRkE7QUFBQTtBQUFBLHVDQUdBO0FBQ0E7QUFDQSxpQ0FGQSxDQUhBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBRkEsS0FUQTtBQW1CQSxXQW5CQSxxQkFtQkE7QUFDQTtBQUNBLEtBckJBOztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQURBO0FBRUE7QUFDQTtBQURBLHFCQUZBO0FBS0E7QUFDQTtBQURBOztBQUxBLGlCQURBO0FBV0EsOENBWEE7QUFZQTtBQUNBLHFDQURBO0FBRUE7QUFGQSxpQkFaQTtBQWdCQTtBQUNBLGdDQURBO0FBRUE7QUFDQTtBQURBO0FBRkEsaUJBaEJBO0FBc0JBO0FBQ0E7QUFDQTtBQURBO0FBREEsaUJBdEJBO0FBMkJBO0FBQ0E7QUFEQSxpQkEzQkE7QUE4QkE7QUFDQSxvQ0FEQTtBQUVBLDhCQUZBO0FBR0E7QUFDQSx3Q0FEQTtBQUVBO0FBRkE7QUFIQSxpQkE5QkE7QUFzQ0E7QUFDQSx1Q0FEQTtBQUVBLDhCQUZBO0FBR0E7QUFDQSx3Q0FEQTtBQUVBO0FBRkE7QUFIQTtBQXRDQSxhQURBO0FBZ0RBLHFCQUNBO0FBQ0EsbUNBREE7QUFFQTtBQUZBLGFBREE7QUFoREE7QUF1REE7QUE5RUEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQSxTQURBO0FBRUE7QUFBQTtBQUFBO0FBRkEsS0FEQTtBQUtBLGFBTEE7QUFNQTtBQUNBO0FBQ0EscUJBQ0E7QUFDQSxzQ0FEQTtBQUVBLDJDQUZBO0FBR0EsK0NBSEE7QUFJQSxvQ0FKQTtBQUtBLG1DQUxBO0FBTUE7O0FBTkEsYUFEQSxFQVVBO0FBQ0EsbUNBREE7QUFFQSx3Q0FGQTtBQUdBLDBDQUhBO0FBSUEsb0NBSkE7QUFLQSxtQ0FMQTtBQU1BO0FBTkEsYUFWQSxFQWtCQTtBQUNBLGdDQURBO0FBRUEscUNBRkE7QUFHQSw2QkFIQTtBQUlBLG9DQUpBO0FBS0E7QUFMQSxhQWxCQSxFQXlCQTtBQUNBLG1DQURBO0FBRUEsd0NBRkE7QUFHQSxpQ0FIQTtBQUlBLG9DQUpBO0FBS0E7QUFMQSxhQXpCQSxFQWdDQTtBQUNBLHVDQURBO0FBRUEsd0NBRkE7QUFHQSxnQ0FIQTtBQUlBLG9DQUpBO0FBS0EsbUNBTEE7QUFNQTtBQU5BLGFBaENBLEVBd0NBO0FBQ0EsK0JBREE7QUFFQSxvQ0FGQTtBQUdBLHlCQUhBO0FBSUEsb0NBSkE7QUFLQSxtQ0FMQTtBQU1BO0FBTkEsYUF4Q0E7QUFEQTtBQW1EQSxLQTFEQTtBQTJEQTtBQUNBLHdCQURBLDRCQUNBLGNBREEsRUFDQTtBQUNBO0FBQ0EsU0FIQTtBQUlBLG9CQUpBLHdCQUlBLElBSkEsRUFJQTtBQUNBO0FBQ0EsU0FOQTtBQU9BLG9CQVBBLHdCQU9BLEtBUEEsRUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUNBLEtBREEsaUJBQ0EsS0FEQSxVQUNBLEtBREE7QUFHQSxTQWRBO0FBZUEscUJBZkEseUJBZUEsS0FmQSxFQWVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQSxTQXhCQTtBQXlCQSx1QkF6QkEsMkJBeUJBLEtBekJBLEVBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQWhDQTtBQTNEQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzJCQTs7QUFFQTtBQUNBO0FBREEsRzs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxhQUZBLHNCQUVBO0FBQ0E7QUFDQSxtRUFEQTtBQUVBLHFDQUZBO0FBR0EsbUNBSEE7QUFJQSwyQkFKQTtBQUtBLGdDQUxBO0FBTUEsNERBTkE7QUFPQSwwRUFQQTtBQVFBLDZDQVJBO0FBU0E7QUFDQSwyQ0FEQTtBQUVBLHFDQUZBO0FBR0Esc0NBSEE7QUFJQTtBQUpBO0FBVEE7QUFnQkE7QUFuQkEsS0FEQTtBQXNCQTtBQUNBLGtCQURBO0FBRUEsYUFGQSxzQkFFQTtBQUNBO0FBQ0E7QUFKQTtBQXRCQSxHQURBO0FBOEJBO0FBQ0E7QUFDQSx5Q0FEQTtBQUVBO0FBRkE7QUFJQSxHQW5DQTtBQW9DQTtBQUNBLGFBREEsdUJBQ0E7QUFDQSw2Q0FDQSxDQURBLEdBRUEsOEJBRkE7QUFHQSxLQUxBO0FBTUEsaUJBTkEsMkJBTUE7QUFDQSw2Q0FDQSxLQURBLEdBRUEsdUNBRkE7QUFHQSxLQVZBO0FBV0EsZ0JBWEEsMEJBV0E7QUFDQSw2Q0FDQSxLQURBLEdBRUEsb0VBRkE7QUFHQSxLQWZBO0FBZ0JBLGtCQWhCQSw0QkFnQkE7QUFDQTtBQUNBLEtBbEJBO0FBbUJBLGNBbkJBLHdCQW1CQTtBQUNBO0FBQ0EsS0FyQkE7QUFzQkEsZUF0QkEseUJBc0JBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQTlCQSxHQXBDQTtBQW9FQTtBQUNBLFlBREEsb0JBQ0EsSUFEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsaUJBSkEseUJBSUEsSUFKQSxFQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0EscUJBUEEsNkJBT0EsZUFQQSxFQU9BO0FBQ0E7QUFDQSxLQVRBO0FBVUEsYUFWQSx1QkFVQTtBQUNBO0FBQ0E7QUFaQTtBQXBFQSxHOzs7Ozs7Ozs7OztBQ0RBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3VUQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1d0NBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVDQUF1QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxzREFBc0QsbUJBQW1CO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0Esa0RBQWtELHFCQUFxQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0Esa0RBQWtELHFCQUFxQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxxQkFBcUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHFCQUFxQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLDhDQUE4QyxxQkFBcUI7QUFDbkUsOENBQThDLHVCQUF1QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFCQUFxQjtBQUM3RCx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0JBQStCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msa0NBQWtDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1DQUFtQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxrQkFBa0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQ0FBMEM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxnREFBZ0QsbUJBQW1CO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSx3Q0FBd0MscUJBQXFCO0FBQzdELHdDQUF3Qyx1QkFBdUI7QUFDL0Q7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrQkFBK0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxzREFBc0QsbUJBQW1CO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0M7QUFDaEUsaUNBQWlDO0FBQ2pDLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1DQUFtQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxrQkFBa0I7QUFDMUQ7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzU5QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQTREO0FBQzVFLGFBQWE7QUFDYixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUIsK0JBQStCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2Q0FBNkM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUJBQXVCLDhCQUE4QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSmtDO0FBQ2xDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFpQkE7QUFDQTtBQUNBLGdGOzs7Ozs7Ozs7Ozs7Ozt3Q0N2Q2lILDJMQUFvQixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTBPLHVZQUFvQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FuWSx1Qzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FrQztBQUNsQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQWlCQTtBQUNBO0FBQ0EsZ0Y7Ozs7Ozs7Ozs7Ozs7O3dDQ3RDa00scVBBQW9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcEw7QUFDbEM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFpQkE7QUFDQTtBQUNBLGdGOzs7Ozs7Ozs7Ozs7Ozt3Q0N0Q3dNLDJQQUFvQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTFMO0FBQ2xDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBaUJBO0FBQ0E7QUFDQSxnRjs7Ozs7Ozs7Ozs7Ozs7d0NDdEN3TSwyUEFBb0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ExTDtBQUNsQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQWlCQTtBQUNBO0FBQ0EsZ0Y7Ozs7Ozs7Ozs7Ozs7O3dDQ3RDNE0sK1BBQW9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQ0FoTztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFZQTtBQUNBO0FBQ0EsZ0Y7Ozs7Ozs7Ozs7Ozs7O3dDQ2pDaU4sb1FBQW9CLEMiLCJmaWxlIjoianMvc3R5bGVzLWxlZ2FjeS5jN2M5ZDBkNTljM2U3NjNjZDMyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8bWFpbj5cbiAgICA8L21haW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xuICAgIGltcG9ydCBWdWVDb25mZXR0aSBmcm9tICd2dWUtY29uZmV0dGknXG5cbiAgICBWdWUudXNlKFZ1ZUNvbmZldHRpKTtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLiRjb25mZXR0aS5zdGFydCgpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29uZmV0dGkuc3RvcCgpO1xuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxhcGV4Y2hhcnRzIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjIwMHB4XCIgdHlwZT1cImFyZWFcIiA6b3B0aW9ucz1cImNoYXJ0T3B0aW9uc1wiIDpzZXJpZXM9XCJzZXJpZXNcIj48L2FwZXhjaGFydHM+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gICAgY29uc3QgY2hhcnREYXRhQmFzZVVybCA9ICcvcmV0b3VyL2NoYXJ0cy9kYXNoYm9hcmQvJztcblxuICAgIC8vIENvbmZpZ3VyZSB0aGUgYXBpIGVuZHBvaW50XG4gICAgY29uc3QgY29uZmlndXJlQXBpID0gKHVybCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFzZVVSTDogdXJsLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLy8gUXVlcnkgb3VyIEFQSSBlbmRwb2ludCB2aWEgYW4gWEhSIEdFVFxuICAgIGNvbnN0IHF1ZXJ5QXBpID0gKGFwaSwgdXJpLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICBhcGkuZ2V0KHVyaVxuICAgICAgICApLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgLy8gT3VyIGNvbXBvbmVudCBleHBvcnRzXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnYXBleGNoYXJ0cyc6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFwZXhjaGFydHNcIiAqLyAndnVlLWFwZXhjaGFydHMnKVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgICAgICAgIHN1YlRpdGxlOiBTdHJpbmcsXG4gICAgICAgICAgICByYW5nZTogU3RyaW5nLFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAvLyBMb2FkIGluIG91ciBjaGFydCBkYXRhIGFzeW5jaHJvbm91c2x5XG4gICAgICAgICAgICBnZXRTZXJpZXNEYXRhOiBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvcyA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImF4aW9zXCIgKi8gJ2F4aW9zJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhcnRzQVBJID0gYXhpb3MuY3JlYXRlKGNvbmZpZ3VyZUFwaShjaGFydERhdGFCYXNlVXJsKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgcXVlcnlBcGkoY2hhcnRzQVBJLCB0aGlzLnJhbmdlLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmllcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VyaWVzRGF0YSgpO1xuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3Z1ZWNoYXJ0LWV4YW1wbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYXJrbGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBbJyMwMDhGRkInLCAnI0RDRTZFQyddLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiAnc3RyYWlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NoYWlyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FwZXhjaGFydHMteWF4aXMtdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnN1YlRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FwZXhjaGFydHMteWF4aXMtdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogWzBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDx2dWV0YWJsZSByZWY9XCJ2dWV0YWJsZVwiXG4gICAgICAgICAgICAgICAgICBhcGktdXJsPVwiL3JldG91ci90YWJsZXMvZGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgIDpmaWVsZHM9XCJmaWVsZHNcIlxuICAgICAgICAgICAgICAgICAgQHZ1ZXRhYmxlOnBhZ2luYXRpb24tZGF0YT1cIm9uUGFnaW5hdGlvbkRhdGFcIlxuICAgICAgICA+PC92dWV0YWJsZT5cbiAgICAgICAgPHZ1ZXRhYmxlLXBhZ2luYXRpb24gcmVmPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB2dWV0YWJsZS1wYWdpbmF0aW9uOmNoYW5nZS1wYWdlPVwib25DaGFuZ2VQYWdlXCJcbiAgICAgICAgPjwvdnVldGFibGUtcGFnaW5hdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgLy8gT3VyIGNvbXBvbmVudCBleHBvcnRzXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAndnVldGFibGUnOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ2dWV0YWJsZVwiICovICd2dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZScpLFxuICAgICAgICAgICAgJ3Z1ZXRhYmxlLXBhZ2luYXRpb24nOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ2dWV0YWJsZS1wYWdpbmF0aW9uXCIgKi8gJy4vVnVldGFibGVQYWdpbmF0aW9uLnZ1ZScpXG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7fSxcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVkaXJlY3RTcmNVcmwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkOiAncmVkaXJlY3RTcmNVcmwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICc0MDQgRmlsZSBOb3QgRm91bmQgVVJMJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlQ2xhc3M6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNsYXNzOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAndXJsRm9ybWF0dGVyJ1xuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZlcnJlclVybCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ6ICdyZWZlcnJlclVybCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0xhc3QgUmVmZXJyZXIgVVJMJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlQ2xhc3M6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNsYXNzOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAndXJsRm9ybWF0dGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaGl0Q291bnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkOiAnaGl0Q291bnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdIaXRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlQ2xhc3M6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNsYXNzOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2hpdExhc3RUaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZDogJ2hpdExhc3RUaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTGFzdCBIaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVDbGFzczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2xhc3M6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaGFuZGxlZEJ5UmV0b3VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZDogJ2hpdExhc3RUaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSGFuZGxlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUNsYXNzOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDbGFzczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogJ2Jvb2xGb3JtYXR0ZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRMaW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZDogJ2FkZExpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVDbGFzczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2xhc3M6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICdhZGRVcmxGb3JtYXR0ZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvblBhZ2luYXRpb25EYXRhIChwYWdpbmF0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGFnaW5hdGlvbi5zZXRQYWdpbmF0aW9uRGF0YShwYWdpbmF0aW9uRGF0YSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNoYW5nZVBhZ2UgKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnZ1ZXRhYmxlLmNoYW5nZVBhZ2UocGFnZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmxGb3JtYXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImdvXCIgaHJlZj1cIiR7dmFsdWV9XCIgdGl0bGU9XCIke3ZhbHVlfVwiPiR7dmFsdWV9PC9hPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9vbEZvcm1hdHRlcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IGdyZWVuO1wiPiYjeDI3MTQ7PC9zcGFuPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkO1wiPiYjeDI3MTY7PC9zcGFuPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkVXJsRm9ybWF0dGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhZGQgaWNvblwiIGhyZWY9XCJyZXRvdXIvYWRkXCIgdGl0bGU9XCJBZGRcIj48L2E+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgdi1zaG93PVwidGFibGVQYWdpbmF0aW9uICYmIHRhYmxlUGFnaW5hdGlvbi5sYXN0X3BhZ2UgPiAxXCIgOmNsYXNzPVwiY3NzLndyYXBwZXJDbGFzc1wiPlxyXG4gICAgPGEgQGNsaWNrPVwibG9hZFBhZ2UoMSlcIlxyXG4gICAgICA6Y2xhc3M9XCJbJ2J0bi1uYXYnLCBjc3MubGlua0NsYXNzLCBpc09uRmlyc3RQYWdlID8gY3NzLmRpc2FibGVkQ2xhc3MgOiAnJ11cIj5cclxuICAgICAgICA8aSB2LWlmPVwiY3NzLmljb25zLmZpcnN0ICE9ICcnXCIgOmNsYXNzPVwiW2Nzcy5pY29ucy5maXJzdF1cIj48L2k+XHJcbiAgICAgICAgPHNwYW4gdi1lbHNlPiZsYXF1bzs8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8YSBAY2xpY2s9XCJsb2FkUGFnZSgncHJldicpXCJcclxuICAgICAgOmNsYXNzPVwiWydidG4tbmF2JywgY3NzLmxpbmtDbGFzcywgaXNPbkZpcnN0UGFnZSA/IGNzcy5kaXNhYmxlZENsYXNzIDogJyddXCI+XHJcbiAgICAgICAgPGkgdi1pZj1cImNzcy5pY29ucy5uZXh0ICE9ICcnXCIgOmNsYXNzPVwiW2Nzcy5pY29ucy5wcmV2XVwiPjwvaT5cclxuICAgICAgICA8c3BhbiB2LWVsc2U+Jm5ic3A7JmxzYXF1bzs8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8dGVtcGxhdGUgdi1pZj1cIm5vdEVub3VnaFBhZ2VzXCI+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIm4gaW4gdG90YWxQYWdlXCI+XHJcbiAgICAgICAgPGEgQGNsaWNrPVwibG9hZFBhZ2UobilcIlxyXG4gICAgICAgICAgOmNsYXNzPVwiW2Nzcy5wYWdlQ2xhc3MsIGlzQ3VycmVudFBhZ2UobikgPyBjc3MuYWN0aXZlQ2xhc3MgOiAnJ11cIlxyXG4gICAgICAgICAgdi1odG1sPVwiblwiPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCJuIGluIHdpbmRvd1NpemVcIj5cclxuICAgICAgICA8YSBAY2xpY2s9XCJsb2FkUGFnZSh3aW5kb3dTdGFydCtuLTEpXCJcclxuICAgICAgICAgIDpjbGFzcz1cIltjc3MucGFnZUNsYXNzLCBpc0N1cnJlbnRQYWdlKHdpbmRvd1N0YXJ0K24tMSkgPyBjc3MuYWN0aXZlQ2xhc3MgOiAnJ11cIlxyXG4gICAgICAgICAgdi1odG1sPVwid2luZG93U3RhcnQrbi0xXCI+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICAgIDxhIEBjbGljaz1cImxvYWRQYWdlKCduZXh0JylcIlxyXG4gICAgICA6Y2xhc3M9XCJbJ2J0bi1uYXYnLCBjc3MubGlua0NsYXNzLCBpc09uTGFzdFBhZ2UgPyBjc3MuZGlzYWJsZWRDbGFzcyA6ICcnXVwiPlxyXG4gICAgICA8aSB2LWlmPVwiY3NzLmljb25zLm5leHQgIT0gJydcIiA6Y2xhc3M9XCJbY3NzLmljb25zLm5leHRdXCI+PC9pPlxyXG4gICAgICA8c3BhbiB2LWVsc2U+JnJzYXF1bzsmbmJzcDs8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8YSBAY2xpY2s9XCJsb2FkUGFnZSh0b3RhbFBhZ2UpXCJcclxuICAgICAgOmNsYXNzPVwiWydidG4tbmF2JywgY3NzLmxpbmtDbGFzcywgaXNPbkxhc3RQYWdlID8gY3NzLmRpc2FibGVkQ2xhc3MgOiAnJ11cIj5cclxuICAgICAgPGkgdi1pZj1cImNzcy5pY29ucy5sYXN0ICE9ICcnXCIgOmNsYXNzPVwiW2Nzcy5pY29ucy5sYXN0XVwiPjwvaT5cclxuICAgICAgPHNwYW4gdi1lbHNlPiZyYXF1bzs8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgUGFnaW5hdGlvbk1peGluIGZyb20gJy4vVnVldGFibGVQYWdpbmF0aW9uTWl4aW4udnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG1peGluczogW1BhZ2luYXRpb25NaXhpbl0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgY3NzOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHdyYXBwZXJDbGFzczogJ3Z1ZXRhYmxlIHVpIHJpZ2h0IGZsb2F0ZWQgcGFnaW5hdGlvbiBtZW51JyxcclxuICAgICAgICAgIGFjdGl2ZUNsYXNzOiAnYWN0aXZlIGxhcmdlJyxcclxuICAgICAgICAgIGRpc2FibGVkQ2xhc3M6ICdkaXNhYmxlZCcsXHJcbiAgICAgICAgICBwYWdlQ2xhc3M6ICdpdGVtJyxcclxuICAgICAgICAgIGxpbmtDbGFzczogJ2ljb24gaXRlbScsXHJcbiAgICAgICAgICBwYWdpbmF0aW9uQ2xhc3M6ICd1aSBib3R0b20gYXR0YWNoZWQgc2VnbWVudCBncmlkJyxcclxuICAgICAgICAgIHBhZ2luYXRpb25JbmZvQ2xhc3M6ICdsZWZ0IGZsb2F0ZWQgbGVmdCBhbGlnbmVkIHNpeCB3aWRlIGNvbHVtbicsXHJcbiAgICAgICAgICBkcm9wZG93bkNsYXNzOiAndWkgc2VhcmNoIGRyb3Bkb3duJyxcclxuICAgICAgICAgIGljb25zOiB7XHJcbiAgICAgICAgICAgIGZpcnN0OiAnYW5nbGUgZG91YmxlIGxlZnQgaWNvbicsXHJcbiAgICAgICAgICAgIHByZXY6ICdsZWZ0IGNoZXZyb24gaWNvbicsXHJcbiAgICAgICAgICAgIG5leHQ6ICdyaWdodCBjaGV2cm9uIGljb24nLFxyXG4gICAgICAgICAgICBsYXN0OiAnYW5nbGUgZG91YmxlIHJpZ2h0IGljb24nLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRWFjaFNpZGU6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4gMlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBldmVudFByZWZpeDogJ3Z1ZXRhYmxlLXBhZ2luYXRpb246JyxcclxuICAgICAgdGFibGVQYWdpbmF0aW9uOiBudWxsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgdG90YWxQYWdlICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVQYWdpbmF0aW9uID09PSBudWxsXHJcbiAgICAgICAgPyAwXHJcbiAgICAgICAgOiB0aGlzLnRhYmxlUGFnaW5hdGlvbi5sYXN0X3BhZ2VcclxuICAgIH0sXHJcbiAgICBpc09uRmlyc3RQYWdlICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVQYWdpbmF0aW9uID09PSBudWxsXHJcbiAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgIDogdGhpcy50YWJsZVBhZ2luYXRpb24uY3VycmVudF9wYWdlID09PSAxXHJcbiAgICB9LFxyXG4gICAgaXNPbkxhc3RQYWdlICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVQYWdpbmF0aW9uID09PSBudWxsXHJcbiAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgIDogdGhpcy50YWJsZVBhZ2luYXRpb24uY3VycmVudF9wYWdlID09PSB0aGlzLnRhYmxlUGFnaW5hdGlvbi5sYXN0X3BhZ2VcclxuICAgIH0sXHJcbiAgICBub3RFbm91Z2hQYWdlcyAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvdGFsUGFnZSA8ICh0aGlzLm9uRWFjaFNpZGUgKiAyKSArIDRcclxuICAgIH0sXHJcbiAgICB3aW5kb3dTaXplICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub25FYWNoU2lkZSAqIDIgKzE7XHJcbiAgICB9LFxyXG4gICAgd2luZG93U3RhcnQgKCkge1xyXG4gICAgICBpZiAoIXRoaXMudGFibGVQYWdpbmF0aW9uIHx8IHRoaXMudGFibGVQYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSA8PSB0aGlzLm9uRWFjaFNpZGUpIHtcclxuICAgICAgICByZXR1cm4gMVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGFibGVQYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSA+PSAodGhpcy50b3RhbFBhZ2UgLSB0aGlzLm9uRWFjaFNpZGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxQYWdlIC0gdGhpcy5vbkVhY2hTaWRlKjJcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVQYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSAtIHRoaXMub25FYWNoU2lkZVxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGxvYWRQYWdlIChwYWdlKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCsnY2hhbmdlLXBhZ2UnLCBwYWdlKVxyXG4gICAgfSxcclxuICAgIGlzQ3VycmVudFBhZ2UgKHBhZ2UpIHtcclxuICAgICAgcmV0dXJuIHBhZ2UgPT09IHRoaXMudGFibGVQYWdpbmF0aW9uLmN1cnJlbnRfcGFnZVxyXG4gICAgfSxcclxuICAgIHNldFBhZ2luYXRpb25EYXRhICh0YWJsZVBhZ2luYXRpb24pIHtcclxuICAgICAgdGhpcy50YWJsZVBhZ2luYXRpb24gPSB0YWJsZVBhZ2luYXRpb25cclxuICAgIH0sXHJcbiAgICByZXNldERhdGEgKCkge1xyXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IG51bGxcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIjx0ZW1wbGF0ZT5cclxuPGRpdiB2LWlmPVwiaXNGaXhlZEhlYWRlclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJ2dWV0YWJsZS1oZWFkLXdyYXBwZXJcIj5cclxuICAgIDx0YWJsZSA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlJywgY3NzLnRhYmxlQ2xhc3MsIGNzcy50YWJsZUhlYWRlckNsYXNzXVwiPlxyXG4gICAgPHRoZWFkPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmaWVsZC52aXNpYmxlXCI+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NoZWNrYm94J1wiXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLWNoZWNrYm94LScrdHJhY2tCeSwgZmllbGQudGl0bGVDbGFzc11cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBAY2hhbmdlPVwidG9nZ2xlQWxsQ2hlY2tib3hlcyhmaWVsZC5uYW1lLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJjaGVja0NoZWNrYm94ZXNTdGF0ZShmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jb21wb25lbnQnXCJcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtY29tcG9uZW50LScrdHJhY2tCeSwgZmllbGQudGl0bGVDbGFzcywgc29ydENsYXNzKGZpZWxkKSwgeydzb3J0YWJsZSc6IGlzU29ydGFibGUoZmllbGQpfV1cIlxyXG4gICAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cIm9yZGVyQnkoZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgID48L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2xvdCdcIlxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1zbG90LScrZXh0cmFjdEFyZ3MoZmllbGQubmFtZSksIGZpZWxkLnRpdGxlQ2xhc3MsIHNvcnRDbGFzcyhmaWVsZCksIHsnc29ydGFibGUnOiBpc1NvcnRhYmxlKGZpZWxkKX1dXCJcclxuICAgICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX3NlcXVlbmNlJ1wiXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLXNlcXVlbmNlJywgZmllbGQudGl0bGVDbGFzcyB8fCAnJ11cIiB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIj5cclxuICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCB2LWlmPVwibm90SW4oZXh0cmFjdE5hbWUoZmllbGQubmFtZSksIFsnX19zZXF1ZW5jZScsICdfX2NoZWNrYm94JywgJ19fY29tcG9uZW50JywgJ19fc2xvdCddKVwiXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLScrZmllbGQubmFtZSwgZmllbGQudGl0bGVDbGFzcyB8fCAnJ11cIiB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIj5cclxuICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICAgIDx0aCBAY2xpY2s9XCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDppZD1cIidfJyArIGZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC0nK2ZpZWxkLm5hbWUsIGZpZWxkLnRpdGxlQ2xhc3MsIHNvcnRDbGFzcyhmaWVsZCksIHsnc29ydGFibGUnOiBpc1NvcnRhYmxlKGZpZWxkKX1dXCJcclxuICAgICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPHRoIHYtaWY9XCJzY3JvbGxWaXNpYmxlXCIgOnN0eWxlPVwie3dpZHRoOiBzY3JvbGxCYXJXaWR0aH1cIiBjbGFzcz1cInZ1ZXRhYmxlLWd1dHRlci1jb2xcIj48L3RoPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90aGVhZD5cclxuICAgIDwvdGFibGU+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInZ1ZXRhYmxlLWJvZHktd3JhcHBlclwiIDpzdHlsZT1cIntoZWlnaHQ6IHRhYmxlSGVpZ2h0fVwiPlxyXG4gICAgPHRhYmxlIDpjbGFzcz1cIlsndnVldGFibGUnLCBjc3MudGFibGVDbGFzcywgY3NzLnRhYmxlQm9keUNsYXNzXVwiPlxyXG4gICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmaWVsZC52aXNpYmxlXCI+XHJcbiAgICAgICAgICAgIDxjb2xcclxuICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgOmlkPVwiJ19jb2xfJyArIGZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLScrZmllbGQubmFtZSwgZmllbGQudGl0bGVDbGFzc11cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L2NvbGdyb3VwPlxyXG4gICAgICA8dGJvZHkgdi1jbG9hayBjbGFzcz1cInZ1ZXRhYmxlLWJvZHlcIj5cclxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaXRlbSwgaXRlbUluZGV4KSBpbiB0YWJsZURhdGFcIj5cclxuICAgICAgICAgIDx0ciBcclxuICAgICAgICAgICAgOmtleT1cIml0ZW1JbmRleFwiXHJcbiAgICAgICAgICAgIDppdGVtLWluZGV4PVwiaXRlbUluZGV4XCIgXHJcbiAgICAgICAgICAgIDpyZW5kZXI9XCJvblJvd0NoYW5nZWQoaXRlbSlcIiBcclxuICAgICAgICAgICAgOmNsYXNzPVwib25Sb3dDbGFzcyhpdGVtLCBpdGVtSW5kZXgpXCJcclxuICAgICAgICAgICAgQGNsaWNrPVwib25Sb3dDbGlja2VkKGl0ZW0sICRldmVudClcIiBcclxuICAgICAgICAgICAgQGRibGNsaWNrPVwib25Sb3dEb3VibGVDbGlja2VkKGl0ZW0sICRldmVudClcIiBcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZmllbGQudmlzaWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX3NlcXVlbmNlJ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXNlcXVlbmNlJywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyU2VxdWVuY2UoaXRlbUluZGV4KVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2hhbmRsZSdcIiBcclxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1oYW5kbGUnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJJY29uVGFnKFsnaGFuZGxlLWljb24nLCBjc3MuaGFuZGxlSWNvbl0pXCJcclxuICAgICAgICAgICAgICAgICAgPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fY2hlY2tib3gnXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtY2hlY2tib3hlcycsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwidG9nZ2xlQ2hlY2tib3goaXRlbSwgZmllbGQubmFtZSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cInJvd1NlbGVjdGVkKGl0ZW0sIGZpZWxkLm5hbWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09ICdfX2NvbXBvbmVudCdcIiBcclxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1jb21wb25lbnQnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiZXh0cmFjdEFyZ3MoZmllbGQubmFtZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOnJvdy1kYXRhPVwiaXRlbVwiIDpyb3ctaW5kZXg9XCJpdGVtSW5kZXhcIiA6cm93LWZpZWxkPVwiZmllbGQuc29ydEZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09ICdfX3Nsb3QnXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtc2xvdCcsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgOm5hbWU9XCJleHRyYWN0QXJncyhmaWVsZC5uYW1lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6cm93LWRhdGE9XCJpdGVtXCIgOnJvdy1pbmRleD1cIml0ZW1JbmRleFwiIDpyb3ctZmllbGQ9XCJmaWVsZC5zb3J0RmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L3Nsb3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgPHRkIDpjbGFzcz1cImZpZWxkLmRhdGFDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlck5vcm1hbEZpZWxkKGZpZWxkLCBpdGVtKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib25DZWxsQ2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGRibGNsaWNrPVwib25DZWxsRG91YmxlQ2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNvbnRleHRtZW51PVwib25DZWxsUmlnaHRDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ1c2VEZXRhaWxSb3dcIj5cclxuICAgICAgICAgICAgPHRyYW5zaXRpb24gOm5hbWU9XCJkZXRhaWxSb3dUcmFuc2l0aW9uXCIgOmtleT1cIml0ZW1JbmRleFwiPlxyXG4gICAgICAgICAgICAgIDx0ciB2LWlmPVwiaXNWaXNpYmxlRGV0YWlsUm93KGl0ZW1bdHJhY2tCeV0pXCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIltjc3MuZGV0YWlsUm93Q2xhc3NdXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uRGV0YWlsUm93Q2xpY2soaXRlbSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHRkIDpjb2xzcGFuPVwiY291bnRWaXNpYmxlRmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiZGV0YWlsUm93Q29tcG9uZW50XCIgOnJvdy1kYXRhPVwiaXRlbVwiIDpyb3ctaW5kZXg9XCJpdGVtSW5kZXhcIj48L2NvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZGlzcGxheUVtcHR5RGF0YVJvd1wiPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQgOmNvbHNwYW49XCJjb3VudFZpc2libGVGaWVsZHNcIiBjbGFzcz1cInZ1ZXRhYmxlLWVtcHR5LXJlc3VsdFwiIHYtaHRtbD1cIm5vRGF0YVRlbXBsYXRlXCI+PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImxlc3NUaGFuTWluUm93c1wiPlxyXG4gICAgICAgICAgPHRyIHYtZm9yPVwiaSBpbiBibGFua1Jvd3NcIiBjbGFzcz1cImJsYW5rLXJvd1wiIDprZXk9XCJpXCI+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcIj5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImZpZWxkLnZpc2libGVcIiA6a2V5PVwiZmllbGRJbmRleFwiPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPHRhYmxlIHYtZWxzZSA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlJywgY3NzLnRhYmxlQ2xhc3NdXCI+IDwhLS0gbm8gZml4ZWQgaGVhZGVyIC0gcmVndWxhciB0YWJsZSAtLT5cclxuICA8dGhlYWQ+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcIj5cclxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpZWxkLnZpc2libGVcIj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgPHRoIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jaGVja2JveCdcIlxyXG4gICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1jaGVja2JveC0nK3RyYWNrQnksIGZpZWxkLnRpdGxlQ2xhc3NdXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBAY2hhbmdlPVwidG9nZ2xlQWxsQ2hlY2tib3hlcyhmaWVsZC5uYW1lLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIDpjaGVja2VkPVwiY2hlY2tDaGVja2JveGVzU3RhdGUoZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jb21wb25lbnQnXCJcclxuICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtY29tcG9uZW50LScrdHJhY2tCeSwgZmllbGQudGl0bGVDbGFzcywgc29ydENsYXNzKGZpZWxkKSwgeydzb3J0YWJsZSc6IGlzU29ydGFibGUoZmllbGQpfV1cIlxyXG4gICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgQGNsaWNrPVwib3JkZXJCeShmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L3RoPlxyXG4gICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX3Nsb3QnXCJcclxuICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtc2xvdC0nK2V4dHJhY3RBcmdzKGZpZWxkLm5hbWUpLCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVwiXHJcbiAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgICBAY2xpY2s9XCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgIDx0aCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2VxdWVuY2UnXCJcclxuICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtc2VxdWVuY2UnLCBmaWVsZC50aXRsZUNsYXNzIHx8ICcnLCBzb3J0Q2xhc3MoZmllbGQpXVwiIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgID48L3RoPlxyXG4gICAgICAgICAgICA8dGggdi1pZj1cIm5vdEluKGV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpLCBbJ19fc2VxdWVuY2UnLCAnX19jaGVja2JveCcsICdfX2NvbXBvbmVudCcsICdfX3Nsb3QnXSlcIlxyXG4gICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC0nK2ZpZWxkLm5hbWUsIGZpZWxkLnRpdGxlQ2xhc3MgfHwgJycsIHNvcnRDbGFzcyhmaWVsZCldXCIgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgPHRoIEBjbGljaz1cIm9yZGVyQnkoZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICA6aWQ9XCInXycgKyBmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC0nK2ZpZWxkLm5hbWUsIGZpZWxkLnRpdGxlQ2xhc3MsIHNvcnRDbGFzcyhmaWVsZCksICB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVwiXHJcbiAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGhlYWQ+XHJcbiAgPHRib2R5IHYtY2xvYWsgY2xhc3M9XCJ2dWV0YWJsZS1ib2R5XCI+XHJcbiAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaXRlbSwgaXRlbUluZGV4KSBpbiB0YWJsZURhdGFcIj5cclxuICAgICAgPHRyIEBkYmxjbGljaz1cIm9uUm93RG91YmxlQ2xpY2tlZChpdGVtLCAkZXZlbnQpXCIgXHJcbiAgICAgICAgOmtleT1cIml0ZW1JbmRleFwiXHJcbiAgICAgICAgOml0ZW0taW5kZXg9XCJpdGVtSW5kZXhcIiBcclxuICAgICAgICA6cmVuZGVyPVwib25Sb3dDaGFuZ2VkKGl0ZW0pXCIgXHJcbiAgICAgICAgOmNsYXNzPVwib25Sb3dDbGFzcyhpdGVtLCBpdGVtSW5kZXgpXCJcclxuICAgICAgICBAY2xpY2s9XCJvblJvd0NsaWNrZWQoaXRlbSwgJGV2ZW50KVwiIFxyXG4gICAgICA+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmaWVsZC52aXNpYmxlXCI+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX3NlcXVlbmNlJ1wiIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1zZXF1ZW5jZScsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyU2VxdWVuY2UoaXRlbUluZGV4KVwiXHJcbiAgICAgICAgICAgICAgPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19oYW5kbGUnXCIgXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLWhhbmRsZScsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVySWNvblRhZyhbJ2hhbmRsZS1pY29uJywgY3NzLmhhbmRsZUljb25dKVwiXHJcbiAgICAgICAgICAgICAgPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jaGVja2JveCdcIiBcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtY2hlY2tib3hlcycsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICBAY2hhbmdlPVwidG9nZ2xlQ2hlY2tib3goaXRlbSwgZmllbGQubmFtZSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVwicm93U2VsZWN0ZWQoaXRlbSwgZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09ICdfX2NvbXBvbmVudCdcIiBcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtY29tcG9uZW50JywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJleHRyYWN0QXJncyhmaWVsZC5uYW1lKVwiXHJcbiAgICAgICAgICAgICAgICAgIDpyb3ctZGF0YT1cIml0ZW1cIiA6cm93LWluZGV4PVwiaXRlbUluZGV4XCIgOnJvdy1maWVsZD1cImZpZWxkLnNvcnRGaWVsZFwiXHJcbiAgICAgICAgICAgICAgICA+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PSAnX19zbG90J1wiIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1zbG90JywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNsb3QgOm5hbWU9XCJleHRyYWN0QXJncyhmaWVsZC5uYW1lKVwiXHJcbiAgICAgICAgICAgICAgICAgIDpyb3ctZGF0YT1cIml0ZW1cIiA6cm93LWluZGV4PVwiaXRlbUluZGV4XCIgOnJvdy1maWVsZD1cImZpZWxkLnNvcnRGaWVsZFwiXHJcbiAgICAgICAgICAgICAgICA+PC9zbG90PlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJoYXNDYWxsYmFjayhmaWVsZClcIiBcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cImZpZWxkLmRhdGFDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICB2LWh0bWw9XCJjYWxsQ2FsbGJhY2soZmllbGQsIGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uQ2VsbENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgQGRibGNsaWNrPVwib25DZWxsRG91YmxlQ2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBAY29udGV4dG1lbnU9XCJvbkNlbGxSaWdodENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgID48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWVsc2UgXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJmaWVsZC5kYXRhQ2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgdi1odG1sPVwiZ2V0T2JqZWN0VmFsdWUoaXRlbSwgZmllbGQubmFtZSwgJycpXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uQ2VsbENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgQGRibGNsaWNrPVwib25DZWxsRG91YmxlQ2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBAY29udGV4dG1lbnU9XCJvbkNlbGxSaWdodENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgID48L3RkPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cInVzZURldGFpbFJvd1wiPlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIDpuYW1lPVwiZGV0YWlsUm93VHJhbnNpdGlvblwiIDprZXk9XCJpdGVtSW5kZXhcIj5cclxuICAgICAgICAgIDx0ciB2LWlmPVwiaXNWaXNpYmxlRGV0YWlsUm93KGl0ZW1bdHJhY2tCeV0pXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwiW2Nzcy5kZXRhaWxSb3dDbGFzc11cIlxyXG4gICAgICAgICAgICBAY2xpY2s9XCJvbkRldGFpbFJvd0NsaWNrKGl0ZW0sICRldmVudClcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGQgOmNvbHNwYW49XCJjb3VudFZpc2libGVGaWVsZHNcIj5cclxuICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cImRldGFpbFJvd0NvbXBvbmVudFwiIDpyb3ctZGF0YT1cIml0ZW1cIiA6cm93LWluZGV4PVwiaXRlbUluZGV4XCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1pZj1cImRpc3BsYXlFbXB0eURhdGFSb3dcIj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZCA6Y29sc3Bhbj1cImNvdW50VmlzaWJsZUZpZWxkc1wiIGNsYXNzPVwidnVldGFibGUtZW1wdHktcmVzdWx0XCIgdi1odG1sPVwibm9EYXRhVGVtcGxhdGVcIj48L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwibGVzc1RoYW5NaW5Sb3dzXCI+XHJcbiAgICAgIDx0ciB2LWZvcj1cImkgaW4gYmxhbmtSb3dzXCIgY2xhc3M9XCJibGFuay1yb3dcIiA6a2V5PVwiaVwiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcIj5cclxuICAgICAgICAgIDx0ZCB2LWlmPVwiZmllbGQudmlzaWJsZVwiIDprZXk9XCJmaWVsZEluZGV4XCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICA8L3Rib2R5PlxyXG48L3RhYmxlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbG9hZE9uU3RhcnQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFwaVVybDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfSxcclxuICAgIGh0dHBNZXRob2Q6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ2dldCcsXHJcbiAgICAgICAgdmFsaWRhdG9yOiAodmFsdWUpID0+IHtcclxuICAgICAgICAgIHJldHVybiBbJ2dldCcsICdwb3N0J10uaW5kZXhPZih2YWx1ZSkgPiAtMVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWFjdGl2ZUFwaVVybDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFwaU1vZGU6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgdHlwZTogW0FycmF5LCBPYmplY3RdLFxyXG4gICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICB9LFxyXG4gICAgZGF0YVRvdGFsOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdDogMFxyXG4gICAgfSxcclxuICAgIGRhdGFNYW5hZ2VyOiB7XHJcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICB9LFxyXG4gICAgZGF0YVBhdGg6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ2RhdGEnXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvblBhdGg6IHtcclxuICAgICAgICB0eXBlOiBbU3RyaW5nXSxcclxuICAgICAgICBkZWZhdWx0OiAnbGlua3MucGFnaW5hdGlvbidcclxuICAgIH0sXHJcbiAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICB0eXBlOiBbT2JqZWN0LCBGdW5jdGlvbl0sXHJcbiAgICAgIGRlZmF1bHQgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzb3J0OiAnc29ydCcsXHJcbiAgICAgICAgICBwYWdlOiAncGFnZScsXHJcbiAgICAgICAgICBwZXJQYWdlOiAncGVyX3BhZ2UnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXBwZW5kUGFyYW1zOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBodHRwT3B0aW9uczoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQgKCkge1xyXG4gICAgICAgIHJldHVybiB7fVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaHR0cEZldGNoOiB7XHJcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICB9LFxyXG4gICAgcGVyUGFnZToge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICBkZWZhdWx0OiAxMFxyXG4gICAgfSxcclxuICAgIGluaXRpYWxQYWdlOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdDogMVxyXG4gICAgfSxcclxuICAgIHNvcnRPcmRlcjoge1xyXG4gICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtdWx0aVNvcnQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0YWJsZUhlaWdodDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgIH0sXHJcbiAgICAvKlxyXG4gICAgICogcGh5c2ljYWwga2V5IHRoYXQgd2lsbCB0cmlnZ2VyIG11bHRpLXNvcnQgb3B0aW9uXHJcbiAgICAgKiBwb3NzaWJsZSB2YWx1ZXM6ICdhbHQnLCAnY3RybCcsICdtZXRhJywgJ3NoaWZ0J1xyXG4gICAgICogJ2N0cmwnIG1pZ2h0IG5vdCB3b3JrIGFzIGV4cGVjdGVkIG9uIE1hY1xyXG4gICAgICovXHJcbiAgICBtdWx0aVNvcnRLZXk6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnYWx0J1xyXG4gICAgfSxcclxuICAgIC8qIGRlcHJlY2F0ZWQgKi9cclxuICAgIHJvd0NsYXNzQ2FsbGJhY2s6IHtcclxuICAgICAgdHlwZTogW1N0cmluZywgRnVuY3Rpb25dLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfSxcclxuICAgIHJvd0NsYXNzOiB7XHJcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEZ1bmN0aW9uXSxcclxuICAgICAgZGVmYXVsdDogJydcclxuICAgIH0sXHJcbiAgICBkZXRhaWxSb3dDb21wb25lbnQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfSxcclxuICAgIGRldGFpbFJvd1RyYW5zaXRpb246IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfSxcclxuICAgIHRyYWNrQnk6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnaWQnXHJcbiAgICB9LFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRhYmxlQ2xhc3M6ICd1aSBibHVlIHNlbGVjdGFibGUgY2VsbGVkIHN0YWNrYWJsZSBhdHRhY2hlZCB0YWJsZScsXHJcbiAgICAgICAgICBsb2FkaW5nQ2xhc3M6ICdsb2FkaW5nJyxcclxuICAgICAgICAgIGFzY2VuZGluZ0ljb246ICdibHVlIGNoZXZyb24gdXAgaWNvbicsXHJcbiAgICAgICAgICBkZXNjZW5kaW5nSWNvbjogJ2JsdWUgY2hldnJvbiBkb3duIGljb24nLFxyXG4gICAgICAgICAgYXNjZW5kaW5nQ2xhc3M6ICdzb3J0ZWQtYXNjJyxcclxuICAgICAgICAgIGRlc2NlbmRpbmdDbGFzczogJ3NvcnRlZC1kZXNjJyxcclxuICAgICAgICAgIHNvcnRhYmxlSWNvbjogJycsXHJcbiAgICAgICAgICBkZXRhaWxSb3dDbGFzczogJ3Z1ZXRhYmxlLWRldGFpbC1yb3cnLFxyXG4gICAgICAgICAgaGFuZGxlSWNvbjogJ2dyZXkgc2lkZWJhciBpY29uJyxcclxuICAgICAgICAgIHRhYmxlQm9keUNsYXNzOiAndnVldGFibGUtc2VtYW50aWMtbm8tdG9wIHZ1ZXRhYmxlLWZpeGVkLWxheW91dCcsXHJcbiAgICAgICAgICB0YWJsZUhlYWRlckNsYXNzOiAndnVldGFibGUtZml4ZWQtbGF5b3V0J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1pblJvd3M6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAwXHJcbiAgICB9LFxyXG4gICAgc2lsZW50OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgbm9EYXRhVGVtcGxhdGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0KCkge1xyXG4gICAgICAgIHJldHVybiAnTm8gRGF0YSBBdmFpbGFibGUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93U29ydEljb25zOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXZlbnRQcmVmaXg6ICd2dWV0YWJsZTonLFxyXG4gICAgICB0YWJsZUZpZWxkczogW10sXHJcbiAgICAgIHRhYmxlRGF0YTogbnVsbCxcclxuICAgICAgdGFibGVQYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5pbml0aWFsUGFnZSxcclxuICAgICAgc2VsZWN0ZWRUbzogW10sXHJcbiAgICAgIHZpc2libGVEZXRhaWxSb3dzOiBbXSxcclxuICAgICAgbGFzdFNjcm9sbFBvc2l0aW9uOiAwLFxyXG4gICAgICBzY3JvbGxCYXJXaWR0aDogJzE3cHgnLCAvL2Nocm9tZSBkZWZhdWx0XHJcbiAgICAgIHNjcm9sbFZpc2libGU6IGZhbHNlLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCAoKSB7XHJcbiAgICB0aGlzLm5vcm1hbGl6ZUZpZWxkcygpXHJcbiAgICB0aGlzLm5vcm1hbGl6ZVNvcnRPcmRlcigpXHJcbiAgICBpZiAodGhpcy5pc0ZpeGVkSGVhZGVyKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsQmFyV2lkdGggPSB0aGlzLmdldFNjcm9sbEJhcldpZHRoKCkgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdpbml0aWFsaXplZCcsIHRoaXMudGFibGVGaWVsZHMpXHJcbiAgICB9KVxyXG5cclxuICAgIGlmICh0aGlzLmxvYWRPblN0YXJ0KSB7XHJcbiAgICAgIHRoaXMubG9hZERhdGEoKVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNGaXhlZEhlYWRlcikge1xyXG4gICAgICBsZXQgZWxlbSA9IHRoaXMuJGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Z1ZXRhYmxlLWJvZHktd3JhcHBlcicpWzBdO1xyXG4gICAgICBpZiAoZWxlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGRlc3Ryb3llZCAoKSB7XHJcbiAgICBsZXQgZWxlbSA9IHRoaXMuJGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Z1ZXRhYmxlLWJvZHktd3JhcHBlcicpWzBdO1xyXG4gICAgaWYgKGVsZW0gIT0gbnVsbCkge1xyXG4gICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICB2ZXJzaW9uOiAoKSA9PiBWRVJTSU9OLFxyXG4gICAgdXNlRGV0YWlsUm93ICgpIHtcclxuICAgICAgaWYgKHRoaXMudGFibGVEYXRhICYmIHRoaXMudGFibGVEYXRhWzBdICYmIHRoaXMuZGV0YWlsUm93Q29tcG9uZW50ICE9PSAnJyAmJiB0eXBlb2YgdGhpcy50YWJsZURhdGFbMF1bdGhpcy50cmFja0J5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aGlzLndhcm4oJ1lvdSBuZWVkIHRvIGRlZmluZSB1bmlxdWUgcm93IGlkZW50aWZpZXIgaW4gb3JkZXIgZm9yIGRldGFpbC1yb3cgZmVhdHVyZSB0byB3b3JrLiBVc2UgYHRyYWNrLWJ5YCBwcm9wIHRvIGRlZmluZSBvbmUhJylcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuZGV0YWlsUm93Q29tcG9uZW50ICE9PSAnJ1xyXG4gICAgfSxcclxuICAgIGNvdW50VmlzaWJsZUZpZWxkcyAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlRmllbGRzLmZpbHRlcihmdW5jdGlvbihmaWVsZCkge1xyXG4gICAgICAgIHJldHVybiBmaWVsZC52aXNpYmxlXHJcbiAgICAgIH0pLmxlbmd0aFxyXG4gICAgfSxcclxuICAgIGNvdW50VGFibGVEYXRhICgpIHtcclxuICAgICAgaWYgKHRoaXMudGFibGVEYXRhID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIDBcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy50YWJsZURhdGEubGVuZ3RoXHJcbiAgICB9LFxyXG4gICAgZGlzcGxheUVtcHR5RGF0YVJvdyAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvdW50VGFibGVEYXRhID09PSAwICYmIHRoaXMubm9EYXRhVGVtcGxhdGUubGVuZ3RoID4gMFxyXG4gICAgfSxcclxuICAgIGxlc3NUaGFuTWluUm93cyAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YSA9PT0gbnVsbCB8fCB0aGlzLnRhYmxlRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlRGF0YS5sZW5ndGggPCB0aGlzLm1pblJvd3NcclxuICAgIH0sXHJcbiAgICBibGFua1Jvd3MgKCkge1xyXG4gICAgICBpZiAodGhpcy50YWJsZURhdGEgPT09IG51bGwgfHwgdGhpcy50YWJsZURhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWluUm93c1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YS5sZW5ndGggPj0gdGhpcy5taW5Sb3dzKSB7XHJcbiAgICAgICAgcmV0dXJuIDBcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMubWluUm93cyAtIHRoaXMudGFibGVEYXRhLmxlbmd0aFxyXG4gICAgfSxcclxuICAgIGlzQXBpTW9kZSAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFwaU1vZGVcclxuICAgIH0sXHJcbiAgICBpc0RhdGFNb2RlICgpIHtcclxuICAgICAgcmV0dXJuICEgdGhpcy5hcGlNb2RlXHJcbiAgICB9LFxyXG4gICAgaXNGaXhlZEhlYWRlciAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlSGVpZ2h0ICE9IG51bGxcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGdldFNjcm9sbEJhcldpZHRoICgpIHtcclxuICAgICAgY29uc3Qgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3QgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgb3V0ZXIuc3R5bGUud2lkdGggPSAnMTAwcHgnO1xyXG5cclxuICAgICAgaW5uZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcblxyXG5cclxuICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcclxuXHJcblxyXG4gICAgICBjb25zdCB3aWR0aFdpdGhvdXRTY3JvbGxiYXIgPSBvdXRlci5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XHJcblxyXG4gICAgICBjb25zdCB3aWR0aFdpdGhTY3JvbGxiYXIgPSBpbm5lci5vZmZzZXRXaWR0aDtcclxuXHJcblxyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG91dGVyKTtcclxuXHJcblxyXG4gICAgICByZXR1cm4gKHdpZHRoV2l0aG91dFNjcm9sbGJhciAtIHdpZHRoV2l0aFNjcm9sbGJhcik7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlU2Nyb2xsIChlKSB7IC8vbWFrZSBzdXJlIHRoYXQgdGhlIGhlYWRlciBhbmQgdGhlIGJvZHkgYXJlIGFsaWduZWQgd2hlbiBzY3JvbGxpbmcgaG9yaXpvbnRhbGx5IG9uIGEgdGFibGUgdGhhdCBpcyB3aWRlciB0aGFuIHRoZSB2aWV3cG9ydFxyXG4gICAgICBsZXQgaG9yaXpvbnRhbCA9IGUuY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0O1xyXG4gICAgICBpZiAoaG9yaXpvbnRhbCAhPSB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbikgeyAvL2Rvbid0IG1vZGlmeSBoZWFkZXIgc2Nyb2xsIGlmIHdlIGFyZSBzY3JvbGxpbmcgdmVydGljYWxseVxyXG4gICAgICAgIGxldCBoZWFkZXIgPSB0aGlzLiRlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2dWV0YWJsZS1oZWFkLXdyYXBwZXInKVswXVxyXG4gICAgICAgIGlmIChoZWFkZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgaGVhZGVyLnNjcm9sbExlZnQgPSBob3Jpem9udGFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9IGhvcml6b250YWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgbm9ybWFsaXplRmllbGRzICgpIHtcclxuICAgICAgaWYgKHR5cGVvZih0aGlzLmZpZWxkcykgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdGhpcy53YXJuKCdZb3UgbmVlZCB0byBwcm92aWRlIFwiZmllbGRzXCIgcHJvcC4nKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRhYmxlRmllbGRzID0gW11cclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIGxldCBvYmpcclxuICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmdW5jdGlvbihmaWVsZCwgaSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGZpZWxkKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgbmFtZTogZmllbGQsXHJcbiAgICAgICAgICAgIHRpdGxlOiBzZWxmLnNldFRpdGxlKGZpZWxkKSxcclxuICAgICAgICAgICAgdGl0bGVDbGFzczogJycsXHJcbiAgICAgICAgICAgIGRhdGFDbGFzczogJycsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXHJcbiAgICAgICAgICAgIHdpZHRoOiBmaWVsZC53aWR0aCxcclxuICAgICAgICAgICAgdGl0bGU6IChmaWVsZC50aXRsZSA9PT0gdW5kZWZpbmVkKSA/IHNlbGYuc2V0VGl0bGUoZmllbGQubmFtZSkgOiBmaWVsZC50aXRsZSxcclxuICAgICAgICAgICAgc29ydEZpZWxkOiBmaWVsZC5zb3J0RmllbGQsXHJcbiAgICAgICAgICAgIHRpdGxlQ2xhc3M6IChmaWVsZC50aXRsZUNsYXNzID09PSB1bmRlZmluZWQpID8gJycgOiBmaWVsZC50aXRsZUNsYXNzLFxyXG4gICAgICAgICAgICBkYXRhQ2xhc3M6IChmaWVsZC5kYXRhQ2xhc3MgPT09IHVuZGVmaW5lZCkgPyAnJyA6IGZpZWxkLmRhdGFDbGFzcyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChmaWVsZC5jYWxsYmFjayA9PT0gdW5kZWZpbmVkKSA/ICcnIDogZmllbGQuY2FsbGJhY2ssXHJcbiAgICAgICAgICAgIHZpc2libGU6IChmaWVsZC52aXNpYmxlID09PSB1bmRlZmluZWQpID8gdHJ1ZSA6IGZpZWxkLnZpc2libGUsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYudGFibGVGaWVsZHMucHVzaChvYmopXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc2V0RGF0YSAoZGF0YSkge1xyXG4gICAgICBpZiAoZGF0YSA9PT0gbnVsbCB8fCB0eXBlb2YoZGF0YSkgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cclxuXHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkaW5nJylcclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGEgPSBkYXRhXHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWRlZCcpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy5nZXRPYmplY3RWYWx1ZShkYXRhLCB0aGlzLmRhdGFQYXRoLCBudWxsKVxyXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IHRoaXMuZ2V0T2JqZWN0VmFsdWUoZGF0YSwgdGhpcy5wYWdpbmF0aW9uUGF0aCwgbnVsbClcclxuXHJcbiAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZml4SGVhZGVyKClcclxuICAgICAgICB0aGlzLmZpcmVFdmVudCgncGFnaW5hdGlvbi1kYXRhJywgdGhpcy50YWJsZVBhZ2luYXRpb24pXHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWRlZCcpXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc2V0VGl0bGUgKHN0cikge1xyXG4gICAgICBpZiAodGhpcy5pc1NwZWNpYWxGaWVsZChzdHIpKSB7XHJcbiAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnRpdGxlQ2FzZShzdHIpXHJcbiAgICB9LFxyXG4gICAgZ2V0VGl0bGUgKGZpZWxkKSB7XHJcbiAgICAgIGlmICh0eXBlb2YoZmllbGQudGl0bGUpID09PSAnZnVuY3Rpb24nKSByZXR1cm4gZmllbGQudGl0bGUoKVxyXG5cclxuICAgICAgcmV0dXJuIHR5cGVvZihmaWVsZC50aXRsZSkgPT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyBmaWVsZC5uYW1lLnJlcGxhY2UoJy4nLCAnICcpXHJcbiAgICAgICAgOiBmaWVsZC50aXRsZVxyXG4gICAgfSxcclxuICAgIHJlbmRlclRpdGxlIChmaWVsZCkge1xyXG4gICAgICBsZXQgdGl0bGUgPSB0aGlzLmdldFRpdGxlKGZpZWxkKVxyXG5cclxuICAgICAgaWYgKHRpdGxlLmxlbmd0aCA+IDAgJiYgdGhpcy5pc0luQ3VycmVudFNvcnRHcm91cChmaWVsZCkgfHwgdGhpcy5oYXNTb3J0YWJsZUljb24oZmllbGQpKSB7XHJcbiAgICAgICAgbGV0IHN0eWxlID0gYG9wYWNpdHk6JHt0aGlzLnNvcnRJY29uT3BhY2l0eShmaWVsZCl9O3Bvc2l0aW9uOnJlbGF0aXZlO2Zsb2F0OnJpZ2h0YFxyXG4gICAgICAgIGxldCBpY29uVGFnID0gdGhpcy5zaG93U29ydEljb25zID8gdGhpcy5yZW5kZXJJY29uVGFnKFsnc29ydC1pY29uJywgdGhpcy5zb3J0SWNvbihmaWVsZCldLCBgc3R5bGU9XCIke3N0eWxlfVwiYCkgOiAnJ1xyXG4gICAgICAgIHJldHVybiB0aXRsZSArICcgJyArIGljb25UYWdcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRpdGxlXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyU2VxdWVuY2UgKGluZGV4KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlUGFnaW5hdGlvblxyXG4gICAgICAgID8gdGhpcy50YWJsZVBhZ2luYXRpb24uZnJvbSArIGluZGV4XHJcbiAgICAgICAgOiBpbmRleFxyXG4gICAgfSxcclxuICAgIHJlbmRlck5vcm1hbEZpZWxkIChmaWVsZCwgaXRlbSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5oYXNDYWxsYmFjayhmaWVsZClcclxuICAgICAgICA/IHRoaXMuY2FsbENhbGxiYWNrKGZpZWxkLCBpdGVtKVxyXG4gICAgICAgIDogdGhpcy5nZXRPYmplY3RWYWx1ZShpdGVtLCBmaWVsZC5uYW1lLCAnJylcclxuICAgIH0sXHJcbiAgICBpc1NwZWNpYWxGaWVsZCAoZmllbGROYW1lKSB7XHJcbiAgICAgIHJldHVybiBmaWVsZE5hbWUuc2xpY2UoMCwgMikgPT09ICdfXydcclxuICAgIH0sXHJcbiAgICB0aXRsZUNhc2UgKHN0cikge1xyXG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcdysvZywgZnVuY3Rpb24odHh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGNhbWVsQ2FzZSAoc3RyLCBkZWxpbWl0ZXIgPSAnXycpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIHJldHVybiBzdHIuc3BsaXQoZGVsaW1pdGVyKS5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBzZWxmLnRpdGxlQ2FzZShpdGVtKVxyXG4gICAgICB9KS5qb2luKCcnKVxyXG4gICAgfSxcclxuICAgIG5vdEluIChzdHIsIGFycikge1xyXG4gICAgICByZXR1cm4gYXJyLmluZGV4T2Yoc3RyKSA9PT0gLTFcclxuICAgIH0sXHJcbiAgICBsb2FkRGF0YSAoc3VjY2VzcyA9IHRoaXMubG9hZFN1Y2Nlc3MsIGZhaWxlZCA9IHRoaXMubG9hZEZhaWxlZCkge1xyXG4gICAgICBpZiAodGhpcy5pc0RhdGFNb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRGF0YU1hbmFnZXIoKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZGluZycpXHJcblxyXG4gICAgICB0aGlzLmh0dHBPcHRpb25zWydwYXJhbXMnXSA9IHRoaXMuZ2V0QXBwZW5kUGFyYW1zKCB0aGlzLmdldEFsbFF1ZXJ5UGFyYW1zKCkgKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuZmV0Y2godGhpcy5hcGlVcmwsIHRoaXMuaHR0cE9wdGlvbnMpLnRoZW4oXHJcbiAgICAgICAgICBzdWNjZXNzLFxyXG4gICAgICAgICAgZmFpbGVkXHJcbiAgICAgICkuY2F0Y2goKCkgPT4gZmFpbGVkKCkpXHJcbiAgICB9LFxyXG4gICAgZmV0Y2ggKGFwaVVybCwgaHR0cE9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cEZldGNoXHJcbiAgICAgICAgICA/IHRoaXMuaHR0cEZldGNoKGFwaVVybCwgaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgICA6IGF4aW9zW3RoaXMuaHR0cE1ldGhvZF0oYXBpVXJsLCBodHRwT3B0aW9ucylcclxuICAgIH0sXHJcbiAgICBsb2FkU3VjY2VzcyAocmVzcG9uc2UpIHtcclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWQtc3VjY2VzcycsIHJlc3BvbnNlKVxyXG5cclxuICAgICAgbGV0IGJvZHkgPSB0aGlzLnRyYW5zZm9ybShyZXNwb25zZS5kYXRhKVxyXG5cclxuICAgICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLmdldE9iamVjdFZhbHVlKGJvZHksIHRoaXMuZGF0YVBhdGgsIG51bGwpXHJcbiAgICAgIHRoaXMudGFibGVQYWdpbmF0aW9uID0gdGhpcy5nZXRPYmplY3RWYWx1ZShib2R5LCB0aGlzLnBhZ2luYXRpb25QYXRoLCBudWxsKVxyXG5cclxuICAgICAgaWYgKHRoaXMudGFibGVQYWdpbmF0aW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy53YXJuKCd2dWV0YWJsZTogcGFnaW5hdGlvbi1wYXRoIFwiJyArIHRoaXMucGFnaW5hdGlvblBhdGggKyAnXCIgbm90IGZvdW5kLiAnXHJcbiAgICAgICAgICArICdJdCBsb29rcyBsaWtlIHRoZSBkYXRhIHJldHVybmVkIGZyb20gdGhlIHNldmVyIGRvZXMgbm90IGhhdmUgcGFnaW5hdGlvbiBpbmZvcm1hdGlvbiAnXHJcbiAgICAgICAgICArIFwib3IgeW91IG1heSBoYXZlIHNldCBpdCBpbmNvcnJlY3RseS5cXG5cIlxyXG4gICAgICAgICAgKyAnWW91IGNhbiBleHBsaWNpdGx5IHN1cHByZXNzIHRoaXMgd2FybmluZyBieSBzZXR0aW5nIHBhZ2luYXRpb24tcGF0aD1cIlwiLidcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZml4SGVhZGVyKClcclxuICAgICAgICB0aGlzLmZpcmVFdmVudCgncGFnaW5hdGlvbi1kYXRhJywgdGhpcy50YWJsZVBhZ2luYXRpb24pXHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWRlZCcpXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZml4SGVhZGVyKCkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNGaXhlZEhlYWRlcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGVsZW0gPSB0aGlzLiRlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2dWV0YWJsZS1ib2R5LXdyYXBwZXInKVswXVxyXG4gICAgICBpZiAoZWxlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGVsZW0uc2Nyb2xsSGVpZ2h0ID4gZWxlbS5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbG9hZEZhaWxlZCAocmVzcG9uc2UpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignbG9hZC1lcnJvcicsIHJlc3BvbnNlKVxyXG4gICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZC1lcnJvcicsIHJlc3BvbnNlKVxyXG4gICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZGVkJylcclxuICAgIH0sXHJcbiAgICB0cmFuc2Zvcm0gKGRhdGEpIHtcclxuICAgICAgbGV0IGZ1bmMgPSAndHJhbnNmb3JtJ1xyXG5cclxuICAgICAgaWYgKHRoaXMucGFyZW50RnVuY3Rpb25FeGlzdHMoZnVuYykpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLiRwYXJlbnRbZnVuY10uY2FsbCh0aGlzLiRwYXJlbnQsIGRhdGEpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBkYXRhXHJcbiAgICB9LFxyXG4gICAgcGFyZW50RnVuY3Rpb25FeGlzdHMgKGZ1bmMpIHtcclxuICAgICAgcmV0dXJuIChmdW5jICE9PSAnJyAmJiB0eXBlb2YgdGhpcy4kcGFyZW50W2Z1bmNdID09PSAnZnVuY3Rpb24nKVxyXG4gICAgfSxcclxuICAgIGNhbGxQYXJlbnRGdW5jdGlvbiAoZnVuYywgYXJncywgZGVmYXVsdFZhbHVlID0gbnVsbCkge1xyXG4gICAgICBpZiAodGhpcy5wYXJlbnRGdW5jdGlvbkV4aXN0cyhmdW5jKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRwYXJlbnRbZnVuY10uY2FsbCh0aGlzLiRwYXJlbnQsIGFyZ3MpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVcclxuICAgIH0sXHJcbiAgICBmaXJlRXZlbnQgKGV2ZW50TmFtZSwgYXJncykge1xyXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXggKyBldmVudE5hbWUsIGFyZ3MpXHJcbiAgICB9LFxyXG4gICAgd2FybiAobXNnKSB7XHJcbiAgICAgIGlmICghdGhpcy5zaWxlbnQpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4obXNnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0QWxsUXVlcnlQYXJhbXMgKCkge1xyXG4gICAgICBsZXQgcGFyYW1zID0ge31cclxuXHJcbiAgICAgIGlmICh0eXBlb2YodGhpcy5xdWVyeVBhcmFtcykgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBwYXJhbXMgPSB0aGlzLnF1ZXJ5UGFyYW1zKHRoaXMuc29ydE9yZGVyLCB0aGlzLmN1cnJlbnRQYWdlLCB0aGlzLnBlclBhZ2UpXHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZihwYXJhbXMpICE9PSAnb2JqZWN0JyA/IHt9IDogcGFyYW1zXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1zLnNvcnRdID0gdGhpcy5nZXRTb3J0UGFyYW0oKVxyXG4gICAgICBwYXJhbXNbdGhpcy5xdWVyeVBhcmFtcy5wYWdlXSA9IHRoaXMuY3VycmVudFBhZ2VcclxuICAgICAgcGFyYW1zW3RoaXMucXVlcnlQYXJhbXMucGVyUGFnZV0gPSB0aGlzLnBlclBhZ2VcclxuXHJcbiAgICAgIHJldHVybiBwYXJhbXNcclxuICAgIH0sXHJcbiAgICBnZXRTb3J0UGFyYW0gKCkge1xyXG4gICAgICBpZiAoIXRoaXMuc29ydE9yZGVyIHx8IHRoaXMuc29ydE9yZGVyLmZpZWxkID09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy4kcGFyZW50WydnZXRTb3J0UGFyYW0nXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRwYXJlbnRbJ2dldFNvcnRQYXJhbSddLmNhbGwodGhpcy4kcGFyZW50LCB0aGlzLnNvcnRPcmRlcilcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVmYXVsdFNvcnRQYXJhbSgpXHJcbiAgICB9LFxyXG4gICAgZ2V0RGVmYXVsdFNvcnRQYXJhbSAoKSB7XHJcbiAgICAgIGxldCByZXN1bHQgPSAnJztcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zb3J0T3JkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZmllbGROYW1lID0gKHR5cGVvZiB0aGlzLnNvcnRPcmRlcltpXS5zb3J0RmllbGQgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgPyB0aGlzLnNvcnRPcmRlcltpXS5maWVsZFxyXG4gICAgICAgICAgOiB0aGlzLnNvcnRPcmRlcltpXS5zb3J0RmllbGQ7XHJcblxyXG4gICAgICAgIHJlc3VsdCArPSBmaWVsZE5hbWUgKyAnfCcgKyB0aGlzLnNvcnRPcmRlcltpXS5kaXJlY3Rpb24gKyAoKGkrMSkgPCB0aGlzLnNvcnRPcmRlci5sZW5ndGggPyAnLCcgOiAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sXHJcbiAgICBnZXRBcHBlbmRQYXJhbXMgKHBhcmFtcykge1xyXG4gICAgICBmb3IgKGxldCB4IGluIHRoaXMuYXBwZW5kUGFyYW1zKSB7XHJcbiAgICAgICAgcGFyYW1zW3hdID0gdGhpcy5hcHBlbmRQYXJhbXNbeF1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHBhcmFtc1xyXG4gICAgfSxcclxuICAgIGV4dHJhY3ROYW1lIChzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgnOicpWzBdLnRyaW0oKVxyXG4gICAgfSxcclxuICAgIGV4dHJhY3RBcmdzIChzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgnOicpWzFdXHJcbiAgICB9LFxyXG4gICAgaXNTb3J0YWJsZSAoZmllbGQpIHtcclxuICAgICAgcmV0dXJuICEodHlwZW9mIGZpZWxkLnNvcnRGaWVsZCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICB9LFxyXG4gICAgaXNJbkN1cnJlbnRTb3J0R3JvdXAgKGZpZWxkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTb3J0T3JkZXJQb3NpdGlvbihmaWVsZCkgIT09IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGhhc1NvcnRhYmxlSWNvbiAoZmllbGQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaXNTb3J0YWJsZShmaWVsZCkgJiYgdGhpcy5jc3Muc29ydGFibGVJY29uICE9ICcnXHJcbiAgICB9LFxyXG4gICAgY3VycmVudFNvcnRPcmRlclBvc2l0aW9uIChmaWVsZCkge1xyXG4gICAgICBpZiAoICEgdGhpcy5pc1NvcnRhYmxlKGZpZWxkKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc29ydE9yZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGRJc0luU29ydE9yZGVyUG9zaXRpb24oZmllbGQsIGkpKSB7XHJcbiAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBmaWVsZElzSW5Tb3J0T3JkZXJQb3NpdGlvbiAoZmllbGQsIGkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc29ydE9yZGVyW2ldLmZpZWxkID09PSBmaWVsZC5uYW1lICYmIHRoaXMuc29ydE9yZGVyW2ldLnNvcnRGaWVsZCA9PT0gZmllbGQuc29ydEZpZWxkXHJcbiAgICB9LFxyXG4gICAgb3JkZXJCeSAoZmllbGQsIGV2ZW50KSB7XHJcbiAgICAgIGlmICggISB0aGlzLmlzU29ydGFibGUoZmllbGQpICkgcmV0dXJuXHJcblxyXG4gICAgICBsZXQga2V5ID0gdGhpcy5tdWx0aVNvcnRLZXkudG9Mb3dlckNhc2UoKSArICdLZXknXHJcblxyXG4gICAgICBpZiAodGhpcy5tdWx0aVNvcnQgJiYgZXZlbnRba2V5XSkgeyAvL2FkZGluZyBjb2x1bW4gdG8gbXVsdGlzb3J0XHJcbiAgICAgICAgdGhpcy5tdWx0aUNvbHVtblNvcnQoZmllbGQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9ubyBtdWx0aXNvcnQsIG9yIHJlc2V0dGluZyBzb3J0XHJcbiAgICAgICAgdGhpcy5zaW5nbGVDb2x1bW5Tb3J0KGZpZWxkKVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMSAgICAvLyByZXNldCBwYWdlIGluZGV4XHJcbiAgICAgIGlmICh0aGlzLmFwaU1vZGUgfHwgdGhpcy5kYXRhTWFuYWdlcikge1xyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbXVsdGlDb2x1bW5Tb3J0IChmaWVsZCkge1xyXG4gICAgICBsZXQgaSA9IHRoaXMuY3VycmVudFNvcnRPcmRlclBvc2l0aW9uKGZpZWxkKTtcclxuXHJcbiAgICAgIGlmKGkgPT09IGZhbHNlKSB7IC8vdGhpcyBmaWVsZCBpcyBub3QgaW4gdGhlIHNvcnQgYXJyYXkgeWV0XHJcbiAgICAgICAgdGhpcy5zb3J0T3JkZXIucHVzaCh7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQubmFtZSxcclxuICAgICAgICAgIHNvcnRGaWVsZDogZmllbGQuc29ydEZpZWxkLFxyXG4gICAgICAgICAgZGlyZWN0aW9uOiAnYXNjJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgeyAvL3RoaXMgZmllbGQgaXMgaW4gdGhlIHNvcnQgYXJyYXksIG5vdyB3ZSBjaGFuZ2UgaXRzIHN0YXRlXHJcbiAgICAgICAgaWYodGhpcy5zb3J0T3JkZXJbaV0uZGlyZWN0aW9uID09PSAnYXNjJykge1xyXG4gICAgICAgICAgLy8gc3dpdGNoIGRpcmVjdGlvblxyXG4gICAgICAgICAgdGhpcy5zb3J0T3JkZXJbaV0uZGlyZWN0aW9uID0gJ2Rlc2MnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vcmVtb3ZlIHNvcnQgY29uZGl0aW9uXHJcbiAgICAgICAgICB0aGlzLnNvcnRPcmRlci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2luZ2xlQ29sdW1uU29ydCAoZmllbGQpIHtcclxuICAgICAgaWYgKHRoaXMuc29ydE9yZGVyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTb3J0T3JkZXIoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNvcnRPcmRlci5zcGxpY2UoMSk7IC8vcmVtb3ZlcyBhZGRpdGlvbmFsIGNvbHVtbnNcclxuXHJcbiAgICAgIGlmICh0aGlzLmZpZWxkSXNJblNvcnRPcmRlclBvc2l0aW9uKGZpZWxkLCAwKSkge1xyXG4gICAgICAgIC8vIGNoYW5nZSBzb3J0IGRpcmVjdGlvblxyXG4gICAgICAgIHRoaXMuc29ydE9yZGVyWzBdLmRpcmVjdGlvbiA9IHRoaXMuc29ydE9yZGVyWzBdLmRpcmVjdGlvbiA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJ1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHJlc2V0IHNvcnQgZGlyZWN0aW9uXHJcbiAgICAgICAgdGhpcy5zb3J0T3JkZXJbMF0uZGlyZWN0aW9uID0gJ2FzYydcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNvcnRPcmRlclswXS5maWVsZCA9IGZpZWxkLm5hbWVcclxuICAgICAgdGhpcy5zb3J0T3JkZXJbMF0uc29ydEZpZWxkID0gZmllbGQuc29ydEZpZWxkXHJcbiAgICB9LFxyXG4gICAgY2xlYXJTb3J0T3JkZXIgKCkge1xyXG4gICAgICB0aGlzLnNvcnRPcmRlci5wdXNoKHtcclxuICAgICAgICBmaWVsZDogJycsXHJcbiAgICAgICAgc29ydEZpZWxkOiAnJyxcclxuICAgICAgICBkaXJlY3Rpb246ICdhc2MnXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNvcnRDbGFzcyAoZmllbGQpIHtcclxuICAgICAgbGV0IGNscyA9ICcnXHJcbiAgICAgIGxldCBpID0gdGhpcy5jdXJyZW50U29ydE9yZGVyUG9zaXRpb24oZmllbGQpXHJcblxyXG4gICAgICBpZiAoaSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBjbHMgPSAodGhpcy5zb3J0T3JkZXJbaV0uZGlyZWN0aW9uID09ICdhc2MnKSA/IHRoaXMuY3NzLmFzY2VuZGluZ0NsYXNzIDogdGhpcy5jc3MuZGVzY2VuZGluZ0NsYXNzXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjbHNcclxuICAgIH0sXHJcbiAgICBzb3J0SWNvbiAoZmllbGQpIHtcclxuICAgICAgbGV0IGNscyA9IHRoaXMuY3NzLnNvcnRhYmxlSWNvblxyXG4gICAgICBsZXQgaSA9IHRoaXMuY3VycmVudFNvcnRPcmRlclBvc2l0aW9uKGZpZWxkKVxyXG5cclxuICAgICAgaWYgKGkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgY2xzID0gKHRoaXMuc29ydE9yZGVyW2ldLmRpcmVjdGlvbiA9PSAnYXNjJykgPyB0aGlzLmNzcy5hc2NlbmRpbmdJY29uIDogdGhpcy5jc3MuZGVzY2VuZGluZ0ljb25cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNscztcclxuICAgIH0sXHJcbiAgICBzb3J0SWNvbk9wYWNpdHkgKGZpZWxkKSB7XHJcbiAgICAgIC8qXHJcbiAgICAgICAqIGZpZWxkcyB3aXRoIHN0cm9uZ2VyIHByZWNlZGVuY2UgaGF2ZSBkYXJrZXIgY29sb3JcclxuICAgICAgICpcclxuICAgICAgICogaWYgdGhlcmUgYXJlIGZldyBmaWVsZHMsIHdlIGdvIGRvd24gYnkgMC4zXHJcbiAgICAgICAqIGV4LiAyIGZpZWxkcyBhcmUgc2VsZWN0ZWQ6IDEuMCwgMC43XHJcbiAgICAgICAqXHJcbiAgICAgICAqIGlmIHRoZXJlIGFyZSBtb3JlIHdlIGdvIGRvd24gZXZlbmx5IG9uIHRoZSBnaXZlbiBzcGVjdHJ1bVxyXG4gICAgICAgKiBleC4gNiBmaWVsZHMgYXJlIHNlbGVjdGVkOiAxLjAsIDAuODYsIDAuNzIsIDAuNTgsIDAuNDQsIDAuM1xyXG4gICAgICAgKi9cclxuICAgICAgbGV0IG1heCA9IDEuMCxcclxuICAgICAgICAgIG1pbiA9IDAuMyxcclxuICAgICAgICAgIHN0ZXAgPSAwLjNcclxuXHJcbiAgICAgIGxldCBjb3VudCA9IHRoaXMuc29ydE9yZGVyLmxlbmd0aDtcclxuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRTb3J0T3JkZXJQb3NpdGlvbihmaWVsZClcclxuXHJcblxyXG4gICAgICBpZihtYXggLSBjb3VudCAqIHN0ZXAgPCBtaW4pIHtcclxuICAgICAgICBzdGVwID0gKG1heCAtIG1pbikgLyAoY291bnQtMSlcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG9wYWNpdHkgPSBtYXggLSBjdXJyZW50ICogc3RlcFxyXG5cclxuICAgICAgcmV0dXJuIG9wYWNpdHlcclxuICAgIH0sXHJcbiAgICBoYXNDYWxsYmFjayAoaXRlbSkge1xyXG4gICAgICByZXR1cm4gaXRlbS5jYWxsYmFjayA/IHRydWUgOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGNhbGxDYWxsYmFjayAoZmllbGQsIGl0ZW0pIHtcclxuICAgICAgaWYgKCAhIHRoaXMuaGFzQ2FsbGJhY2soZmllbGQpKSByZXR1cm5cclxuXHJcbiAgICAgIGlmKHR5cGVvZihmaWVsZC5jYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgcmV0dXJuIGZpZWxkLmNhbGxiYWNrKHRoaXMuZ2V0T2JqZWN0VmFsdWUoaXRlbSwgZmllbGQubmFtZSkpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBhcmdzID0gZmllbGQuY2FsbGJhY2suc3BsaXQoJ3wnKVxyXG4gICAgICBsZXQgZnVuYyA9IGFyZ3Muc2hpZnQoKVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLiRwYXJlbnRbZnVuY10gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldE9iamVjdFZhbHVlKGl0ZW0sIGZpZWxkLm5hbWUpXHJcblxyXG4gICAgICAgIHJldHVybiAoYXJncy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgPyB0aGlzLiRwYXJlbnRbZnVuY10uYXBwbHkodGhpcy4kcGFyZW50LCBbdmFsdWVdLmNvbmNhdChhcmdzKSlcclxuICAgICAgICAgIDogdGhpcy4kcGFyZW50W2Z1bmNdLmNhbGwodGhpcy4kcGFyZW50LCB2YWx1ZSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH0sXHJcbiAgICBnZXRPYmplY3RWYWx1ZSAob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgZGVmYXVsdFZhbHVlID0gKHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICd1bmRlZmluZWQnKSA/IG51bGwgOiBkZWZhdWx0VmFsdWVcclxuXHJcbiAgICAgIGxldCBvYmogPSBvYmplY3RcclxuICAgICAgaWYgKHBhdGgudHJpbSgpICE9ICcnKSB7XHJcbiAgICAgICAgbGV0IGtleXMgPSBwYXRoLnNwbGl0KCcuJylcclxuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICBpZiAob2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmpba2V5XSAhPT0gJ3VuZGVmaW5lZCcgJiYgb2JqW2tleV0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgb2JqID0gb2JqW2tleV1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9iaiA9IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBvYmpcclxuICAgIH0sXHJcbiAgICB0b2dnbGVDaGVja2JveCAoZGF0YUl0ZW0sIGZpZWxkTmFtZSwgZXZlbnQpIHtcclxuICAgICAgbGV0IGlzQ2hlY2tlZCA9IGV2ZW50LnRhcmdldC5jaGVja2VkXHJcbiAgICAgIGxldCBpZENvbHVtbiA9IHRoaXMudHJhY2tCeVxyXG5cclxuICAgICAgaWYgKGRhdGFJdGVtW2lkQ29sdW1uXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy53YXJuKCdfX2NoZWNrYm94IGZpZWxkOiBUaGUgXCInK3RoaXMudHJhY2tCeSsnXCIgZmllbGQgZG9lcyBub3QgZXhpc3QhIE1ha2Ugc3VyZSB0aGUgZmllbGQgeW91IHNwZWNpZnkgaW4gXCJ0cmFjay1ieVwiIHByb3AgZG9lcyBleGlzdC4nKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQga2V5ID0gZGF0YUl0ZW1baWRDb2x1bW5dXHJcbiAgICAgIGlmIChpc0NoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdElkKGtleSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVuc2VsZWN0SWQoa2V5KVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3Z1ZXRhYmxlOmNoZWNrYm94LXRvZ2dsZWQnLCBpc0NoZWNrZWQsIGRhdGFJdGVtKVxyXG4gICAgfSxcclxuICAgIHNlbGVjdElkIChrZXkpIHtcclxuICAgICAgaWYgKCAhIHRoaXMuaXNTZWxlY3RlZFJvdyhrZXkpKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRvLnB1c2goa2V5KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdW5zZWxlY3RJZCAoa2V5KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUbyA9IHRoaXMuc2VsZWN0ZWRUby5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtICE9PSBrZXlcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBpc1NlbGVjdGVkUm93IChrZXkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRUby5pbmRleE9mKGtleSkgPj0gMFxyXG4gICAgfSxcclxuICAgIHJvd1NlbGVjdGVkIChkYXRhSXRlbSwgZmllbGROYW1lKXtcclxuICAgICAgbGV0IGlkQ29sdW1uID0gdGhpcy50cmFja0J5XHJcbiAgICAgIGxldCBrZXkgPSBkYXRhSXRlbVtpZENvbHVtbl1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWRSb3coa2V5KVxyXG4gICAgfSxcclxuICAgIGNoZWNrQ2hlY2tib3hlc1N0YXRlIChmaWVsZE5hbWUpIHtcclxuICAgICAgaWYgKCEgdGhpcy50YWJsZURhdGEpIHJldHVyblxyXG5cclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIGxldCBpZENvbHVtbiA9IHRoaXMudHJhY2tCeVxyXG4gICAgICBsZXQgc2VsZWN0b3IgPSAndGgudnVldGFibGUtdGgtY2hlY2tib3gtJyArIGlkQ29sdW1uICsgJyBpbnB1dFt0eXBlPWNoZWNrYm94XSdcclxuICAgICAgbGV0IGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXHJcblxyXG4gICAgICAvL2ZpeGVkOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgcmV0dXJuIHRoZSB0eXBlb2Ygbm9kZUxpc3Qgbm90IGFycmF5XHJcbiAgICAgIGlmIChlbHMuZm9yRWFjaD09PXVuZGVmaW5lZClcclxuICAgICAgICBlbHMuZm9yRWFjaD1mdW5jdGlvbihjYil7XHJcbiAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZWxzLCBjYik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLy8gY291bnQgaG93IG1hbnkgY2hlY2tib3ggcm93IGluIHRoZSBjdXJyZW50IHBhZ2UgaGFzIGJlZW4gY2hlY2tlZFxyXG4gICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnRhYmxlRGF0YS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBzZWxmLnNlbGVjdGVkVG8uaW5kZXhPZihpdGVtW2lkQ29sdW1uXSkgPj0gMFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gY291bnQgPT0gMCwgY2xlYXIgdGhlIGNoZWNrYm94XHJcbiAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIGVscy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICBlbC5pbmRldGVybWluYXRlID0gZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIC8vIGNvdW50ID4gMCBhbmQgY291bnQgPCBwZXJQYWdlLCBzZXQgY2hlY2tib3ggc3RhdGUgdG8gJ2luZGV0ZXJtaW5hdGUnXHJcbiAgICAgIGVsc2UgaWYgKHNlbGVjdGVkLmxlbmd0aCA8IHRoaXMucGVyUGFnZSkge1xyXG4gICAgICAgIGVscy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICBlbC5pbmRldGVybWluYXRlID0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgICAvLyBjb3VudCA9PSBwZXJQYWdlLCBzZXQgY2hlY2tib3ggc3RhdGUgdG8gJ2NoZWNrZWQnXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGVscy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICBlbC5pbmRldGVybWluYXRlID0gZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGVBbGxDaGVja2JveGVzIChmaWVsZE5hbWUsIGV2ZW50KSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICBsZXQgaXNDaGVja2VkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWRcclxuICAgICAgbGV0IGlkQ29sdW1uID0gdGhpcy50cmFja0J5XHJcblxyXG4gICAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGEuZm9yRWFjaChmdW5jdGlvbihkYXRhSXRlbSkge1xyXG4gICAgICAgICAgc2VsZi5zZWxlY3RJZChkYXRhSXRlbVtpZENvbHVtbl0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGRhdGFJdGVtKSB7XHJcbiAgICAgICAgICBzZWxmLnVuc2VsZWN0SWQoZGF0YUl0ZW1baWRDb2x1bW5dKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kZW1pdCgndnVldGFibGU6Y2hlY2tib3gtdG9nZ2xlZC1hbGwnLCBpc0NoZWNrZWQpXHJcbiAgICB9LFxyXG4gICAgZ290b1ByZXZpb3VzUGFnZSAoKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID4gMSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UtLVxyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ290b05leHRQYWdlICgpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPCB0aGlzLnRhYmxlUGFnaW5hdGlvbi5sYXN0X3BhZ2UpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlKytcclxuICAgICAgICB0aGlzLmxvYWREYXRhKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdvdG9QYWdlIChwYWdlKSB7XHJcbiAgICAgIGlmIChwYWdlICE9IHRoaXMuY3VycmVudFBhZ2UgJiYgKHBhZ2UgPiAwICYmIHBhZ2UgPD0gdGhpcy50YWJsZVBhZ2luYXRpb24ubGFzdF9wYWdlKSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlXHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpc1Zpc2libGVEZXRhaWxSb3cgKHJvd0lkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZpc2libGVEZXRhaWxSb3dzLmluZGV4T2YoIHJvd0lkICkgPj0gMFxyXG4gICAgfSxcclxuICAgIHNob3dEZXRhaWxSb3cgKHJvd0lkKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1Zpc2libGVEZXRhaWxSb3cocm93SWQpKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlRGV0YWlsUm93cy5wdXNoKHJvd0lkKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGlkZURldGFpbFJvdyAocm93SWQpIHtcclxuICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlRGV0YWlsUm93KHJvd0lkKSkge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZURldGFpbFJvd3Muc3BsaWNlKFxyXG4gICAgICAgICAgdGhpcy52aXNpYmxlRGV0YWlsUm93cy5pbmRleE9mKHJvd0lkKSxcclxuICAgICAgICAgIDFcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGVEZXRhaWxSb3cgKHJvd0lkKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzVmlzaWJsZURldGFpbFJvdyhyb3dJZCkpIHtcclxuICAgICAgICB0aGlzLmhpZGVEZXRhaWxSb3cocm93SWQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsUm93KHJvd0lkKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd0ZpZWxkIChpbmRleCkge1xyXG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy50YWJsZUZpZWxkcy5sZW5ndGgpIHJldHVyblxyXG5cclxuICAgICAgdGhpcy50YWJsZUZpZWxkc1tpbmRleF0udmlzaWJsZSA9IHRydWVcclxuICAgIH0sXHJcbiAgICBoaWRlRmllbGQgKGluZGV4KSB7XHJcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLnRhYmxlRmllbGRzLmxlbmd0aCkgcmV0dXJuXHJcblxyXG4gICAgICB0aGlzLnRhYmxlRmllbGRzW2luZGV4XS52aXNpYmxlID0gZmFsc2VcclxuICAgIH0sXHJcbiAgICB0b2dnbGVGaWVsZCAoaW5kZXgpIHtcclxuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMudGFibGVGaWVsZHMubGVuZ3RoKSByZXR1cm5cclxuXHJcbiAgICAgIHRoaXMudGFibGVGaWVsZHNbaW5kZXhdLnZpc2libGUgPSAhIHRoaXMudGFibGVGaWVsZHNbaW5kZXhdLnZpc2libGVcclxuICAgIH0sXHJcbiAgICByZW5kZXJJY29uVGFnIChjbGFzc2VzLCBvcHRpb25zID0gJycpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZih0aGlzLmNzcy5yZW5kZXJJY29uKSA9PT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICA/IGA8aSBjbGFzcz1cIiR7Y2xhc3Nlcy5qb2luKCcgJyl9XCIgJHtvcHRpb25zfT48L2k+YFxyXG4gICAgICAgIDogdGhpcy5jc3MucmVuZGVySWNvbihjbGFzc2VzLCBvcHRpb25zKVxyXG4gICAgfSxcclxuICAgIG1ha2VQYWdpbmF0aW9uICh0b3RhbCA9IG51bGwsIHBlclBhZ2UgPSBudWxsLCBjdXJyZW50UGFnZSA9IG51bGwpIHtcclxuICAgICAgbGV0IHBhZ2luYXRpb24gPSB7fVxyXG4gICAgICB0b3RhbCA9IHRvdGFsID09PSBudWxsID8gdGhpcy5kYXRhVG90YWwgOiB0b3RhbFxyXG4gICAgICBwZXJQYWdlID0gcGVyUGFnZSA9PT0gbnVsbCA/IHRoaXMucGVyUGFnZSA6IHBlclBhZ2VcclxuICAgICAgY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZSA9PT0gbnVsbCA/IHRoaXMuY3VycmVudFBhZ2UgOiBjdXJyZW50UGFnZVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAndG90YWwnOiB0b3RhbCxcclxuICAgICAgICAncGVyX3BhZ2UnOiBwZXJQYWdlLFxyXG4gICAgICAgICdjdXJyZW50X3BhZ2UnOiBjdXJyZW50UGFnZSxcclxuICAgICAgICAnbGFzdF9wYWdlJzogTWF0aC5jZWlsKHRvdGFsIC8gcGVyUGFnZSkgfHwgMCxcclxuICAgICAgICAnbmV4dF9wYWdlX3VybCc6ICcnLFxyXG4gICAgICAgICdwcmV2X3BhZ2VfdXJsJzogJycsXHJcbiAgICAgICAgJ2Zyb20nOiAoY3VycmVudFBhZ2UgLTEpICogcGVyUGFnZSArMSxcclxuICAgICAgICAndG8nOiBNYXRoLm1pbihjdXJyZW50UGFnZSAqIHBlclBhZ2UsIHRvdGFsKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbm9ybWFsaXplU29ydE9yZGVyICgpIHtcclxuICAgICAgdGhpcy5zb3J0T3JkZXIuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5zb3J0RmllbGQgPSBpdGVtLnNvcnRGaWVsZCB8fCBpdGVtLmZpZWxkXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY2FsbERhdGFNYW5hZ2VyICgpIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YU1hbmFnZXIgPT09IG51bGwgJiYgdGhpcy5kYXRhID09PSBudWxsKSByZXR1cm5cclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZGF0YSkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXREYXRhKHRoaXMuZGF0YSlcclxuICAgICAgfSBcclxuICAgICAgXHJcbiAgICAgIHRoaXMubm9ybWFsaXplU29ydE9yZGVyKClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnNldERhdGEoXHJcbiAgICAgICAgdGhpcy5kYXRhTWFuYWdlclxyXG4gICAgICAgICAgPyB0aGlzLmRhdGFNYW5hZ2VyKHRoaXMuc29ydE9yZGVyLCB0aGlzLm1ha2VQYWdpbmF0aW9uKCkpXHJcbiAgICAgICAgICA6IHRoaXMuZGF0YVxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAgb25Sb3dDbGFzcyAoZGF0YUl0ZW0sIGluZGV4KSB7XHJcbiAgICAgIGlmICh0aGlzLnJvd0NsYXNzQ2FsbGJhY2sgIT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy53YXJuKCdcInJvdy1jbGFzcy1jYWxsYmFja1wiIHByb3AgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBcInJvdy1jbGFzc1wiIHByb3AgaW5zdGVhZC4nKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mKHRoaXMucm93Q2xhc3MpID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm93Q2xhc3MoZGF0YUl0ZW0sIGluZGV4KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5yb3dDbGFzc1xyXG4gICAgfSxcclxuICAgIG9uUm93Q2hhbmdlZCAoZGF0YUl0ZW0pIHtcclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ3Jvdy1jaGFuZ2VkJywgZGF0YUl0ZW0pXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9LFxyXG4gICAgb25Sb3dDbGlja2VkIChkYXRhSXRlbSwgZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ3Jvdy1jbGlja2VkJywgZGF0YUl0ZW0sIGV2ZW50KVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSxcclxuICAgIG9uUm93RG91YmxlQ2xpY2tlZCAoZGF0YUl0ZW0sIGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdyb3ctZGJsY2xpY2tlZCcsIGRhdGFJdGVtLCBldmVudClcclxuICAgIH0sXHJcbiAgICBvbkRldGFpbFJvd0NsaWNrIChkYXRhSXRlbSwgZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ2RldGFpbC1yb3ctY2xpY2tlZCcsIGRhdGFJdGVtLCBldmVudClcclxuICAgIH0sXHJcbiAgICBvbkNlbGxDbGlja2VkIChkYXRhSXRlbSwgZmllbGQsIGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdjZWxsLWNsaWNrZWQnLCBkYXRhSXRlbSwgZmllbGQsIGV2ZW50KVxyXG4gICAgfSxcclxuICAgIG9uQ2VsbERvdWJsZUNsaWNrZWQgKGRhdGFJdGVtLCBmaWVsZCwgZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ2NlbGwtZGJsY2xpY2tlZCcsIGRhdGFJdGVtLCBmaWVsZCwgZXZlbnQpXHJcbiAgICB9LFxyXG4gICAgb25DZWxsUmlnaHRDbGlja2VkIChkYXRhSXRlbSwgZmllbGQsIGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdjZWxsLXJpZ2h0Y2xpY2tlZCcsIGRhdGFJdGVtLCBmaWVsZCwgZXZlbnQpXHJcbiAgICB9LFxyXG4gICAgLypcclxuICAgICAqIEFQSSBmb3IgZXh0ZXJuYWxzXHJcbiAgICAgKi9cclxuICAgIGNoYW5nZVBhZ2UgKHBhZ2UpIHtcclxuICAgICAgaWYgKHBhZ2UgPT09ICdwcmV2Jykge1xyXG4gICAgICAgIHRoaXMuZ290b1ByZXZpb3VzUGFnZSgpXHJcbiAgICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gJ25leHQnKSB7XHJcbiAgICAgICAgdGhpcy5nb3RvTmV4dFBhZ2UoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZ290b1BhZ2UocGFnZSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbG9hZCAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmxvYWREYXRhKClcclxuICAgIH0sXHJcbiAgICByZWZyZXNoICgpIHtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDFcclxuICAgICAgcmV0dXJuIHRoaXMubG9hZERhdGEoKVxyXG4gICAgfSxcclxuICAgIHJlc2V0RGF0YSAoKSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhID0gbnVsbFxyXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IG51bGxcclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2RhdGEtcmVzZXQnKVxyXG4gICAgfVxyXG4gIH0sIC8vIGVuZDogbWV0aG9kc1xyXG4gIHdhdGNoOiB7XHJcbiAgICAnbXVsdGlTb3J0JyAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgaWYgKG5ld1ZhbCA9PT0gZmFsc2UgJiYgdGhpcy5zb3J0T3JkZXIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRoaXMuc29ydE9yZGVyLnNwbGljZSgxKTtcclxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnYXBpVXJsJyAgKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgIGlmKHRoaXMucmVhY3RpdmVBcGlVcmwgJiYgbmV3VmFsICE9PSBvbGRWYWwpXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKClcclxuICAgIH0sXHJcbiAgICAnZGF0YScgKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YShuZXdWYWwpXHJcbiAgICB9LFxyXG4gICAgJ3RhYmxlSGVpZ2h0JyAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgdGhpcy5maXhIZWFkZXIoKVxyXG4gICAgfVxyXG4gIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIFt2LWNsb2FrXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAudnVldGFibGUgdGguc29ydGFibGU6aG92ZXIge1xyXG4gICAgY29sb3I6ICMyMTg1ZDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1ib2R5LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdy15OmF1dG87XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1oZWFkLXdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIH1cclxuICAudnVldGFibGUtYWN0aW9ucyB7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1wYWdpbmF0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOWZhZmIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLXBhZ2luYXRpb24taW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLWVtcHR5LXJlc3VsdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1jbGlwLXRleHQge1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1zZW1hbnRpYy1uby10b3Age1xyXG4gICAgYm9yZGVyLXRvcDpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLWZpeGVkLWxheW91dCB7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gIH1cclxuICAudnVldGFibGUtZ3V0dGVyLWNvbCB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZSAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZSAgIWltcG9ydGFudDtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmlzRml4ZWRIZWFkZXJcbiAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2dWV0YWJsZS1oZWFkLXdyYXBwZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiBbXCJ2dWV0YWJsZVwiLCBfdm0uY3NzLnRhYmxlQ2xhc3MsIF92bS5jc3MudGFibGVIZWFkZXJDbGFzc11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRmllbGRzLCBmdW5jdGlvbihmaWVsZCwgZmllbGRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLWNoZWNrYm94LVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50cmFja0J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uY2hlY2tDaGVja2JveGVzU3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlQWxsQ2hlY2tib3hlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX2NvbXBvbmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLWNvbXBvbmVudC1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRyYWNrQnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNvcnRhYmxlOiBfdm0uaXNTb3J0YWJsZShmaWVsZCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlclRpdGxlKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlckJ5KGZpZWxkLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fc2xvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLXNsb3QtXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0QXJncyhmaWVsZC5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRDbGFzcyhmaWVsZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc29ydGFibGU6IF92bS5pc1NvcnRhYmxlKGZpZWxkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVyVGl0bGUoZmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyQnkoZmllbGQsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19zZXF1ZW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLXNlcXVlbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MgfHwgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlclRpdGxlKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubm90SW4oX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19zZXF1ZW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2NvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fc2xvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1cIiArIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MgfHwgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlclRpdGxlKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtXCIgKyBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRDbGFzcyhmaWVsZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzb3J0YWJsZTogX3ZtLmlzU29ydGFibGUoZmllbGQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIl9cIiArIGZpZWxkLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJUaXRsZShmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyQnkoZmllbGQsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5zY3JvbGxWaXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidnVldGFibGUtZ3V0dGVyLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogX3ZtLnNjcm9sbEJhcldpZHRoIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2dWV0YWJsZS1ib2R5LXdyYXBwZXJcIixcbiAgICAgICAgICAgIHN0eWxlOiB7IGhlaWdodDogX3ZtLnRhYmxlSGVpZ2h0IH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczogW1widnVldGFibGVcIiwgX3ZtLmNzcy50YWJsZUNsYXNzLCBfdm0uY3NzLnRhYmxlQm9keUNsYXNzXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImNvbGdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVGaWVsZHMsIGZ1bmN0aW9uKGZpZWxkLCBmaWVsZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImNvbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLVwiICsgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJfY29sX1wiICsgZmllbGQubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2dWV0YWJsZS1ib2R5XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJsZURhdGEsIGZ1bmN0aW9uKGl0ZW0sIGl0ZW1JbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5vblJvd0NsYXNzKGl0ZW0sIGl0ZW1JbmRleCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS1pbmRleFwiOiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6IF92bS5vblJvd0NoYW5nZWQoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vblJvd0NsaWNrZWQoaXRlbSwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uUm93RG91YmxlQ2xpY2tlZChpdGVtLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJsZUZpZWxkcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fc2VxdWVuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXNlcXVlbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVyU2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2hhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtaGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVySWNvblRhZyhbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFuZGxlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNzcy5oYW5kbGVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2NoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtY2hlY2tib3hlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0ucm93U2VsZWN0ZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlQ2hlY2tib3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19jb21wb25lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1jb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3RBcmdzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctZGF0YVwiOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWluZGV4XCI6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1maWVsZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuc29ydEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19zbG90XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtc2xvdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl90KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3RBcmdzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93RGF0YTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93SW5kZXg6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93RmllbGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuc29ydEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGZpZWxkLmRhdGFDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJOb3JtYWxGaWVsZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxEb3VibGVDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0bWVudTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxSaWdodENsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlRGV0YWlsUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogX3ZtLmRldGFpbFJvd1RyYW5zaXRpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzVmlzaWJsZURldGFpbFJvdyhpdGVtW192bS50cmFja0J5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbX3ZtLmNzcy5kZXRhaWxSb3dDbGFzc10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uRGV0YWlsUm93Q2xpY2soaXRlbSwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHNwYW46IF92bS5jb3VudFZpc2libGVGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhfdm0uZGV0YWlsUm93Q29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1kYXRhXCI6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWluZGV4XCI6IGl0ZW1JbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5RW1wdHlEYXRhUm93XG4gICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidnVldGFibGUtZW1wdHktcmVzdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBfdm0uY291bnRWaXNpYmxlRmllbGRzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0ubm9EYXRhVGVtcGxhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ubGVzc1RoYW5NaW5Sb3dzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2woX3ZtLmJsYW5rUm93cywgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpLCBzdGF0aWNDbGFzczogXCJibGFuay1yb3dcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVGaWVsZHMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHsga2V5OiBmaWVsZEluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLCoFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIDogX2MoXCJ0YWJsZVwiLCB7IGNsYXNzOiBbXCJ2dWV0YWJsZVwiLCBfdm0uY3NzLnRhYmxlQ2xhc3NdIH0sIFtcbiAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVGaWVsZHMsIGZ1bmN0aW9uKGZpZWxkLCBmaWVsZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIGZpZWxkLnZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX2NoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtY2hlY2tib3gtXCIgKyBfdm0udHJhY2tCeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLmNoZWNrQ2hlY2tib3hlc1N0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZUFsbENoZWNrYm94ZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19jb21wb25lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1jb21wb25lbnQtXCIgKyBfdm0udHJhY2tCeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRDbGFzcyhmaWVsZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc29ydGFibGU6IF92bS5pc1NvcnRhYmxlKGZpZWxkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0ucmVuZGVyVGl0bGUoZmllbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJCeShmaWVsZCwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX3Nsb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1zbG90LVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdEFyZ3MoZmllbGQubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNvcnRhYmxlOiBfdm0uaXNTb3J0YWJsZShmaWVsZCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnJlbmRlclRpdGxlKGZpZWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyQnkoZmllbGQsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19zZXF1ZW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLXNlcXVlbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MgfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRDbGFzcyhmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5yZW5kZXJUaXRsZShmaWVsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubm90SW4oX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19zZXF1ZW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2NvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fc2xvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1cIiArIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MgfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRDbGFzcyhmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5yZW5kZXJUaXRsZShmaWVsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtXCIgKyBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRDbGFzcyhmaWVsZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzb3J0YWJsZTogX3ZtLmlzU29ydGFibGUoZmllbGQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIl9cIiArIGZpZWxkLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0ucmVuZGVyVGl0bGUoZmllbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlckJ5KGZpZWxkLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInZ1ZXRhYmxlLWJvZHlcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVEYXRhLCBmdW5jdGlvbihpdGVtLCBpdGVtSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0ub25Sb3dDbGFzcyhpdGVtLCBpdGVtSW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS1pbmRleFwiOiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBfdm0ub25Sb3dDaGFuZ2VkKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uUm93RG91YmxlQ2xpY2tlZChpdGVtLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25Sb3dDbGlja2VkKGl0ZW0sICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVGaWVsZHMsIGZ1bmN0aW9uKGZpZWxkLCBmaWVsZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX3NlcXVlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtc2VxdWVuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlclNlcXVlbmNlKGl0ZW1JbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1oYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlckljb25UYWcoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYW5kbGUtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNzcy5oYW5kbGVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLWNoZWNrYm94ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5yb3dTZWxlY3RlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGVDaGVja2JveChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19jb21wb25lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1jb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoX3ZtLmV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1kYXRhXCI6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1pbmRleFwiOiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1maWVsZFwiOiBmaWVsZC5zb3J0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09IFwiX19zbG90XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtc2xvdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93RGF0YTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0luZGV4OiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dGaWVsZDogZmllbGQuc29ydEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaGFzQ2FsbGJhY2soZmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogZmllbGQuZGF0YUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhbGxDYWxsYmFjayhmaWVsZCwgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsQ2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxEb3VibGVDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0bWVudTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2VsbFJpZ2h0Q2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogZmllbGQuZGF0YUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldE9iamVjdFZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2VsbERvdWJsZUNsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRtZW51OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsUmlnaHRDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnVzZURldGFpbFJvd1xuICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IF92bS5kZXRhaWxSb3dUcmFuc2l0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1Zpc2libGVEZXRhaWxSb3coaXRlbVtfdm0udHJhY2tCeV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtfdm0uY3NzLmRldGFpbFJvd0NsYXNzXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25EZXRhaWxSb3dDbGljayhpdGVtLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHNwYW46IF92bS5jb3VudFZpc2libGVGaWVsZHMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoX3ZtLmRldGFpbFJvd0NvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctZGF0YVwiOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctaW5kZXhcIjogaXRlbUluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5kaXNwbGF5RW1wdHlEYXRhUm93XG4gICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZ1ZXRhYmxlLWVtcHR5LXJlc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHNwYW46IF92bS5jb3VudFZpc2libGVGaWVsZHMgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ubm9EYXRhVGVtcGxhdGUpIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5sZXNzVGhhbk1pblJvd3NcbiAgICAgICAgICAgICAgPyBfdm0uX2woX3ZtLmJsYW5rUm93cywgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiBpLCBzdGF0aWNDbGFzczogXCJibGFuay1yb3dcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJsZUZpZWxkcywgZnVuY3Rpb24oZmllbGQsIGZpZWxkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgeyBrZXk6IGZpZWxkSW5kZXggfSwgW192bS5fdihcIsKgXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwibWFpblwiKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJhcGV4Y2hhcnRzXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjIwMHB4XCIsXG4gICAgICB0eXBlOiBcImFyZWFcIixcbiAgICAgIG9wdGlvbnM6IF92bS5jaGFydE9wdGlvbnMsXG4gICAgICBzZXJpZXM6IF92bS5zZXJpZXNcbiAgICB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwidnVldGFibGVcIiwge1xuICAgICAgICByZWY6IFwidnVldGFibGVcIixcbiAgICAgICAgYXR0cnM6IHsgXCJhcGktdXJsXCI6IFwiL3JldG91ci90YWJsZXMvZGFzaGJvYXJkXCIsIGZpZWxkczogX3ZtLmZpZWxkcyB9LFxuICAgICAgICBvbjogeyBcInZ1ZXRhYmxlOnBhZ2luYXRpb24tZGF0YVwiOiBfdm0ub25QYWdpbmF0aW9uRGF0YSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInZ1ZXRhYmxlLXBhZ2luYXRpb25cIiwge1xuICAgICAgICByZWY6IFwicGFnaW5hdGlvblwiLFxuICAgICAgICBvbjogeyBcInZ1ZXRhYmxlLXBhZ2luYXRpb246Y2hhbmdlLXBhZ2VcIjogX3ZtLm9uQ2hhbmdlUGFnZSB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgdmFsdWU6IF92bS50YWJsZVBhZ2luYXRpb24gJiYgX3ZtLnRhYmxlUGFnaW5hdGlvbi5sYXN0X3BhZ2UgPiAxLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidGFibGVQYWdpbmF0aW9uICYmIHRhYmxlUGFnaW5hdGlvbi5sYXN0X3BhZ2UgPiAxXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGNsYXNzOiBfdm0uY3NzLndyYXBwZXJDbGFzc1xuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIFwiYnRuLW5hdlwiLFxuICAgICAgICAgICAgX3ZtLmNzcy5saW5rQ2xhc3MsXG4gICAgICAgICAgICBfdm0uaXNPbkZpcnN0UGFnZSA/IF92bS5jc3MuZGlzYWJsZWRDbGFzcyA6IFwiXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5sb2FkUGFnZSgxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5jc3MuaWNvbnMuZmlyc3QgIT0gXCJcIlxuICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBjbGFzczogW192bS5jc3MuaWNvbnMuZmlyc3RdIH0pXG4gICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiwqtcIildKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICBcImJ0bi1uYXZcIixcbiAgICAgICAgICAgIF92bS5jc3MubGlua0NsYXNzLFxuICAgICAgICAgICAgX3ZtLmlzT25GaXJzdFBhZ2UgPyBfdm0uY3NzLmRpc2FibGVkQ2xhc3MgOiBcIlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0ubG9hZFBhZ2UoXCJwcmV2XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLmNzcy5pY29ucy5uZXh0ICE9IFwiXCJcbiAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgY2xhc3M6IFtfdm0uY3NzLmljb25zLnByZXZdIH0pXG4gICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiwqDigLlcIildKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5ub3RFbm91Z2hQYWdlc1xuICAgICAgICA/IFtcbiAgICAgICAgICAgIF92bS5fbChfdm0udG90YWxQYWdlLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5jc3MucGFnZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaXNDdXJyZW50UGFnZShuKSA/IF92bS5jc3MuYWN0aXZlQ2xhc3MgOiBcIlwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MobikgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZFBhZ2UobilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtcbiAgICAgICAgICAgIF92bS5fbChfdm0ud2luZG93U2l6ZSwgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBfdm0uY3NzLnBhZ2VDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmlzQ3VycmVudFBhZ2UoX3ZtLndpbmRvd1N0YXJ0ICsgbiAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgPyBfdm0uY3NzLmFjdGl2ZUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLndpbmRvd1N0YXJ0ICsgbiAtIDEpIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRQYWdlKF92bS53aW5kb3dTdGFydCArIG4gLSAxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICBcImJ0bi1uYXZcIixcbiAgICAgICAgICAgIF92bS5jc3MubGlua0NsYXNzLFxuICAgICAgICAgICAgX3ZtLmlzT25MYXN0UGFnZSA/IF92bS5jc3MuZGlzYWJsZWRDbGFzcyA6IFwiXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5sb2FkUGFnZShcIm5leHRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uY3NzLmljb25zLm5leHQgIT0gXCJcIlxuICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBjbGFzczogW192bS5jc3MuaWNvbnMubmV4dF0gfSlcbiAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLigLrCoFwiKV0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIFwiYnRuLW5hdlwiLFxuICAgICAgICAgICAgX3ZtLmNzcy5saW5rQ2xhc3MsXG4gICAgICAgICAgICBfdm0uaXNPbkxhc3RQYWdlID8gX3ZtLmNzcy5kaXNhYmxlZENsYXNzIDogXCJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmxvYWRQYWdlKF92bS50b3RhbFBhZ2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLmNzcy5pY29ucy5sYXN0ICE9IFwiXCJcbiAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgY2xhc3M6IFtfdm0uY3NzLmljb25zLmxhc3RdIH0pXG4gICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiwrtcIildKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Z1ZXRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNTk2NWUzYiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WdWV0YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Z1ZXRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9WdWV0YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNTk2NWUzYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxNTk2NWUzYlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3ZhZ3JhbnQvd2ViZGV2L2NyYWZ0L2NyYWZ0LXJldG91ci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTU5NjVlM2InLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTU5NjVlM2InLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Z1ZXRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNTk2NWUzYiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNTk2NWUzYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVldGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WdWV0YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0zIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WdWV0YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNTk2NWUzYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMyEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVldGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTU5NjVlM2Imc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvbmZldHRpLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NzJkNzEyYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db25mZXR0aS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbmZldHRpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdmFncmFudC93ZWJkZXYvY3JhZnQvY3JhZnQtcmV0b3VyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NzJkNzEyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NzJkNzEyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29uZmV0dGkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3MmQ3MTJhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc3MmQ3MTJhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0NvbmZldHRpLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmZldHRpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZmV0dGkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EYXNoYm9hcmRDaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjA5YWQ5NjYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGFzaGJvYXJkQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EYXNoYm9hcmRDaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3ZhZ3JhbnQvd2ViZGV2L2NyYWZ0L2NyYWZ0LXJldG91ci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZjA5YWQ5NjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZjA5YWQ5NjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Rhc2hib2FyZENoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMDlhZDk2NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmMDlhZDk2NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9EYXNoYm9hcmRDaGFydC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXNoYm9hcmRDaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Rhc2hib2FyZENoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGFzaGJvYXJkVGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhMjkwMTg2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Rhc2hib2FyZFRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGFzaGJvYXJkVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92YWdyYW50L3dlYmRldi9jcmFmdC9jcmFmdC1yZXRvdXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzlhMjkwMTg2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzlhMjkwMTg2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EYXNoYm9hcmRUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWEyOTAxODYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOWEyOTAxODYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkVGFibGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGFzaGJvYXJkVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXNoYm9hcmRUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Z1ZXRhYmxlUGFnaW5hdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI1ODIwMzYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVnVldGFibGVQYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVnVldGFibGVQYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdmFncmFudC93ZWJkZXYvY3JhZnQvY3JhZnQtcmV0b3VyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYjU4MjAzNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYjU4MjAzNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVnVldGFibGVQYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjU4MjAzNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYjU4MjAzNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9WdWV0YWJsZVBhZ2luYXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVldGFibGVQYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVldGFibGVQYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZuc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WdWV0YWJsZVBhZ2luYXRpb25NaXhpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdmFncmFudC93ZWJkZXYvY3JhZnQvY3JhZnQtcmV0b3VyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MDE0NDE0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MDE0NDE0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVldGFibGVQYWdpbmF0aW9uTWl4aW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==