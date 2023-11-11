import {render, screen} from "@testing-library/react";
import Home from "@/app/page";
import '@testing-library/jest-dom';

describe('Home', () => {
    it('should have docs text', () => {
        render(<Home />) // ARRANGE
    
        const myElem = screen.getByText('Docs') // ACT
    
        expect(myElem).toBeInTheDocument()     // ASSERT
    })

    it('should have contain text "information" ', () => {
        render(<Home />) // ARRANGE
    
        const myElem = screen.getByText(/information/i) // ACT
    
        expect(myElem).toBeInTheDocument()     // ASSERT
    })

    it('should have contain text "information" ', () => {
        render(<Home />) // ARRANGE
    
        const myElem = screen.getByRole('heading', {
            name: "Learn"
        }) // ACT
    
        expect(myElem).toBeInTheDocument()     // ASSERT
    })
})

