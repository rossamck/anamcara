import React from 'react';
import { motion } from 'framer-motion';
import { Row, Col, Card, Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-lg p-6"
    >
      <Row justify="center">
        <Col span={20}>
          <Card bordered={false}>
            <Paragraph style={{ textAlign: 'center', marginBottom: '40px' }}>
              We'd love to hear from you! Please reach out using the contact information below.
            </Paragraph>
          </Card>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '40px' }}>
        <Col span={20}>
          <Card bordered={false}>
            <Title level={2} className="text-primary" style={{ textAlign: 'center' }}>Contact Information</Title>
            <Paragraph style={{ textAlign: 'center' }}>
              <Text strong>Paul McKeown</Text><br />
              Phone: 01358742227<br />
              Email: <a href="mailto:anamcaralistening@gmail.com">anamcaralistening@gmail.com</a><br />
              Address: Forsyth Hall Annexe, Balmedie, Aberdeenshire, AB23 8YR
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </motion.div>
  );
}

export default Contact;
