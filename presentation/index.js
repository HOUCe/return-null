// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from "spectacle";
import DictationBox from "./components/DictationBox";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  reactRally: require("../assets/react-rally-ryan.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
}, {
  primary: "Montserrat",
  secondary: "Helvetica",
  tertiary: "Monaco, monospace",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={300}
        theme={theme}
        progress="bar"
      >
        <Slide bgColor="tertiary">
          <Heading
            size={1}
            fit
            lineHeight={1}
            textColor="secondary"
            textFont="tertiary"
            style={{ fontWeight: 100, letterSpacing: -1 }}
          >
            return null;
          </Heading>
          <br />

          <Heading size={3} fit textColor="secondary">
            Experiments with Renderless Components
          </Heading>

          <Text style={{ marginTop: "20%" }} textColor="primary" size={5}>
            By Joshua Comeau
          </Text>
        </Slide>

        <Slide bgImage={images.reactRally} />

        <Slide bgColor="secondary">
          <Heading fit textColor="primary">Event Listeners</Heading>
        </Slide>

        <Slide bgColor="secondary">
          ...Stuff about event listeners
        </Slide>

        <Slide bgColor="tertiary">
          <DictationBox />
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
