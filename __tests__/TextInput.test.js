import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import STextInput from "../src/components/common/STextInput";

const initialProps = {
  label: "",
  placeholder: "Tap to Write",
  value: "",
  onChangeText: () => {},
  type: "ascii-capable",
  containerStyle: {},
};

describe("STextInput (common) component test cases", () => {
  //snapshot testing
  test("Renderes Correctly", () => {
    const snapshot = renderer.create(<STextInput />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test("Is label prop not present", () => {
    const title = renderer.create(<STextInput {...initialProps} />);
    const textInput = title.root.findByType(STextInput);
    expect(textInput.props.label).toBe("");
  });

  test("Is label prop present", () => {
    const title = renderer.create(<STextInput label={"Name"} />);
    const textInput = title.root.findByType(STextInput);
    expect(textInput.props.label).toBe("Name");
  });

  test("Is placeholder Prop is not present",()=>{
    const placeholder = renderer.create(<STextInput {...initialProps} />);
    expect(placeholder.root.findByType(STextInput).props.placeholder).toBe('Tap to Write');
  })

  test("Is placeholder Prop is present",()=>{
    const placeholder = renderer.create(<STextInput placeholder="Enter you name" />);
    expect(placeholder.root.findByType(STextInput).props.placeholder).toBe('Enter you name');
  })

  test("Is value prop not present", () => {
    const title = renderer.create(<STextInput {...initialProps} />);
    const textInput = title.root.findByType(STextInput);
    expect(textInput.props.value).toBe("");
  });

  test("Is value prop present", () => {
    const title = renderer.create(<STextInput value={"Nikhil"} />);
    const textInput = title.root.findByType(STextInput);
    expect(textInput.props.value).toBe("Nikhil");
  });

  test("Is type prop not present", () => {
    const title = renderer.create(<STextInput {...initialProps} />);
    const textInput = title.root.findByType(STextInput);
    expect(textInput.props.type).toBe("ascii-capable");
  });

  test("Is type prop present", () => {
    const title = renderer.create(<STextInput type={"default"} />);
    const textInput = title.root.findByType(STextInput);
    expect(textInput.props.type).toBe("default");
  });

  test("Handle OnChangeText Correctly", () => {
    const onChangeMockText = jest.fn();
    const tree = renderer.create(
      <STextInput onChangeText={onChangeMockText} />
    );
    tree.root.findByType(STextInput).props.onChangeText("Hello World");
    expect(onChangeMockText).toHaveBeenCalledWith("Hello World");
  });

  test("Is containerStyle prop not present", () => {
    const title = renderer.create(<STextInput {...initialProps} />);
    const textInput = title.root.findByType(STextInput);
    expect(textInput.props.containerStyle).toStrictEqual({});
  });

  test("Is containerStyle prop present", () => {
    const title = renderer.create(<STextInput containerStyle={{borderRadius:7}} />);
    const textInput = title.root.findByType(STextInput);
    expect(textInput.props.containerStyle).toStrictEqual({borderRadius:7});
  });
});
