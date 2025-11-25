import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Counter from "./Counter.jsx";

const STORAGE_KEY = "multi-counter-app";

export default function App() {
  const [counters, setCounters] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load saved counters", e);
      return [];
    }
  });

  const [nameInput, setNameInput] = useState("");
  const [incrementInput, setIncrementInput] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(counters));
    } catch (e) {
      console.error("Failed to save state", e);
      setError("Failed to persist data. Storage may be full.");
    }
  }, [counters]);

  const handleAddCounter = (e) => {
    e.preventDefault();
    setError(""); 

    const trimmedName = nameInput.trim();

    if (!trimmedName) {
      return setError("A Thing MUST be named.");
    }

    if (
      counters.some(
        (counter) => counter.name.toLowerCase() === trimmedName.toLowerCase()
      )
    ) {
      return setError("A Thing must be unique.");
    }

    if (incrementInput <= 0) {
      return setError("Increment amount must be positive.");
    }

    const newCounter = {
      id: crypto.randomUUID(),
      name: trimmedName,
      value: 0,
      increment: Number(incrementInput),
    };

    setCounters((prev) => [...prev, newCounter]);
    setNameInput("");
    setIncrementInput(1);
  };

  const updateCounter = (id, delta) => {
    setCounters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, value: c.value + delta } : c))
    );
  };

  const resetCounter = (id) => {
    setCounters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, value: 0 } : c))
    );
  };

  const deleteCounter = (id) => {
    setCounters((prev) => prev.filter((c) => c.id !== id));
  };

  const totalValue = counters.reduce(
    (total, counter) => total + counter.value,
    0
  );

  return (
    <Container className="py-4 d-flex flex-column align-items-center text-center">
      <h1 className="text-success fw-bold">Count A Thing</h1>
      <p>or count as many things as you choose...</p>

      {error && (
        <Card className="p-2 mb-3 border-danger w-50">
          <span className="text-danger fw-semibold">{error}</span>
        </Card>
      )}

      <Card className="p-4 mb-4 shadow" style={{ maxWidth: 500 }}>
        <Form onSubmit={handleAddCounter}>
          <Form.Group className="mb-3 text-start">
            <Form.Label>
              <strong>Name your Thing</strong>
            </Form.Label>
            <Form.Control
              type="text"
              value={nameInput}
              placeholder="Give Thing a name..."
              onChange={(e) => setNameInput(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-start">
            <Form.Label>
              <strong>Increment Amount</strong>
            </Form.Label>
            <Form.Select
              value={incrementInput}
              onChange={(e) => setIncrementInput(e.target.value)}
            >
              <option value={1}>+1</option>
              <option value={5}>+5</option>
              <option value={10}>+10</option>
            </Form.Select>
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Count Thing
          </Button>
        </Form>

        <h4 className="mt-3">
          Just how many Things is that you ask?{" "}
          <strong>{totalValue}</strong>
        </h4>
      </Card>

      <Row
        className="justify-content-center g-4 w-100"
        style={{ maxWidth: 1200 }}
      >
        {counters.length === 0 ? (
          <p className="text-muted">
            These Things don't make themselves! Get to countin!
          </p>
        ) : (
          counters.map((counter) => (
            <Col
              key={counter.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Counter
                id={counter.id}
                name={counter.name}
                value={counter.value}
                increment={counter.increment}
                onIncrement={() =>
                  updateCounter(counter.id, counter.increment)
                }
                onDecrement={() =>
                  updateCounter(counter.id, -counter.increment)
                }
                onReset={() => resetCounter(counter.id)}
                onDelete={() => deleteCounter(counter.id)}
              />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}
