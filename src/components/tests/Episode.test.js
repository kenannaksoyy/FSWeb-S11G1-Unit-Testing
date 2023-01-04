import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";
import {exampleEpisodeData,exampleEpisodeDataV2,defImg} from "./testData";



const testIDBul = (testID) => {
    return screen.getByTestId(testID)
}

const testIDTextBul =(testID) =>{
    return screen.getByTestId(testID).textContent;
}

describe("Duzgun Veriyle Calisiyorumyu", () => {
    beforeEach(()=>{
        render(<Episode episode={exampleEpisodeData}/>);
    });

    test("Sorunsuz render oluyormu", () => {
        //<Episode />
        expect(testIDBul("episode-cont"))
        .toBeInTheDocument();        
    });
    
    test("İsim Kontrolu", () => {
        expect(testIDTextBul("episode-cont-name"))
        .toBe(exampleEpisodeData["name"]);
    });

    test("Number Kontrolu",() =>{
        expect(testIDBul("episode-cont-number").textContent)
        .toBe(`Season ${exampleEpisodeData["season"]}, Episode ${exampleEpisodeData["number"]}`);     
    });
})

describe("Farkli Veriyle Calisiyormu", () => {
    beforeEach(()=>{
        render(<Episode episode={exampleEpisodeDataV2}/>);
    });
    test("image tanımlanmadığında default image render ediliyor", () => {
        expect(testIDBul("episode-cont-img").src)
        .toBe(defImg);
    });
    test("İsim Kontrolu", () => {
        expect(testIDTextBul("episode-cont-name"))
        .toBe(exampleEpisodeDataV2["name"]);
    }); 
  
})
