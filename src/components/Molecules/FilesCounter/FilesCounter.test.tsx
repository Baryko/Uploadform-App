import React from 'react';
import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import FilesCounter from './FilesCounter';

describe('Files Counter', () => {
  it('Renders the component when the props is passed other than initial value', () => {
    const file = new File([''], 'darthvader.png');
    Object.defineProperty(file, 'size', { value: 1024 * 1024 + 1 });
    const secondfile = new File([''], 'example.png');
    Object.defineProperty(secondfile, 'size', { value: 1024 * 1024 + 1 });

    const files = [file, secondfile];
    render(<FilesCounter files={files} filesQuantity={files.length} />);

    const filesSizeElement = screen.getByText(/MB/);
    const filesCounterElement = screen.getByText(`Files quantity: ${files.length}`);

    expect(filesSizeElement).toBeInTheDocument();
    expect(filesCounterElement).toBeInTheDocument();
  });

  it('Render the component with initial values passed in props', () => {
    render(<FilesCounter files={[]} filesQuantity={0} />);

    const filesSizeElement = screen.queryByText(/MB/);
    const filesCounterElement = screen.queryByText(`Files quantity: 3`);

    expect(filesSizeElement).not.toBeInTheDocument();
    expect(filesCounterElement).not.toBeInTheDocument();
  });
});
