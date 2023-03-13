import { Banner, Text } from "fusion";

function App() {
  return (
    <div>
      <Banner
        footer="Footer"
        header="MFE 1"
        icon={null}
        onClose={function noRefCheck() {}}
      >
        <span>
          <Text
            color="primary"
            style={{
              display: "inline",
            }}
          >
            buckle
          </Text>{" "}
          <Text
            color="textSecondary"
            style={{
              display: "inline",
            }}
          >
            shoe
          </Text>
        </span>
      </Banner>
    </div>
  );
}

export default App;
