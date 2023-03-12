import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { it, expect, vi } from 'vitest';

import Inputfield from './InputField';

describe('Inputfield', () => {
  it('renders the component and change value onchange', () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <Inputfield
        id="title"
        placeholder="please insert a title"
        type="text"
        name="title"
        label="Title"
        handleValueChange={onChange}
        value=""
      />
    );
    const inputElement = screen.getByPlaceholderText(/please insert a title/i);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: 'title example' } });
    rerender(
      <Inputfield
        id="title"
        placeholder="please insert a title"
        type="text"
        name="title"
        label="Title"
        handleValueChange={onChange}
        value="title example"
      />
    );
    expect(inputElement).toHaveValue('title example');
  });
});
