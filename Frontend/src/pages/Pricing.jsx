import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const [billing, setBilling] = useState('monthly'); // or 'yearly'
  const navigate = useNavigate();

  const isYearly = billing === 'yearly';

  const plans = [
    {
      type: 'Free',
      price: 0,
      features: [
        '500 AI credits per week',
        'Unlimited visuals editing',
        'Unlimited file import (PPT, DOC, PDF, HTML, MD)',
        'Unlimited PNG & PDF export',
        'Built-in styles and fonts',
        'Standard icons',
        'Napkin branding on visuals',
      ],
    },
    {
      type: 'Plus',
      label: 'Popular',
      price: isYearly ? 9 : 12,
      features: [
        'Everything in Free +',
        '10,000 AI credits per month',
        'Unlimited PPT & SVG export',
        '3 Custom styles',
        'Bold icons',
        'Remove Napkin branding',
        'Team management and billing',
      ],
    },
    {
      type: 'Pro',
      label: 'Stand out',
      price: isYearly ? 22 : 30,
      features: [
        'Everything in Plus +',
        '30,000 AI credits per month',
        'Exclusive designs',
        'Unlimited custom styles',
        'Upload your fonts',
        'Team management and billing',
        'Optional credit top ups',
      ],
    },
  ];

  const backgroundColors = {
    Free: '#f6f1fb',       // Light lavender
    Plus: '#e4f6fd',       // Light baby blue
    Pro: '#fff4e5',        // Light peach/orange
  };

  const textColors = {
    Free: 'secondary',
    Plus: 'primary',
    Pro: 'warning',
  };

  return (
    <Container className="text-center py-5">
      <h1 className="fw-bold mb-4">
        Create Compelling <br /> Visuals <span className="text-dark">10× Faster</span>
      </h1>

      <div className="d-flex justify-content-center gap-2 mb-5">
        <Button
          variant={billing === 'monthly' ? 'dark' : 'light'}
          onClick={() => setBilling('monthly')}
        >
          Pay monthly
        </Button>
        <Button
          variant={billing === 'yearly' ? 'dark' : 'light'}
          onClick={() => setBilling('yearly')}
        >
          Pay yearly <small className="text-danger">Save 25%</small>
        </Button>
      </div>

      <Row className="g-4 justify-content-center">
        {plans.map((plan, idx) => (
          <Col md={6} lg={4} key={idx}>
            <Card
              className="h-100 text-start border-0 shadow-sm"
              style={{ backgroundColor: backgroundColors[plan.type] }}
            >
              <Card.Body>
                <div className={`small fw-bold mb-1 text-${textColors[plan.type]}`}>
                  {plan.type.toUpperCase()}
                </div>
                {plan.label && (
                  <div className="text-secondary small mb-3">{plan.label}</div>
                )}
                <h3 className="fw-bold">
                  ${plan.price}{' '}
                  {plan.type !== 'Free' && (
                    <span className="fs-6 text-muted">/ person / month</span>
                  )}
                </h3>
                <Button
                  variant="dark"
                  className="mt-2 mb-4"
                  onClick={() => navigate('/signup')}
                >
                  {plan.type === 'Free' ? 'Sign up' : 'Get Started'}
                </Button>
                <ul className="text-start small">
                  {plan.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="mt-5">
        <p className="fs-5">
          Looking for <span className="text-warning fw-bold">Enterprise</span>{' '}
          plan?
        </p>
        <Button variant="dark">Contact Us</Button>
      </div>
    </Container>
  );
};

export default Pricing;
