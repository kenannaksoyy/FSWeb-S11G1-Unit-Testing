import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

describe("Show none proplarla calisiyormu", ()=>{
    beforeEach(() =>{ 
    render(<Show show="none" selectedSeason="none"/>)
    })
    test(" Show none ile loading gorunuyormu", () =>{
        expect(screen.getByTestId("loading-container")).toBeInTheDocument();
    });
    test(" Show none ile fetchin mesaji gorunuyormu", () =>{
        expect(screen.getByTestId("loading-container").textContent).toBe("Fetching data...");
    });

});
