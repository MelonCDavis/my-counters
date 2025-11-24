import React from 'react';
import { Card } from 'react-bootstrap';

export function CounterLabel({ name }) {
  return (
    <Card.Title className="text-center text-success fw-bold">{name}</Card.Title>
  );
}
