import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItemContainer = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px black;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: grey;
    width: 0px;
    overflow: hidden;
  }

  &:hover {
    ::after {
      animation: moveText 1s linear both;
    }

    .item-details {
      display: block;
    }
  }
`;

const ItemDetails = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 260%;
  padding: 10px;
  background-color: white;
  border: 1px solid gray;
  text-align: center;

`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const ListItem = ({ text, imageSrc, additionalText }) => {
  return (
    <ListItemContainer text={text}>
      {text}
      <ItemDetails className="item-details">
        <ItemImage src={imageSrc} alt="Image" />
        <p>{additionalText}</p>
      </ItemDetails>
    </ListItemContainer>
  );
};

const YourComponent = () => {
  const data = [
    { text: 'Item 1', imageSrc: 'your-image-url-1', additionalText: 'Additional Text 1' },
    { text: 'Item 2', imageSrc: 'your-image-url-2', additionalText: 'Additional Text 2' },
    // Add more data objects as needed
  ];

  return (
    <List>
      {data.map((item) => (
        <ListItem
          key={item.text}
          text={item.text}
          imageSrc={item.imageSrc}
          additionalText={item.additionalText}
        />
      ))}
    </List>
  );
};

export default YourComponent;
