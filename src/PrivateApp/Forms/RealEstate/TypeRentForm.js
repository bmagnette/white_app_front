import React from 'react';
import '../../../public/css/PrivateApp/card.css';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Garage from "../../../public/img/garage.jpg";
import Apartment from "../../../public/img/apartment.jpg";
import House from '../../../public/img/default_house.jpg';


class TypeRentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isApartment: false,
            isHouse: false,
            isGarage: false
        }
    }
    handleClicApartment = () => {
        if(this.state.isApartment === true){
            this.setState({isApartment: false});
        }
        else{
            this.setState({isApartment: true, isHouse: false, isGarage: false});
        }
    };

    handleClickGarage = () => {
        if(this.state.isGarage === true){
            this.setState({isGarage: false});
        }
        else{
            this.setState({isGarage: true, isApartment: false, isHouse: false});
        }
    };

    handleClickHouse = () => {
        if(this.state.isHouse === true){
            this.setState({isHouse: false});
        }
        else{
            this.setState({isHouse: true, isApartment: false, isGarage: false});
        }
    };


    validatePartForm = () => {
        if(this.state.isGarage || this.state.isApartment || this.state.isHouse){
            this.saveAndContinue();
        }
        else{
            console.log("THIS IS ERROR SEND MESSAGE.")
        }
    };

    saveAndContinue = () => {
        this.props.nextStep("situation_form");
    };

    render() {
        return (
            <div>
                <div className="add_apartment_wrapper">
                    <div className="situation_form_wrapper">
                        <div className="situation_form_proposition">
                            <h4>Appartement</h4>
                            <Link to="#"><img onClick={this.handleClicApartment} width={300} height={200} src={Apartment} alt="Appartement"/></Link>
                            <div className="situation_form_slider">
                                <label className="switch">
                                    <input type="checkbox" value={this.state.isApartment} checked={this.state.isApartment === true} onChange={(e) => this.handleClicApartment()}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className="situation_form_proposition">
                            <h4>Garage</h4>
                            <Link to="#"><img onClick={this.handleClickGarage} width={300} height={200} src={Garage} alt="Logement meublé"/></Link>
                            <div className="situation_form_slider">
                                <label className="switch">
                                    <input type="checkbox" value={this.state.isGarage} checked={this.state.isGarage === true} onChange={(e) => this.handleClickGarage()}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className="situation_form_proposition">
                            <h4>Maison</h4>
                            <Link to="#"><img onClick={this.handleClickHouse} width={300} height={200} src={House} alt="House"/></Link>
                            <div className="situation_form_slider">
                                <label className="switch">
                                    <input type="checkbox" value={this.state.isHouse} checked={this.state.isHouse === true} onChange={(e) => this.handleClickHouse()}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="situation_form_wrapper_button">
                        <Button onClick={this.validatePartForm}>Suivant</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TypeRentForm;