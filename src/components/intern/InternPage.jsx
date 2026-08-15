import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
  Badge,
  ProgressBar,
  Dropdown,
  ButtonGroup,
  Form,
  ListGroup,
  Modal,
  Nav
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/* =======================
   Custom Nude & Beige Theme
======================= */
const styles = {
  page: {
    backgroundColor: "#f5efe6",
    minHeight: "100vh"
  },
  sidebar: {
    backgroundColor: "#7591a7",
    minHeight: "100vh",
    padding: "20px",
    borderRight: "1px solid #1e272e"
  },
  sidebarItem: {
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#1e272e",
    fontWeight: "500"
  },
  activeSidebarItem: {
    backgroundColor: "#638198",
    color: "#fff"
  },
  card: {
    backgroundColor: "#7ea3c0",
    border: "1px solid #1e272e",
    borderRadius: "12px"
  },
  header: {
    backgroundColor: "#546c7e",
    borderRadius: "12px"
  },
  button: {
    backgroundColor: "#1e272e",
    border: "none"
  },
  welcomeBanner: {
    background:
      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f') center/cover",
    color: "#fff",
    padding: "40px",
    borderRadius: "12px",
    marginBottom: "20px"
  }
};

/* =======================
   Role Switcher
======================= */
const RoleSwitcher = ({ currentRole, availableRoles, onRoleChange }) => (
  <Dropdown as={ButtonGroup}>
    <Dropdown.Toggle style={styles.button}>
      Current Role: {currentRole}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {availableRoles.map((role) => (
        <Dropdown.Item
          key={role}
          active={role === currentRole}
          onClick={() => onRoleChange(role)}
        >
          {role}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

const InternPage = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [hovered, setHovered] = useState(null);

  const [user] = useState({
    name: "Alex Morgan",
    email: "alex@email.com",
    availableRoles: [
      "Facilitator",
      "Assessor",
      "Moderator",
      "Mentor",
      "Intern"
    ]
  });

  const [currentRole, setCurrentRole] = useState("Intern");

  const handleRoleChange = (newRole) => {
    setCurrentRole(newRole);
  };

  const openModal = (modal) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  /* Mock Data */
  const recentReports = [
    {
      id: 1,
      week: "Week 1",
      submitted: "2024-03-01",
      status: "approved",
      feedback: "Good work!"
    },
    {
      id: 2,
      week: "Week 2",
      submitted: "2024-03-08",
      status: "pending"
    }
  ];

  const timesheets = [
    { id: 1, week: "Week 10", hours: 35, status: "approved" },
    { id: 2, week: "Week 11", hours: 32, status: "pending" }
  ];

  const documents = [
    "Internship Guide.pdf",
    "Timesheet Template.docx",
    "Company Policy.pdf"
  ];

  const notifications = [
    "Your Week 2 report is under review.",
    "Timesheet approved.",
    "New training material uploaded."
  ];

  const feedbackList = [
    {
      id: 1,
      supervisor: "Dr. Smith",
      comment: "Excellent progress. Keep it up!"
    }
  ];

  const progressData = {
    totalHours: 67,
    requiredHours: 200,
    reportsSubmitted: 2,
    totalReports: 12,
    competenciesAchieved: 5,
    totalCompetencies: 15
  };

  const performance = {
    score: 85,
    rating: "Competent"
  };

  const sidebarItems = [
    { key: "reports", label: "Reports" },
    { key: "timesheets", label: "Timesheets" },
    { key: "progress", label: "My Progress" },
    { key: "performance", label: "Performance" },
    { key: "feedback", label: "Feedback" },
    { key: "documents", label: "Document Center" },
    { key: "notifications", label: "Notifications" },
    { key: "profile", label: "Profile" }
  ];

  return (
    <Container fluid style={styles.page}>
      <Row>
        {/* Sidebar */}
        <Col md={3} lg={2} style={styles.sidebar}>
          <h5 className="text-center mb-4">Intern Portal</h5>
          <Nav className="flex-column">
            {sidebarItems.map((item) => (
              <div
                key={item.key}
                style={styles.sidebarItem}
                onClick={() => openModal(item.key)}
              >
                {item.label}
              </div>
            ))}
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={9} lg={10} className="p-4">
          {/* Header */}
          <div
            className="d-flex justify-content-between align-items-center mb-4 p-3 shadow-sm"
            style={styles.header}
          >
            <div>
              <h4 className="mb-0">Welcome, {user.name}</h4>
              <small className="text-muted">Intern Dashboard</small>
            </div>
            <RoleSwitcher
              currentRole={currentRole}
              availableRoles={user.availableRoles}
              onRoleChange={handleRoleChange}
            />
          </div>

          {/* Welcome Banner */}
          <div style={styles.welcomeBanner}>
            <h2>Welcome back, {user.name}</h2>
            <p>Track your internship progress and performance.</p>
          </div>

          <Card style={styles.card} className="p-4 text-center">
            <h5>Select an option from the left sidebar to continue.</h5>
          </Card>
        </Col>
      </Row>

      {/* =======================
          MODALS
      ======================= */}

      {/* Reports Modal */}
      <Modal show={activeModal === "reports"} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Reports</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button style={styles.button} className="mb-3">
            + Create New Report
          </Button>
          {recentReports.map((report) => (
            <Card
              key={report.id}
              className="mb-3"
              style={
                hovered === report.id
                  ? { ...styles.card, transform: "translateY(-5px)" }
                  : styles.card
              }
              onMouseEnter={() => setHovered(report.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Card.Body>
                <h5>{report.week} Report</h5>
                <p className="text-muted">
                  Submitted: {report.submitted}
                </p>
                {report.feedback && (
                  <p>
                    <strong>Feedback:</strong> {report.feedback}
                  </p>
                )}
                <Badge bg={report.status === "approved" ? "success" : "warning"}>
                  {report.status}
                </Badge>
              </Card.Body>
            </Card>
          ))}
        </Modal.Body>
      </Modal>

      {/* Timesheets Modal */}
      <Modal show={activeModal === "timesheets"} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Timesheets</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button style={styles.button} className="mb-3">
            + Log Hours
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Week</th>
                <th>Hours</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {timesheets.map((t) => (
                <tr key={t.id}>
                  <td>{t.week}</td>
                  <td>{t.hours}</td>
                  <td>
                    <Badge bg={t.status === "approved" ? "success" : "warning"}>
                      {t.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>

      {/* Progress Modal */}
      <Modal show={activeModal === "progress"} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>My Progress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Total Hours</p>
          <ProgressBar
            now={(progressData.totalHours / progressData.requiredHours) * 100}
            label={`${progressData.totalHours}/${progressData.requiredHours}`}
          />
          <br />
          <p>Reports Submitted</p>
          <ProgressBar
            now={
              (progressData.reportsSubmitted /
                progressData.totalReports) *
              100
            }
          />
        </Modal.Body>
      </Modal>

      {/* Performance Modal */}
      <Modal show={activeModal === "performance"} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Performance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Score: {performance.score}%</h5>
          <Badge bg="success">{performance.rating}</Badge>
        </Modal.Body>
      </Modal>

      {/* Feedback Modal */}
      <Modal show={activeModal === "feedback"} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {feedbackList.map((f) => (
              <ListGroup.Item key={f.id}>
                <strong>{f.supervisor}:</strong> {f.comment}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>

      {/* Documents Modal */}
      <Modal show={activeModal === "documents"} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Document Center</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {documents.map((doc, index) => (
              <ListGroup.Item key={index}>📄 {doc}</ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>

      {/* Notifications Modal */}
      <Modal show={activeModal === "notifications"} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {notifications.map((note, index) => (
              <ListGroup.Item key={index}>🔔 {note}</ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>

      {/* Profile Modal */}
      <Modal show={activeModal === "profile"} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control defaultValue={user.name} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control defaultValue={user.email} />
            </Form.Group>
            <Button style={styles.button}>Update Profile</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default InternPage;