import { render, screen } from "@testing-library/react";
import RelationRow from "./RelationRow";

test ("shows image when given relation data", () => {
    const mockRelationData = {
        users_id: 1,
        name: "Tony Craft",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxWrpJ0_-QfotgLA9WI80lPLXOFQGwX0pdrXor0EnKXud4aSB5bbLcvvIWQf0PTBnKsQ&usqp=CAU",
        relation_type: "husband",
        rating: 4
    };

    render(<RelationRow
        id={mockRelationData.users_id}
        name={mockRelationData.name}
        picture={mockRelationData.picture}
        relation_type={mockRelationData.relation_type}
        rating={mockRelationData.rating}
        ></RelationRow> );

    const imgElement = screen.getByTestId("picture-image");
    expect(imgElement).toHaveAttribute ("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxWrpJ0_-QfotgLA9WI80lPLXOFQGwX0pdrXor0EnKXud4aSB5bbLcvvIWQf0PTBnKsQ&usqp=CAU");
    expect(imgElement).toHaveAttribute ("alt", "Tony Craft");    
});

test ("shows name when given relation data", () => {
    const mockRelationData = {
        users_id: 1,
        name: "Tony Craft",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxWrpJ0_-QfotgLA9WI80lPLXOFQGwX0pdrXor0EnKXud4aSB5bbLcvvIWQf0PTBnKsQ&usqp=CAU",
        relation_type: "husband",
        rating: 4
    };

    render(<RelationRow
        id={mockRelationData.users_id}
        name={mockRelationData.name}
        picture={mockRelationData.picture}
        relation_type={mockRelationData.relation_type}
        rating={mockRelationData.rating}
        ></RelationRow> );

    const h3Element = screen.getByText("Tony Craft");
    expect(h3Element).toBeInTheDocument();
});
