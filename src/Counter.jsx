import React from 'react';
import { Card, Button, Stack, Badge } from 'react-bootstrap';
import { CounterLabel } from './CounterLabel.jsx';

export default function Counter({ id, name, value, increment, onIncrement, onDecrement, onReset, onDelete }) {
  const canDecrement = value - increment >= 0;
  const resetDisabled = value === 0;

  return (
    <Card className="shadow-lg counter-card w-100 border-5-solid-success">
      <Card.Body className="d-flex flex-column align-items-center">
        <CounterLabel name={name} />

        <Stack gap={1} className="w-100 align-items-center mb-3">
          <div>Value: <strong>{value}</strong></div>
          <div className="text-muted">Increment: {increment}</div>
        </Stack>

        <div className="d-flex gap-2 mb-3">
          <Button variant="success" onClick={onIncrement}>+{increment}</Button>
          <Button variant={canDecrement ? 'warning' : 'secondary'} disabled={!canDecrement} onClick={onDecrement}>-{increment}</Button>
          <Button variant="outline-secondary" disabled={resetDisabled} onClick={onReset}>Reset</Button>
        </div>

        <div className="d-flex w-100 justify-content-between align-items-center">
          <Badge bg="success">ID: {String(id).slice(-6)}</Badge>
          <div>
            <Button size="sm" variant="outline-danger" onClick={onDelete}>UnThing</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
