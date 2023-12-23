import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import SButton from '../src/components/common/SButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');

const initialProps={
    text:'Nikhil',
    textSize : 14,
    backgroundColor : '#eee',
    color : '#000',
    width : '100%',
    containerStyle:{},
    iconShown : true,
    borderColor : '#000',
    icon : <MaterialIcons name="arrow-forward-ios" size={20} />,
}

describe('SButton component', () => {

  test("First taking snapshot",()=>{
    const snapshot = render(<SButton {...initialProps} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  })  


  it.only('Check if the SButton renders with correct text', () => {
    const expectedText = 'hello';
    const screen = render(<SButton text={expectedText} />);    
    const button = screen.getByText(expectedText);
    expect(button).toBeTruthy();
  });
  

  test('renders correctly with default props', () => {
    const { getByText } = render(<SButton text="Click me" />);
    const buttonText = getByText('Click me');
    expect(buttonText).toBeTruthy();
  });

  test('fires onPress callback when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<SButton text="Click me" onPress={onPressMock} />);
    const button = getByText('Click me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  test('renders icon when iconShown is true', () => {
    const { getByTestId } = render(<SButton text="Click me" iconShown={true} />);
    expect(getByTestId).toBeTruthy();
  });

  test('does not render icon when iconShown is false', () => {
    const { queryByTestId } = render(<SButton text="Click me" iconShown={false} />);
    const icon = queryByTestId("");
    expect(icon).toBeNull();
  });

  test('renders with custom backgroundColor, color, width, and borderColor props', () => {
    const { toJSON } = render(
      <SButton
        text="Custom Style"
        backgroundColor="#FF5733"
        color="#FFFFFF"
        width="50%"
        borderColor="#0088CC"
      />
    );
    const componentTree = toJSON();
    expect(componentTree).toMatchSnapshot(); 
  });

 
});
