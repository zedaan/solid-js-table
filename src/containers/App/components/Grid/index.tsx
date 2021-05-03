import { styled } from "solid-styled-components";
import { Column, Row } from "../../../../components/Grid";

const Div = styled("div")`
  background-color: ${(props: any) => props.theme.colors.grey};
  border-radius: 8px;
  margin: 8px;
  padding: 15px;
  color: ${(props) => props.theme.colors.primaryText};
`;

const Wrapper = styled("div")`
  h5 {
    color: #fff;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const Grid: any = () => {
  return (
    <Wrapper>
      <h5 style={{ color: "#fff" }}>Row</h5>
      <Row>
        <Column>
          <Div>Column 1</Div>
        </Column>
        <Column>
          <Div>Column 2</Div>
        </Column>
        <Column>
          <Div>Column 3</Div>
        </Column>
      </Row>
      <h5 style={{ color: "#fff" }}>Row Reversed</h5>
      <Row>
        <Column>
          <Div>Column 1</Div>
        </Column>
        <Column>
          <Div>Column 2</Div>
        </Column>
        <Column>
          <Div>Column 3</Div>
        </Column>
      </Row>
      <h5 style={{ color: "#fff" }}>Row fit content</h5>
      <Row>
        <Column size={1}>
          <Div>Column 1</Div>
        </Column>
        <Column size={1}>
          <Div>Column 2</Div>
        </Column>
        <Column size={1}>
          <Div>Column 3</Div>
        </Column>
        <Column size={1}>
          <Div>Column 4</Div>
        </Column>
      </Row>
      <h5 style={{ color: "#fff" }}>Row Center</h5>
      <Row align="center">
        <Column>
          <Div>Column 1</Div>
        </Column>
        <Column>
          <Div>Column 2</Div>
        </Column>
        <Column>
          <Div>Column 3</Div>
        </Column>
        <Column>
          <Div>Column 5</Div>
        </Column>
      </Row>

      <h5 style={{ color: "#fff" }}>Row right aligned</h5>
      <Row align="end">
        <Column>
          <Div>Column 1</Div>
        </Column>
        <Column>
          <Div>Column 2</Div>
        </Column>
        <Column>
          <Div>Column 3</Div>
        </Column>
        <Column>
          <Div>Column 5</Div>
        </Column>
      </Row>

      <h5 style={{ color: "#fff" }}>Row Space between</h5>
      <Row align="between">
        <Column>
          <Div>Column 1</Div>
        </Column>
        <Column>
          <Div>Column 2</Div>
        </Column>
        <Column>
          <Div>Column 3</Div>
        </Column>
        <Column>
          <Div>Column 5</Div>
        </Column>
      </Row>

      <h5 style={{ color: "#fff" }}>Column</h5>
      <Row direction="col">
        <Column>
          <Div>Column 1</Div>
        </Column>
        <Column>
          <Div>Column 2</Div>
        </Column>
        <Column>
          <Div>Column 3</Div>
        </Column>
        <Column>
          <Div>Column 5</Div>
        </Column>
      </Row>

      <h5 style={{ color: "#fff" }}>Column Reversed</h5>
      <Row direction="col-reverse">
        <Column>
          <Div>Column 1</Div>
        </Column>
        <Column>
          <Div>Column 2</Div>
        </Column>
        <Column>
          <Div>Column 3</Div>
        </Column>
        <Column>
          <Div>Column 5</Div>
        </Column>
      </Row>
    </Wrapper>
  );
};

export default Grid;
