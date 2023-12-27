import * as Style from "./index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import star from '@/../public/Star.svg'
import starHalf from '@/../public/StarHalf.svg'
import imdb from '@/../public/imdb.png'
import back from '@/../public/btn - Previous.svg'

import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";
import Loader from "../Loader";
import Image from "next/image";
import Comments from "./Comments";
const Details = () => {
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || ""
  );

  if (isLoading || filmRetrieve == undefined) {
    return <Loader />;
  }

  const props = filmRetrieve.data.movie
  const stars = Math.round((props.rating / 2) * 10) / 10

  let backgroundColor;
  if (props.rating < 4) {
    backgroundColor = 'red';
  } else if (props.rating < 7) {
    backgroundColor = 'gray';
  } else {
    backgroundColor = 'green';
  }

  return (
    <Style.Details>
      <Style.Content>
        <Style.Data>
          <Style.Cards>
            <Link href={props.url}>
              <Style.CardWithRating>
                <Style.CardImage src={props.large_cover_image} alt='card image'/>
                <Style.RatingContainer style={{ backgroundColor }}>
                  {props.rating}
                </Style.RatingContainer>
              </Style.CardWithRating>
            </Link>
          </Style.Cards>

          <Style.rightContent>
            <Style.Title>
              {props.title + " (" +  props.year + ")"}  
            </Style.Title>

            <Style.Title>
              Genres: {props.genres.join(', ')}
            </Style.Title>

            <Style.Title>
              Language: {props.language}
            </Style.Title>

            <Style.Title>
              Likes: {props.like_count}
            </Style.Title>

            <Style.Description>
              {props.description_full}
            </Style.Description>
          </Style.rightContent>
        </Style.Data>

        {props != undefined && (
          <>
            <Comments PersonKey={props.id}/>
          </>
        )}
      </Style.Content>
    </Style.Details>
  );
};

export default Details;
