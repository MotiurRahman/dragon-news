import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewSummaryCard = ({ newsInfo }) => {
  const { rating, total_view, author, thumbnail_url, title, details, _id } =
    newsInfo;
  return (
    <div>
      <Card>
        <Card.Header>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <Image
                roundedCircle
                src={author.img}
                style={{ height: "60px" }}
              ></Image>
              <div className="ms-2">
                <h4>{author.name}</h4>
                <p>
                  <small>{author.published_date}</small>
                </p>
              </div>
            </div>

            <div>
              <FaBookmark></FaBookmark>
              <FaShareAlt></FaShareAlt>
            </div>
          </div>
        </Card.Header>
        <Card.Img variant="top" src={thumbnail_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 250) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <FaStar></FaStar>
              <p className="mb-0 ms-2">{rating.number}</p>
            </div>
            <div className="d-flex align-items-center">
              <FaEye></FaEye>
              <p className="mb-0 ms-2">{total_view}</p>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewSummaryCard;
