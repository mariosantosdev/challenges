import React from 'react';
import { render } from '@testing-library/react';
import Task from '../components/Task';

test('renders internal components of Task', () => {
    let tasks = [{ id: 'id', text: 'task', checked: true }]
    const blankFunc = () => { }

    const { getByText } = render(<Task tasks={tasks} onChange={blankFunc} onDelete={blankFunc} currentTabShow={'all'} />);

    expect(getByText(/task/i)).toBeTruthy();
});
