define(['module', 'react', 'react-dom', 'redux', 'pat-registry'], function (module, _react, _reactDom, _redux, _patRegistry) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _patRegistry2 = _interopRequireDefault(_patRegistry);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var YES = 'YES';
  var NO = 'NO';
  var ALIKE = 'ALIKE';
  var SET_SHARING = 'SET_SHARING';
  var SET_COMMERCIAL = 'SET_COMMERCIAL';

  function deserialize(value) {
    return {
      'license': value.length ? value : 'by',
      'sharing': value.match('-nd') ? NO : value.match('-sa') ? ALIKE : YES,
      'commercial': value.match('-nc') ? NO : YES
    };
  }

  function serialize(state) {
    var license = 'by';
    switch (state.commercial) {
      case NO:
        license += '-nc';
    }
    switch (state.sharing) {
      case NO:
        license += '-nd';
        break;
      case ALIKE:
        license += '-sa';
    }
    return license;
  }

  function reducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    switch (action.type) {
      case SET_SHARING:
        state = {
          sharing: action.value,
          commercial: state.commercial
        };
        break;
      case SET_COMMERCIAL:
        state = {
          sharing: state.sharing,
          commercial: action.value
        };
        break;
    }
    state.license = serialize(state);
    return state;
  }

  var LicenseSelector = function (_React$Component) {
    _inherits(LicenseSelector, _React$Component);

    function LicenseSelector() {
      _classCallCheck(this, LicenseSelector);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(LicenseSelector).apply(this, arguments));
    }

    _createClass(LicenseSelector, [{
      key: 'render',
      value: function render() {
        var license = this.props.license;
        var sharing = this.props.sharing;
        var commercial = this.props.commercial;
        var setSharing = this.props.setSharing;
        var setCommercial = this.props.setCommercial;
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            'Allow adaptations of your work to be shared?',
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { type: 'radio', id: 'license-sharing-yes',
              name: 'license-sharing', value: YES,
              checked: sharing === YES ? true : null,
              onChange: function onChange(e) {
                return e.target.checked ? setSharing(YES) : null;
              } }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'license-sharing-yes' },
              'Yes'
            ),
            _react2.default.createElement('input', { type: 'radio', id: 'license-sharing-no',
              name: 'license-sharing', value: NO,
              checked: sharing === NO ? true : null,
              onChange: function onChange(e) {
                return e.target.checked ? setSharing(NO) : null;
              } }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'license-sharing-no' },
              'No'
            ),
            _react2.default.createElement('input', { type: 'radio', id: 'license-sharing-alike',
              name: 'license-sharing', value: ALIKE,
              checked: sharing === ALIKE ? true : null,
              onChange: function onChange(e) {
                return e.target.checked ? setSharing(ALIKE) : null;
              } }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'license-sharing-alike' },
              'Yes, as long as other share alike'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Allow commercial uses of your work?',
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { type: 'radio', id: 'license-commercial-yes',
              name: 'license-commercial', value: YES,
              checked: commercial === YES ? true : null,
              onChange: function onChange(e) {
                return e.target.checked ? setCommercial(YES) : null;
              } }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'license-commercial-yes' },
              'Yes'
            ),
            _react2.default.createElement('input', { type: 'radio', id: 'license-commercial-no',
              name: 'license-commercial', value: NO,
              checked: commercial === NO ? true : null,
              onChange: function onChange(e) {
                return e.target.checked ? setCommercial(NO) : null;
              } }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'license-commercial-no' },
              'No'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('img', { src: 'https://i.creativecommons.org/l/' + license + '/4.0/88x31.png',
              alt: license })
          )
        );
      }
    }]);

    return LicenseSelector;
  }(_react2.default.Component);

  LicenseSelector.propTypes = {
    license: _react2.default.PropTypes.string.isRequired,
    sharing: _react2.default.PropTypes.oneOf([YES, NO, ALIKE]),
    commercial: _react2.default.PropTypes.oneOf([YES, NO]),
    setSharing: _react2.default.PropTypes.func.isRequired,
    setCommercial: _react2.default.PropTypes.func.isRequired
  };

  _patRegistry2.default.register({
    name: 'license-selector',
    trigger: '.pat-license-selector',

    init: function init($el) {
      // Get form input element and hide it
      var el = $el.hide().get(0);

      // Define Redux store and initialize it from the field value
      var store = module.hot // Support Redux DevTools for Chrome in dev mode
      ? (0, _redux.compose)(window.devToolsExtension ? window.devToolsExtension() : function (f) {
        return f;
      })(_redux.createStore)(reducer, deserialize($el.val())) : (0, _redux.createStore)(reducer, deserialize($el.val()));

      // Create container for the widget
      var container = document.createElement('div');
      el.parentNode.insertBefore(container, el);
      container.className = 'license-selector';

      // Define main render
      function render() {
        // Serialize current widget value back into input field
        $el.val(serialize(store.getState()));

        // Render widget with current state
        _reactDom2.default.render(_react2.default.createElement(LicenseSelector
        // Pass state
        , _extends({}, store.getState(), {
          // Pass Redux action factories
          setSharing: function setSharing(value) {
            return store.dispatch({
              type: SET_SHARING,
              value: value
            });
          },
          setCommercial: function setCommercial(value) {
            return store.dispatch({
              type: SET_COMMERCIAL,
              value: value
            });
          }
        })), container);
      }

      // Subscribe to render when state changes
      store.subscribe(render);

      // Call initial render
      render();
    }
  });
});
