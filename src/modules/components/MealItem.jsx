import React from 'react';
import { Component } from 'react';
import { MDBCard, MDBRow, MDBCol, MDBCardBody, MDBCardHeader, MDBBtn, MDBContainer, MDBIcon } from 'mdbreact';
import { Label, Input } from 'reactstrap';

export class MealItem extends Component {
    render() {
        const {newItem, items, flightDetail} =this.props.state;
        console.log('new Items' + newItem);
        console.log('Items' + items);
        console.log('flightDetail' + flightDetail.ancilliary);
        console.log('flightDetail' + flightDetail.meals);
        return (
            <MDBCard>
                <MDBCardHeader>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="6">
                                <Input
                                    type="radio"
                                    name="meals"
                                    checked={this.props.state.service === "Meal"}
                                    onChange={this.props.selectMealService} >
                                </Input>
                                <Label>Meal</Label>
                            </MDBCol>
                            <MDBCol md="6">
                                <Input type="radio" name="ancilliary" checked={this.props.state.service === "Ancilliary"} onChange={this.props.selectAncilliaryService} ></Input>
                                <Label>Ancilliary</Label>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBContainer>
                        <form onSubmit={this.props.AddHandler}>
                            <MDBRow>
                                <Input type="text" onChange={this.props.handleChange} value={newItem} style={{ width: "70%" }}></Input>
                                <MDBBtn size="md" type="submit" style={{ margin: "0rem", marginLeft: "10px" }}>Add</MDBBtn>
                            </MDBRow>
                        </form>
                        <MDBRow style={items.length > 0 ? { border: "solid", marginTop: "5px" } : {}}>
                            {items.map((item, index) => (<MDBBtn key={index} outline color="primary" size="sm" onClick={this.props.deleteServiceItem} value = {item}>{item+''}<MDBIcon style={{paddingLeft : "5px"}} icon="trash-alt" /></MDBBtn>))}
                        </MDBRow>
                    </MDBContainer>
                </MDBCardBody>
            </MDBCard>
        );
    }
}
export default MealItem