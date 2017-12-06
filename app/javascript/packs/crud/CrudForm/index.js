import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Icon,
  Input,
  Button,
} from 'antd';
import CrudApi from '../api';

const FormItem = Form.Item;


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
    this.props.form.validateFields((err, values) => {
      if (!err) {
        CrudApi.post('/posts', values).then(
            response => console.log(response),
            error => console.log(error),
        );
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const titleError = isFieldTouched('title') && getFieldError('title');
    const descriptionError = isFieldTouched('description') && getFieldError('description');
    return (
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
              validateStatus={titleError ? 'error' : ''}
              help={titleError || ''}
          >
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Title" />,
            )}
          </FormItem>
          <FormItem
              validateStatus={descriptionError ? 'error' : ''}
              help={descriptionError || ''}
          >
            {getFieldDecorator('description', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Description" />,
            )}
          </FormItem>
          <FormItem>
            <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
            >
              Log in
            </Button>
          </FormItem>
        </Form>
    );
  }
}

CrudForm.propTypes = {
  PROP: PropTypes.string,
};

const WrappedForm = Form.create()(CrudForm);

export default WrappedForm;
