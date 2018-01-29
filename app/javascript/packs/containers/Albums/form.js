import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

import { postAlbums } from '../../store/Albums/actions';

const FormItem = Form.Item;
const { TextArea } = Input;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class AlbumForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      !err && this.props.postAlbums(values);
    });
  };

  render() {
    const { getFieldsError, getFieldDecorator } = this.props.form;

    return (
        <div className="ContentPanel">
          <Form layout="vertical" onSubmit={this.handleSubmit}>

            <FormItem label="Название">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Укажите название' }],
              })(
                  <Input size="large" />,
              )}
            </FormItem>

            <FormItem label="URL">
              {getFieldDecorator('slug', {
                rules: [{ required: true, message: 'Укажите URL' }],
              })(
                  <Input size="large" />,
              )}
            </FormItem>

            <FormItem label="Опубликовать?">
              {getFieldDecorator('publish', { valuePropName: 'checked' })(<Switch />)}
            </FormItem>

            <FormItem
                label="Описание"
            >
              {getFieldDecorator('description', {})(
                  <TextArea rows={6} />,
              )}
            </FormItem>

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

AlbumForm.propTypes = {
  postAlbums: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {};

const mapDispatchToProps = dispatch => bindActionCreators({
  postAlbums,
}, dispatch);

const wrapper = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
);

const WrappedForm = Form.create()(wrapper(AlbumForm));

export default WrappedForm;
