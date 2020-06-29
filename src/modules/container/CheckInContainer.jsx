import React, { Component } from 'react';
import  Header  from '../components/Header';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import PassengerList from '../components/PassengerList';
import FlightDetail from '../components/FlightDetail';

import { getPassengerList, createNewPassenger, updatePassengerDetail, updatePassengerSeatAndStatus } from '../../axios/PassengerAPI';
import { getflightDetail, updateFlightDetail } from '../../axios/FlightAPI';
import { connect } from 'react-redux';

import AddPassengerModal from '../components/AddPassengerModal';
import MealItem from '../components/MealItem';
import UpdatePassengerModal from '../components/UpdatePassengerModal';

//import SeatMap from '../components/SeatMap';
import '../../CSS/Seat.css';
import * as SeatUtil from '../../Util/SeatUtil';
//import SeatMapInformation from '../components/SeatMapInformation';
import SeatContainer from './SeatContainer';



export class CheckInContainer extends Component {
    constructor(props){
        super(props)
        const role = this.props.role;

        let isAdmin = false
        if(role ==="admin")
         isAdmin = true;
         console.log('role checking ' + isAdmin);
        this.state = {
            passengerList : [],
            flightDetail : [],
            noPassportPax : false,
            noAddressPax : false,
            noDOBPax : false,
            allPassengerList : '',

            
            firstName : "",
            lastName : "",
            gender : "Male",
            seatNo : "",
            mobileNo : "",
            passportNo : "",
            address : "",
            dateOfBirth : "",
            flightId : this.props.flightId,
            infant : "No",
            wheelChair : "No",
            status : "NC",

            service : "Meal",
            items : [],
            newItem : '',

            selectedPaxId : '',

            isAdmin,

            //divValue:""
            seatMap : []

            
            

            

            
        }
        
    }
    
    componentDidMount(){
        let passengerListPromise = getPassengerList(this.props.flightId);
        passengerListPromise.then(passengerList => {
            //console.log(passengerList);
            this.setState({passengerList : passengerList, allPassengerList : passengerList});
            return passengerList;
        })

       // Implementing SeatMap
        .then(passengerList=>{
            let seatMap = [];
            for(let i=0; i<passengerList.length; i++){
                //console.log(passengerList[i].status);
                if(passengerList[i].status ==="AC"){
                    let paxId=passengerList[i].id;
                    let seatNo = SeatUtil.getSeatNoFromSeatLocation(passengerList[i].seatNo);
                    let infant= passengerList[i].infant;
                    let wheelChair= passengerList[i].wheelChair;
                    
                        seatMap = [...seatMap, { paxId, seatNo, wheelChair, infant }]
                    }
                }
                this.setState({ seatMap: seatMap });
                
            

        })

        let flightDetailPromise = getflightDetail(this.props.flightId);
        flightDetailPromise.then(flightDetail => {
            //console.log(flightDetail);
            this.setState({flightDetail : flightDetail});
        })
    }

    

    getPassengerId=event=>{
        //console.log(event.target.value);
        this.setState({selectedPaxId : event.target.value})
        //set the current state value so that to pass its value in all fields in modal popup inside UpdatePassengerModal.jsx
        let passenger=this.state.passengerList.find(passenger => passenger.id === Number(event.target.value));
        let firstName=passenger.firstName;
        let lastName=passenger.lastName;
        let mobileNo=passenger.mobileNo;
        let passportNo=passenger.passportNo;
        let dateOfBirth=passenger.dateOfBirth;
        let address=passenger.address;
        this.setState({selectedPaxId : (event.target.value), firstName, lastName, mobileNo, passportNo, dateOfBirth, address })
        
    }
    

    filterPassenger = event =>{
        let noPassportPax = this.state.noPassportPax;
        let noAddressPax =this.state.noAddressPax;
        let noDOBPax = this.state.noDOBPax;
        let filter_Pax_List = [];
        let allPassengerList = this.state.allPassengerList;

        if(event.target.id==="NO_PASSPORT"){
            if(event.target.checked){
                noPassportPax=true;
            }else noPassportPax=false;
            this.setState({noPassportPax : noPassportPax});
        }
        else if(event.target.id==="NO_ADDRESS"){
            if(event.target.checked){
                noAddressPax = true;
            }else noAddressPax = false;
            this.setState({noAddressPax : noAddressPax});
        }
        else if(event.target.id === "NO_DOB"){
            if(event.target.checked){
                noDOBPax = true;
            }else noDOBPax = false;
            this.setState({noDOBPax : noDOBPax});
        }
        
        
        

        if(!noPassportPax && !noAddressPax && !noDOBPax){
            this.setState({passengerList : allPassengerList})
        }else{
            if(noPassportPax){
                filter_Pax_List = allPassengerList.filter(passenger => passenger.passportNo === "");
            }
            else if (noAddressPax){
                filter_Pax_List = allPassengerList.filter(passenger => passenger.address === "");
            }
            else if(noDOBPax){
                filter_Pax_List = allPassengerList.filter(passenger => passenger.dateOfBirth === "");
            }
            this.setState({passengerList : filter_Pax_List});
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    genderSelect = event => {
        this.setState({gender : event.target.value})
    };

    hasInfant = event =>{
        let infant=""
        event.target.checked ? infant = "Yes" :infant = "No";
        this.setState({infant : infant})
    };
    wheelChairAccess = event =>{
        let wheelChair =""
        event.target.checked ? wheelChair = "Yes" : wheelChair = "No";
        console.log(wheelChair)
        this.setState({wheelChair : wheelChair})
    };
    submitHandler = event =>{
        event.preventDefault();
        console.log("submit triggerd");
        event.target.className += "was-validated";
        const {firstName, lastName, gender, mobileNo, passportNo, address, dateOfBirth, flightId, infant, wheelChair} = this.state
        const data = {firstName, lastName, gender, seatNo : "", mobileNo, passportNo, address, dateOfBirth, flightId, infant, wheelChair, status : "NC"}
        let createNewPassengerPromise = createNewPassenger(data);
         createNewPassengerPromise.then(response => {
             let passengerListPromise = getPassengerList(flightId)
            passengerListPromise.then(passengerList => this.setState({passengerList : passengerList}))

        })            
         
    };

    

    AddHandler = event => {
        event.preventDefault();
        if(!this.state.newItem.length){
            return;
        }
        let oldItems = this.state.items;
        let newItems = oldItems.concat(this.state.newItem);
        this.setState({items : newItems, newItem : ''})

        let data= {};
        if(this.state.service === "Meal"){
            data = {meals : newItems}
        }else{
            data = {ancilliary : newItems}
        }

        let flightPromise = updateFlightDetail(this.state.flightId, data);
        flightPromise.then(response=> console.log("Flight Detail or ancilliary updated"))

    }
    
    handleChange = (event) => {
        this.setState({newItem : event.target.value})
    }

    deleteServiceItem = (event) => {
        let oldItems = this.state.items.slice();
        let newItems= oldItems.filter(item => item !== event.target.value)
        this.setState({items : newItems})
        let data = {}
        if(this.state.service === "Meal"){
            data = {meals : newItems }
        }else{
            data = {ancilliary : newItems}
        }

        let flightPromise = updateFlightDetail(this.state.flightId, data);
        flightPromise.then(response => console.log("item deleted"))
    }

    selectAncilliaryService = event =>{
        this.setState({service : "Ancilliary",  items : this.state.flightDetail.ancilliary})
        
    }
    selectMealService = event =>{
        
        //this.setState({service : "Meal", items })
        this.setState({service : "Meal", items : this.state.flightDetail.meals})
        
    }

    changeHandle = event =>{
        this.setState({[event.target.name] : event.target.value});
    }
    
    submitHandle = event =>{
        event.preventDefault();
        event.target.className += " was-validated";
        const{selectedPaxId, firstName, lastName, dateOfBirth, passportNo, address} = this.state;
        let data ={firstName, lastName, dateOfBirth, passportNo, address}
        let passengerUpdatePromise=updatePassengerDetail(selectedPaxId, data)
        //to reflect the data updated in modal popup form without loading the page
        passengerUpdatePromise.then(response=>{
            let passengerList = this.state.passengerList.slice();
            let index=passengerList.findIndex(passenger=>passenger.id===Number(selectedPaxId))
            passengerList[index].firstName=firstName;
            passengerList[index].lastName=lastName;
            passengerList[index].dateOfBirth=dateOfBirth;
            passengerList[index].passportNo=passportNo;
            passengerList[index].address=address;
            this.setState({passengerList: passengerList})
         })
    }
    getMatchingPaxId = (passengerList, paxId) => {
        for (let i = 0; i < passengerList.length; i++) {
            if (passengerList[i].id === Number(paxId)) {
                return i;
            }
            
        }
    }

    updatePassengerList = (paxId, seatLocation, passengerList, seatMap) => {
        let i = this.getMatchingPaxId(passengerList, paxId);
        if (passengerList[i].seatNo === seatLocation) {
            passengerList[i].seatNo = '';
            passengerList[i].status = 'NC';
        } else {
            passengerList[i].seatNo = seatLocation;
            passengerList[i].status = 'AC';
        }
        let data = {
            status: passengerList[i].status,
            seatNo: passengerList[i].seatNo,
        }
        let updatedPaxDetailPromises = updatePassengerSeatAndStatus(passengerList[i].id, data);
        updatedPaxDetailPromises.then(response => console.log("updated passenger"))
        return passengerList;
    }

    seatHandleClick = event =>{
        console.log(event.target.id);
        console.log("Clicked");
        let seatNo = event.target.id;
        const seatLocation = SeatUtil.getSeatLocation(seatNo);
        let seatMap= this.state.seatMap.slice();
        let paxId=this.state.selectedPaxId;
        var flag=true;
        let passengerList=this.state.passengerList.slice();
        //console.log(passengerList);
        let index = this.getMatchingPaxId(passengerList, paxId);
        let wheelChair = passengerList[index].wheelChair;
        //console.log(wheelChair);
         let infant = passengerList[index].infant;
         for (let i = 0; i < seatMap.length; i++) {
             if (seatNo === String(seatMap[i].seatNo) && paxId === String(seatMap[i].paxId)) {
                 flag = false;
                 seatMap.splice(i, 1);
                 break;
             } else if (paxId === String(seatMap[i].paxId)) {
                 flag = false;
                 seatMap.splice(i, 1);
                 seatMap = [...seatMap, { paxId, seatNo, wheelChair, infant }]
                 break;
             }
         }
         if (flag) {
             seatMap = [...seatMap, { paxId, seatNo, wheelChair, infant }]
         }
         let updatedPaxList = this.updatePassengerList(paxId, seatLocation, passengerList, seatMap);
         this.setState({ seatMap: seatMap, passengerList: updatedPaxList });


        
    }

    render() {
       // console.log(this.props.flightId); 
        //console.log(this.props.userName);
        return (
            <div>
                <Header />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="8">
                            <PassengerList 
                                passengerList = {this.state.passengerList} 
                                filterPassenger={event =>this.filterPassenger(event)}
                                onChange={(event) => this.getPassengerId(event)}
                                passengerId= {this.state.selectedPaxId}
                                isAdmin={this.state.isAdmin}
                                flightDetail={this.state.flightDetail}
                                
                            />
                            <MDBRow>
                                <MDBCol>
                            {this.state.isAdmin ? <AddPassengerModal 
                                changeHandler={event=>this.changeHandler(event)} 
                                genderSelect={event=>this.genderSelect(event)}
                                passengerState={this.state}
                                hasInfant={event=>this.hasInfant(event)}
                                wheelChairAccess={event => this.wheelChairAccess(event)}
                                submitHandler = {event => this.submitHandler(event)}
                            /> : <></>}
                            </MDBCol>
                            <MDBCol>
                            {this.state.isAdmin ? <UpdatePassengerModal
                            changeHandle={event=> this.changeHandle(event)}
                            passengerDetail={this.state}
                            submitHandle={event=> this.submitHandle(event)}
                            >
                            </UpdatePassengerModal> : <></>}
                            </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="4">
                            {this.state.isAdmin ? <FlightDetail 
                                flightDetail = {this.state.flightDetail} 
                            /> : <></>}                       
                            {this.state.isAdmin ? <MealItem  
                            state = {this.state} 
                            selectAncilliaryService={event=> this.selectAncilliaryService(event)}
                            selectMealService={event=>this.selectMealService(event)}
                            AddHandler = {event=>this.AddHandler(event)}
                            handleChange ={event => this.handleChange(event)}
                            deleteServiceItem= {event => this.deleteServiceItem(event)}>

                            </MealItem> : <></>}
                            {this.state.isAdmin ? <></> :<SeatContainer seatHandleClick={event=> this.seatHandleClick(event)}
                            bookedSeat={this.state.seatMap}
                            passengerId={this.state.selectedPaxId}
                            ></SeatContainer>}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
return{
    flightId : state.flight.flightId,
    role : state.user.role
}
}
export default connect(mapStateToProps)(CheckInContainer)