<Row>
    <Col md={2}>
      <Card style={{ width: '10rem', height: '8rem' }}>
        {/* Card content goes here */}
      </Card>
    </Col>
    <Col md={2}>
      <Card style={{ width: '10rem', height: '8rem' }}>
        {/* Card content goes here */}
      </Card>
    </Col>
    <Col md={2}>
      <Card style={{ width: '10rem', height: '8rem' }}>
        {/* Card content goes here */}
      </Card>
    </Col>
    <Col md={2}>
      <Card style={{ width: '10rem', height: '8rem' }}>
        {/* Card content goes here */}
      </Card>
    </Col>
    <Col md={2}>
      <Card style={{ width: '10rem', height: '8rem' }}>
        {/* Card content goes here */}
      </Card>
    </Col>
  </Row>
  <Row>
    <Col md={2}>
      <Card style={{ width: '10rem', height: '8rem' }}>
        {/* Card content goes here */}
      </Card>
    </Col>
    <Col md={2}>
      <Card style={{ width: '10rem', height: '8rem' }}>
        {/* Card content goes here */}
      </Card>
    </Col>
    <Col md={2}>
      <Card style={{ width: '10rem', height: '8rem' }}>
        {/* Card content goes here */}
      </Card>
    </Col>
    <Col md={2}>
      <Card style={{ width: '10rem', height: '8rem' }}>
        {/* Card content goes here */}
      </Card>
    </Col>
    <Col md={2}>
      <Card style={{ width: '10rem', height: '8rem' }}>
        {/* Card content goes here */}
      </Card>
    </Col>
  </Row>
</Container>



      <div className="image-grid">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`API Response Image ${index + 1}`}
            className="grid-image"
          />
        ))}
      </div>
    </Col>

  </Row>