import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';
import { exampleShowData } from "./testData"
import userEvent from '@testing-library/user-event'

test('Display get butonu varmi sezon sayisi', () => {
    render(<Display />);
    userEvent.click(screen.getByTestId("display-cont-button"));
    setTimeout(() => {
    expect(screen.getAllByTestId("season-option").length)
    .toBe(exampleShowData.seasons.length);
    }, 2500);   
});

