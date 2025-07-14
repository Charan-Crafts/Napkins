import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    slug: 'custom-generation',
    date: 'June 25th, 2025',
    title: 'Introducing Custom Generation – Get the Visual You Want, Faster',
    excerpt: 'Today we’re launching Custom Generation to give you more control over visuals...',
    image: 'src/assets/one.png',
    link: '/Blog/custom-generation',
    bgColor: '#e4f5ff',
  },
  {
    slug: 'elastic-designs',
    date: 'May 27th, 2025',
    title: 'Introducing Elastic Designs – Get The Right Visuals, Faster',
    excerpt: 'Napkin visuals just got better. With Elastic Designs, your visuals now scale...',
    image: 'src/assets/two.png',
    link: '/Blog/elastic-designs',
    bgColor: '#e7fcef',
  },
  {
    slug: 'File Import',
    date: 'April 10th, 2025',
    title: 'PPT Export & File Import - Now Live on Napkin',
    excerpt: 'We’ve got a big Napkin update you’ll love: You can now export visuals directly...',
    image: 'src/assets/three.png',
    link: '/Blog/File Import',
    bgColor: '#f6e8fd',
  },
  {
    slug: 'Custom styles',
    date: 'March 3rd, 2025',
    title: 'Introducing Custom Styles: Generate Visuals That Match Your Brand',
    excerpt: 'We’re excited to introduce Custom Styles — one of our most requested features...',
    image: 'src/assets/four.png',
    link: '/Blog/Custom styles',
    bgColor: '#e4f5ff',
  },
  {
    slug: 'Faster',
    date: 'January 22th, 2025',
    title: 'Faster, More Accurate Generation with 50+ New Designs in Napkin',
    excerpt: 'Today, we’re excited to share a major update with you: Napkin’s visual generation...',
    image: 'src/assets/five.png',
    link: '/Blog/Faster',
    bgColor: '#fef7e9',
  },
  {
    slug: 'Frame',
    date: 'December 17th, 2024',
    title: 'Better Visuals, Less Effort – Introducing Frame & Canvas Settings',
    excerpt: 'We just released frame, style switching, aspect ratio, canvas settings...',
    image: 'src/assets/six.png',
    link: '/Blog/Frame',
    bgColor: '#f1f3ff',
  },
  
  {
    slug: 'Comm',
    date: 'December 17th, 2024',
    title: 'Better Visuals, Less Effort – Introducing Frame & Canvas Settings',
    excerpt: 'We just released frame, style switching, aspect ratio, canvas settings...',
    image: 'src/assets/seven.png',
    link: '/Blog/Comm',
    bgColor: '#f1f3ff',
  },
];

const Blog = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4">Blog</h2>
      <Row className="g-4">
        {blogPosts.map((post, idx) => (
          <Col md={4} key={idx}>
            <Card style={{ backgroundColor: post.bgColor, border: 'none', borderRadius: '16px' }}>
              <Card.Img variant="top" src={post.image} style={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} />
              <Card.Body>
                <small className="text-muted">{post.date}</small>
                <Card.Title className="mt-2" style={{ fontWeight: 'bold', fontSize: '1rem' }}>{post.title}</Card.Title>
                <Card.Text style={{ fontSize: '0.9rem' }}>{post.excerpt}</Card.Text>
                <Button as={Link} to={post.link} variant="dark" size="sm">
                  Read more →
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
