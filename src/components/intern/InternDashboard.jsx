import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f5f6fa' }}>
      {/* Sidebar */}
      <div style={{ width: '220px', background: '#1e272e', color: '#fff', padding: '20px' }}>
        <h5 style={{ marginBottom: '30px' }}>Your Logo</h5>
        <p>Dashboard</p>
        <p>Courses</p>
        <p>Community</p>
        <p>Blog</p>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        {/* Header */}
        <div style={{ background: '#fff', padding: '15px 30px', borderBottom: '1px solid #ddd' }}>
          <h6 style={{ float: 'right' }}>Bryan Funk</h6>
          <h5>Welcome back, Bryan</h5>
        </div>

        {/* Content */}
        <Container fluid style={{ padding: '30px' }}>
          {/* Top Cards */}
          <Row className="mb-4">
            <Col md={4}>
              <Card className="p-3">
                <h6>Badges</h6>
                <div>
                  <Badge bg="danger" className="me-2">🏅</Badge>
                  <Badge bg="warning" className="me-2">🎖️</Badge>
                  <Badge bg="success">🏆</Badge>
                </div>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="p-3">
                <h6>Certificates</h6>
                <p>2 Earned</p>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="p-3">
                <h6>Leaderboard</h6>
                <p>Top 10</p>
              </Card>
            </Col>
          </Row>

          {/* Bottom Section */}
          <Row>
            <Col md={6}>
              <Card className="p-3">
                <h6>Checklist</h6>
                <p>Trial Site Example Checklist</p>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="p-3">
                <h6>Course Progress</h6>
                <p>All About Tovuti</p>
                <ProgressBar now={33} label={`33%`} />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
