import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}) {
    if (dish != null) {
        return(
            <div className="col-12 col-md-5 m-1"> 
                <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else {
        return(
            <div></div>
        );
    }
}

function RenderComments({dish}) {
    if (dish != null) {
        if (dish.comments != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {dish.comments.map((comment) => {
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })};
                    </ul>
                </div>
            );
        }
    }
    else {
        return(
            <div></div>
        );
    }
}

const  DishDetail = (props) => {
    
    return ( //return what needs to be displayed in the UI
        <div className="container">
            <div className="row">
                <RenderDish dish={props.selectedDish} />
                <RenderComments dish={props.selectedDish} />
                {/* {RenderDish(this.props.selectedDish)}
                {RenderComments(this.props.selectedDish)} */}
            </div>
        </div>
    );
}


export default DishDetail;