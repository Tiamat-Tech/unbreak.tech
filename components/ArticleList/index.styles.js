import styled, { css } from "styled-components";

const Articles = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 1.6;
  text-align: center;
  display: table;
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
`;

const TitleInner = styled.span`
  background-color: var(--black);
  color: var(--white);
  display: inline;
  padding: 0.6rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`;

const Card = styled.a`
  background-color: var(--red);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  aspect-ratio: 9/16;
  position: relative;
  border: 0.125rem solid var(--red);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-image: linear-gradient(to bottom, rgba(15, 17, 26, 0.25), rgba(15, 17, 26, 1));
  ${(props) =>
    props.imageUrl !== null &&
    css`
      background-image: linear-gradient(to bottom, rgba(15, 17, 26, 0.25), rgba(15, 17, 26, 1)),
        url(${props.imageUrl});
    `};

  &:focus,
  &:hover {
    cursor: pointer;
    background-blend-mode: unset;
  }

  &:hover ${TitleInner}, &:focus ${TitleInner} {
    background-color: var(--white);
    color: var(--black);
    cursor: pointer;
  }
`;

const Author = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  display: block;
  text-align: center;
  width: 100%;
  font-family: var(--font-family-heading);
  background-color: var(--black);
  font-weight: var(--font-weight-bold);
  color: var(--white);
  padding: 0.5rem;
  bottom: 0;
  position: absolute;
`;

export { Articles, Card, Title, TitleInner, Author };
