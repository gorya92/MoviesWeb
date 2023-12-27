import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { VscStarFull } from "react-icons/vsc";
import * as Style from "./index.styled";

const Film: React.FC<MovieList> = (props) => {

  let backgroundColor;
  if (props.rating < 4) {
    backgroundColor = 'red';
  } else if (props.rating < 7) {
    backgroundColor = 'gray';
  } else {
    backgroundColor = 'green';
  }

  return (
    <Style.Film>
      <Link href={`/films/${props.id}`}>
        <Style.Content>
          <Style.Cards>
          <Style.CardWithRating>
            <Style.Card1
              src={
                props.large_cover_image
                  ? props.large_cover_image
                  : "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
              }
              alt={props.large_cover_image}
            ></Style.Card1>
            <Style.RatingContainer style={{ backgroundColor }}>
                {props.rating}
              </Style.RatingContainer>
            </Style.CardWithRating>

            <Style.Card2>
                <Style.Genres>
                    <Style.GenresText>
                      {props.title.toUpperCase()}
                    </Style.GenresText>
                </Style.Genres>
            </Style.Card2>
          </Style.Cards>
        </Style.Content>
      </Link>
    </Style.Film>
  );
};

export default Film;
