"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _utils = require("@material-ui/utils");

var _SwitchBase = _interopRequireDefault(require("../internal/SwitchBase"));

var _RadioButtonIcon = _interopRequireDefault(require("./RadioButtonIcon"));

var _colorManipulator = require("../styles/colorManipulator");

var _capitalize = _interopRequireDefault(require("../utils/capitalize"));

var _createChainedFunction = _interopRequireDefault(require("../utils/createChainedFunction"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _RadioGroupContext = _interopRequireDefault(require("../RadioGroup/RadioGroupContext"));

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.secondary
    },

    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }
  };
};

exports.styles = styles;

var defaultCheckedIcon = _react.default.createElement(_RadioButtonIcon.default, {
  checked: true
});

var defaultIcon = _react.default.createElement(_RadioButtonIcon.default, null);

var Radio = _react.default.forwardRef(function Radio(props, ref) {
  var checkedProp = props.checked,
      classes = props.classes,
      _props$color = props.color,
      color = _props$color === void 0 ? 'secondary' : _props$color,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      nameProp = props.name,
      onChangeProp = props.onChange,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = (0, _objectWithoutProperties2.default)(props, ["checked", "classes", "color", "disabled", "name", "onChange", "size"]);

  var radioGroup = _react.default.useContext(_RadioGroupContext.default);

  var checked = checkedProp;
  var onChange = (0, _createChainedFunction.default)(onChangeProp, radioGroup && radioGroup.onChange);
  var name = nameProp;

  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = radioGroup.value === props.value;
    }

    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }

  return _react.default.createElement(_SwitchBase.default, (0, _extends2.default)({
    color: color,
    type: "radio",
    icon: _react.default.cloneElement(defaultIcon, {
      fontSize: size === 'small' ? 'small' : 'default'
    }),
    checkedIcon: _react.default.cloneElement(defaultCheckedIcon, {
      fontSize: size === 'small' ? 'small' : 'default'
    }),
    classes: {
      root: (0, _clsx.default)(classes.root, classes["color".concat((0, _capitalize.default)(color))]),
      checked: classes.checked,
      disabled: classes.disabled
    },
    name: name,
    checked: checked,
    onChange: onChange,
    ref: ref,
    disabled: disabled
  }, other));
});

process.env.NODE_ENV !== "production" ? Radio.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes.default.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['primary', 'secondary', 'default']),

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: _propTypes.default.node,

  /**
   * The id of the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _utils.refType,

  /**
   * Name attribute of the `input` element.
   */
  name: _propTypes.default.string,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: _propTypes.default.func,

  /**
   * If `true`, the `input` element will be required.
   */
  required: _propTypes.default.bool,

  /**
   * The size of the radio.
   * `small` is equivalent to the dense radio styling.
   */
  size: _propTypes.default.oneOf(['small', 'medium']),

  /**
   * The input component prop `type`.
   */
  type: _propTypes.default.string,

  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: _propTypes.default.any
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiRadio'
})(Radio);

exports.default = _default;