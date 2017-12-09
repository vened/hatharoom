import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  Form,
  Switch,
  Input,
  Button,
} from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'recompose';

import {
  makeSelectResource,
  makeSelectResourceColumns,
} from '../store/selectors';
import { getCrudResource } from '../store/actions';
import CrudApi from '../api';

const FormItem = Form.Item;
const { TextArea } = Input;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class CrudForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const requestPath = `${this.props.resource.get('apiPath')}`
    this.props.form.validateFields((err, values) => {
      if (!err) {
        CrudApi.post(requestPath, values).then(
            response => console.log(response),
            error => console.log(error),
        );
        console.log('Received values of form: ', values);
      }
    });
  };

  renderItem = (item) => {
    const { getFieldDecorator } = this.props.form;
    if (item.get('key') !== 'id') {
      if (item.get('type') === 'string') {
        return (
            <FormItem
                label={item.get('label')}
            >
              {getFieldDecorator(item.get('key'), {
                rules: [{ required: item.get('required'), message: item.get('requiredMessage') }],
              })(
                  <Input size="large" />,
              )}
            </FormItem>
        );
      }

      if (item.get('type') === 'text') {
        return (
            <FormItem
                label={item.get('label')}
            >
              {getFieldDecorator(item.get('key'), {
                rules: [{ required: item.get('required'), message: item.get('requiredMessage') }],
              })(
                  <TextArea rows={6} />,
              )}
            </FormItem>
        );
      }

      if (item.get('type') === 'switch') {
        return (
            <FormItem
                label={item.get('label')}
            >
              {getFieldDecorator(item.get('key'), { valuePropName: 'checked' })(
                  <Switch />,
              )}
            </FormItem>
        );
      }
    }
    return null;
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
    } = this.props.form;

    return (
        <div className="ContentPanel">
          <Form layout="vertical" onSubmit={this.handleSubmit}>

            {this.props.columns.map((item) => this.renderItem(item))}

            <FormItem>
              <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  disabled={hasErrors(getFieldsError())}
              >
                Сохранить
              </Button>
            </FormItem>
          </Form>
        </div>
    );
  }
}

CrudForm.propTypes = {
  getCrudResource: PropTypes.func,
  resource: ImmutablePropTypes.map,
  columns: ImmutablePropTypes.list,
};

const mapStateToProps = (state, ownProps) => {
  const action = ownProps.match.params.action && ownProps.match.params.action;
  return createStructuredSelector({
    resource: makeSelectResource(ownProps.match.url, action),
    columns: makeSelectResourceColumns(ownProps.match.url, action),
  });
};

const wrapper = compose(
    connect(
        mapStateToProps,
        dispatch => bindActionCreators({}, dispatch),
    ),
);

const WrappedForm = Form.create()(wrapper(CrudForm));

export default WrappedForm;
