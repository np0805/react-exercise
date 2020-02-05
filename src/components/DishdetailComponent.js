import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            // selectedDish: null
        };
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    // renderComments(comments){
    //     if(comments != null) {
    //         return(
    //             <div>
    //                 <h4>Comments</h4>

    //             </div>
    //         );
    //     }
    //     else {
    //         return(
    //             <div></div>
    //         );
    //     }
    // }

    render() {

        // const menu = this.props.dishes.map((dish) => {
        //     return (
        //       <div key={dish.id} className="col-12 col-md-5 m-1">
        //         <Card onClick={() => this.onDishSelect(dish)}>
        //             <CardImg width="100%" src={dish.image} alt={dish.name} />
        //           <CardImgOverlay>
        //             <CardTitle>{dish.name}</CardTitle>
        //           </CardImgOverlay>
        //         </Card>
        //       </div>
        //     );
        // });

        return ( //return what needs to be displayed in the UI
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">                        
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {/* {this.renderComments(this.props.selectedDish.comments)} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dishdetail;