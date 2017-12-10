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

import { makeSelectCurrentResource } from '../store/resources/selectors';
import { createCrudResource } from '../store/actions';
// import { setCurrentResource } from '../store/currentResource/actions';

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
    // this.props.setCurrentResource(this.props.match);
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const requestPath = `${this.props.resource.get('apiPath')}`;
    this.props.form.validateFields((err, values) => {
      !err && this.props.createCrudResource(requestPath, values);
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
    const { getFieldsError } = this.props.form;

    return (
        <div className="ContentPanel">
          <Form layout="vertical" onSubmit={this.handleSubmit}>

            {this.props.resource.get('columns').map((item) => this.renderItem(item))}

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
  createCrudResource: PropTypes.func,
  resource: ImmutablePropTypes.map,
};

const mapStateToProps = (state, ownProps) => {
  return createStructuredSelector({
    resource: makeSelectCurrentResource(),
  });
};

const wrapper = compose(
    connect(
        mapStateToProps,
        dispatch => bindActionCreators({
          // setCurrentResource,
          createCrudResource,
        }, dispatch),
    ),
);

const WrappedForm = Form.create()(wrapper(CrudForm));

export default WrappedForm;
