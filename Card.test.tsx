// src/components/Card.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Only this import is needed
import Card from './Card';

describe('Card Component', () => {
  test('renders the card with title and content', () => {
    render(<Card title="Test Title" content="Test Content" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('renders the card with footer', () => {
    render(<Card title="Test Title" content="Test Content" footer={<button>Footer Button</button>} />);
    expect(screen.getByText('Footer Button')).toBeInTheDocument();
  });

  test('does not render footer when not provided', () => {
    render(<Card title="Test Title" content="Test Content" />);
    expect(screen.queryByText('Footer Button')).not.toBeInTheDocument();
  });
});
