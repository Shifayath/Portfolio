'use client'
import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { message as antdMessage } from 'antd';
import 'antd/dist/reset.css'; 
import './style.css';

function Contact() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await fetch('/api/portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        antdMessage.success('Email sent successfully!');
        form.resetFields(); // Clear the form fields after successful submission
      } else {
        antdMessage.error(data.error || 'Failed to send email.');
      }
    } catch (error) {
      antdMessage.error('An error occurred while sending the email.');
      console.error('Error:', error);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container text-center">
        <p className="section-subtitle">How can you communicate?</p>
        <h6 className="section-title mb-6">Contact Me</h6>
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ name: '', email: '', phone: '', message: '' }}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                { required: true, message: 'Please enter your name' },
                { min: 5, message: 'Name must be at least 5 characters' },
                {
                  validator: (_, value) => {
                    // Basic input injection check
                    if (value && /[<>"'%;()&+]/.test(value)) {
                      return Promise.reject('Invalid characters detected in name');
                    }
                    return Promise.resolve();
                  }
                }
              ]}
            >
              <Input maxLength={50} />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter your email' },
                {
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address',
                },
                {
                  validator: (_, value) => {
                    // Basic input injection check
                    if (value && /[<>"'%;()&+]/.test(value)) {
                      return Promise.reject('Invalid characters detected in email');
                    }
                    return Promise.resolve();
                  }
                }
              ]}
            >
              <Input maxLength={100} />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone"
              rules={[
                { required: true, message: 'Please enter your phone number' },
                {
                  pattern: /^\d{10}$/,
                  message: 'Phone number must be exactly 10 digits',
                },
                {
                  validator: (_, value) => {
                    // Basic input injection check
                    if (value && /[<>"'%;()&+a-zA-Z]/.test(value)) {
                      return Promise.reject('Invalid characters detected in phone number');
                    }
                    return Promise.resolve();
                  }
                }
              ]}
            >
              <Input maxLength={10} type="tel" pattern="\d*" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[
                { required: true, message: 'Please enter your message' },
                { min: 10, message: 'Message must be at least 10 characters' },
                {
                  validator: (_, value) => {
                    // Basic input injection check
                    if (value && /[<>"'%;()&+]/.test(value)) {
                      return Promise.reject('Invalid characters detected in message');
                    }
                    return Promise.resolve();
                  }
                }
              ]}
            >
              <Input.TextArea rows={4} maxLength={500} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
